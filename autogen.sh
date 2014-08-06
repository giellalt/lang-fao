#!/bin/bash

function print_usage() {
    echo "Usage: $0 [OPTIONS...]"
    echo "Prepare Autotools build infrastructure"
    echo
    echo "  -h, --help          print this usage info"
    echo "  -l, --add-langvar   Add env. variable \$GTLANG_fao to login script."
    echo "                      This makes it possible to use the built fst's"
    echo "                      with the analyser and generator scripts."
    echo
}

# option variables
langvar=""

# manual getopt loop... Mac OS X does not have good getopt
while test $# -ge 1 ; do
    if test x$1 = x--add-langvar -o x$1 = x-l ; then
        langvar=langvar
    elif test x$1 = x--help -o x$1 = x-h ; then
        print_usage
        exit 0
    else
        echo
        echo "ERROR: $0: unknown option $1"
        print_usage
        exit 1
    fi
    shift
done

# Variable setup for adding env. variable:
GTLANG=fao
LANGDIR=$(pwd)
TIME=$(date +%H%M)
DATE=$(date +%Y%m%d)
LOGINFILE=

# Find the login file:
if [[ -r ~/.bash_profile ]]; then
	LOGINFILE=~/.bash_profile
elif [[ -r ~/.profile ]]; then
	LOGINFILE=~/.profile
elif [[ -r ~/.bashrc ]]; then
	LOGINFILE=~/.bashrc
fi

echo
echo "Initial automake setup of $(basename $(pwd))"

# autoreconf should work for most platforms
autoreconf -i

# If option -l / --add-langvar was used:
if test x$langvar = xlangvar ; then
	if test x$LOGINFILE = x ; then
		echo
		echo "ERROR: could not find a login script to add the variable to!"
		echo
		exit 1
	else
		if test x${GTLANG_fao} = x${LANGDIR} ; then
			echo "\${GTLANG_fao} already defined."
		else
			# Already defined with a different value:
			if test x${GTLANG_fao} != x ; then
				renew=renew
				OLDLANGDIR=${GTLANG_fao}
			fi

			# Add the variable to the login script:
			cp $LOGINFILE $LOGINFILE.gtbackup.${DATE}-${TIME}
			echo "export GTLANG_fao=$LANGDIR" >> $LOGINFILE
			source $LOGINFILE

			# Feedback depending on whether it was added or redefined:
			if test x$renew = xrenew ; then
			 echo "The env. variable \${GTLANG_fao} has been redefined in"
			 echo "$LOGINFILE. The old value ${OLDLANGDIR} is no longer in use."
			else
			 echo "The env. variable \${GTLANG_fao} has been added"
			 echo "to $LOGINFILE. Your built fst's (those you get after"
			 echo "'make') will be used with the analyser and generator"
			 echo "scripts. There's a backup of your old $LOGINFILE in"
			 echo " $LOGINFILE.gtbackup.${DATE}-${TIME}."
    		 echo "Please log out and in again for the variable to take effect."
			fi
		fi
	fi
fi

# Check whether the variable is defined, warn the user if not or different from
# the current dir:
if   test x${GTLANG_fao} = x ; then
	echo "WARNING: The variable \${GTLANG_fao} has not been defined. You"
	echo "will not be able to use your own fst's with the analyser and"
	echo "generator scripts if not defined. Please consider rerunning this"
	echo "script with option -l:"
	echo
	echo "$0 -l"
	echo
elif test x${GTLANG_fao} != x${LANGDIR} ; then
	echo "WARNING: The variable \${GTLANG_fao} has the value:"
	echo "  ${GTLANG_fao}"
	echo "instead of the expected:"
	echo "  ${LANGDIR}"
	echo "Please consider rerunning this script with option -l to update the"
	echo "variable:"
	echo
	echo "$0 -l"
	echo
fi
