#!/bin/sh
if test -z $GTCORE ; then
    echo variable GTCORE not set, run gtsetup.sh and retry
    exit 1
fi
if ! test -f am-shared ; then
    ln -s $GTCORE/am-shared am-shared
fi
autoreconf -i
