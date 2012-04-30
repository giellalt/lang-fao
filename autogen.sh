#!/bin/sh

# The whole GT infra requires GTCORE to be accessible at setup time
if test -z $GTCORE ; then
    echo variable GTCORE not set, run gtsetup.sh and retry
    exit 1
fi

# the include directive of automake needs to have shared templates
# in $topdir at setup time; currently we use symlinks to achieve this
if ! test -L am-shared ; then
    ln -s $GTCORE/am-shared am-shared
fi

# autoreconf should work for most platforms
autoreconf -i
