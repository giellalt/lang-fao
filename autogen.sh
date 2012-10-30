#!/bin/sh

# The whole GT infra requires GTCORE to be accessible at setup time
if test -z $GTCORE ; then
    echo variable GTCORE not set, run gtsetup.sh and retry
    exit 1
fi

echo "Initial automake setup of $(basename $(pwd))"

# autoreconf should work for most platforms
autoreconf -i
