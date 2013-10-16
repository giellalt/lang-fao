#!/bin/sh

echo "Initial automake setup of $(basename $(pwd))"

# autoreconf should work for most platforms
autoreconf -i
