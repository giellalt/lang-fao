#!/bin/bash

# set -x

# Variable setup for adding env. variable:
LANGDIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
GTLANG=$(basename "$LANGDIR" | cut -d'-' -f2- )
GTLANG_langenv=GTLANG_$GTLANG
TIME=$(date +%H%M)
DATE=$(date +%Y%m%d)
LOGINFILE=

function print_usage() {
    echo "Usage: $0 [OPTIONS...]"
    echo "Prepare Autotools build infrastructure, ensure that giella-shared and"
    echo "giella-core is available before setting up Autotools."
    echo
    echo "  -h, --help          print this usage info"
    echo "  -l, --add-langvar   Add env. variable \$GTLANG_$GTLANG to login script."
    echo "                      This makes it possible to use the built fst's"
    echo "                      with the analyser and generator scripts."
    echo
}

function svn_check_out() {
    reponame=$1
    svn checkout "$HTTPS_REPO_HOST/$reponame.git/trunk" "$reponame"
}

function git_clone() {
    reponame=$1
    if [[ $gitprotocol == *"https"* ]] ; then
        git clone "$HTTPS_REPO_HOST/$reponame.git"
    else # ssh:
        git clone "$SSH_REPO_HOST/$reponame.git"
    fi
}

function make_symlink() {
    origdir=$1
    envvar=$2
    reponame=$3
    packagename=$4
    # Check that the dir contains the packagename.pc.in file, if yes, create symlink:
    if test -f "$origdir/$packagename.pc.in" ; then
        echo "Found $envvar => $origdir, creating symbolic link to $reponame in $LANGDIR/../"
        ln -s "$origdir" ../"$reponame"
    else # If not, error out with a message that the repo is broken:
        echo "ERROR: Found $origdir, but it seems to be broken:"
        echo "It does not contain $packagename.pc.in"
        exit 1
    fi
}

function get_dep_repo() {
    reponame=$1 # no spaces around '='! Or it will fail!
    packagename=$2
    repoformat=$3
    echo
    echo "Looking for $reponame ..."
    # 1. check if the dir is there:
    if test -d "$LANGDIR"/../"$reponame" ; then
        # basic test that the dir is actually the one we want/not empty or bad:
        if test -f "$LANGDIR/../$reponame/$packagename.pc.in" ; then
            echo "$reponame found in ../"
        else
            echo "ERROR: Found $LANGDIR/../$reponame, but it seems to be broken:"
            echo "Run the command:"
            echo "rm -f $LANGDIR/../$reponame"
            echo "and try again."
            exit 1
        fi
    else
        # echo "Nothing found, cloning/checking out $reponame"
        if test "$repoformat" == "git" ; then
            echo "Nothing found, cloning $reponame in ../"
            gitprotocol=$(git remote get-url origin )
            cd "$LANGDIR/../" || exit 2
            git_clone "$reponame"
            cd "$LANGDIR" || exit 2
        elif test "$repoformat" == "svn" ; then
            echo "Nothing found, checking out $reponame in ../"
            cd "$LANGDIR/../" && svn_check_out "$reponame"
        else
            echo "ERROR: Not possible to find or get $reponame. Giving up."
            exit 1
        fi
    fi
}

# option variables
langvar=""

# manual getopt loop... Mac OS X does not have good getopt
while test $# -ge 1 ; do
    if test "x$1" = "x--add-langvar" -o "x$1" = "x-l" ; then
        langvar=langvar
    elif test "x$1" = "x--help" -o "x$1" = "x-h" ; then
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

if test -d "$LANGDIR/.git" ; then
    repoformat=git
elif test -d "$LANGDIR/.svn" ; then
    repoformat=svn
else
    repoformat=unknown
fi

HTTPS_REPO_HOST=https://github.com/giellalt
SSH_REPO_HOST=git@github.com:giellalt


get_dep_repo "giella-core" "giella-core" "$repoformat"
## TODO: remove after shared-mul is in place for long enough
get_dep_repo "giella-shared" "giella-common" "$repoformat"
get_dep_repo "shared-mul" "giella-shared-mul" "$repoformat"
if grep -F -q 'gt_USE_SHARED' configure.ac ; then
    grep -F 'gt_USE_SHARED' configure.ac |\
            sed -e 's/^.*gt_USE_SHARED//' | tr -d '[( )]' |\
            while read -r r ; do
        get_dep_repo "$(echo "$r" | cut -d , -f 2)" \
            "$(echo "$r" | cut -d , -f 3)" $repoformat
    done
fi
# Find the login file:
if [[ -r ~/.bash_profile ]]; then
    LOGINFILE=~/.bash_profile
elif [[ -r ~/.profile ]]; then
    LOGINFILE=~/.profile
elif [[ -r ~/.bashrc ]]; then
    LOGINFILE=~/.bashrc
fi

echo
echo "Initial automake setup of $(basename "$(pwd)")"

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
        if test "x${GTLANG_langenv}" = "x${LANGDIR}" ; then
            echo "${!GTLANG_langenv} already defined."
        else
            # Already defined with a different value:
            if test "x${GTLANG_langenv}" != x ; then
                renew=renew
                OLDLANGDIR=${!GTLANG_langenv}
            fi

            # Add the variable to the login script:
            cp "$LOGINFILE" "$LOGINFILE.gtbackup.${DATE}-${TIME}"
            echo "export $GTLANG_langenv=$LANGDIR" >> $LOGINFILE
            # shell check should not in fact source bash profile or such:
            # shellcheck source=/dev/null
            source $LOGINFILE

            # Feedback depending on whether it was added or redefined:
            if test x$renew = xrenew ; then
                echo "The env. variable ${GTLANG_langenv} has been redefined in"
                echo "$LOGINFILE. The old value ${OLDLANGDIR} is no longer in use."
            else
                echo "The env. variable ${GTLANG_langenv} has been added"
                echo "to $LOGINFILE. Your built fst's (those you get after"
                echo "'make') will be used with the analyser and generator"
                echo "scripts. There's a backup of your old $LOGINFILE in"
                echo " $LOGINFILE.gtbackup.${DATE}-${TIME}."
                echo "Please log out and in again for the variable to take effect."
            fi
        fi
    fi
fi

### Commented out the check for now, as there is no practical use of this variable.
### It is ok to set the variable if one wants to, but we'll return to these things
### at a later point.
###
### # Check whether the variable is defined, warn the user if not or different from
### # the current dir:
### if   test x${!GTLANG_langenv} = x ; then
###     echo "WARNING: The variable ${GTLANG_langenv} has not been defined. You"
###     echo "will not be able to use your own fst's with the analyser and"
###     echo "script with option -l:"
###     echo
###     echo "$0 -l"
###     echo
### elif test x${!GTLANG_langenv} != x${LANGDIR} ; then
###     echo "WARNING: The variable ${GTLANG_langenv} has the value:"
###     echo "  ${!GTLANG_langenvs}"
###     echo "instead of the expected:"
###     echo "  ${LANGDIR}"
###     echo "Please consider rerunning this script with option -l to update the"
###     echo "variable:"
###     echo
###     echo "$0 -l"
###     echo
### fi
