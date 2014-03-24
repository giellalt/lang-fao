#!/bin/bash

# This is a shell script that will call the actual test runner with the
# specified transducer. This determines also the set of yaml test files looped
# over by the test runner.

###### Variables: #######
transducer=dict-gt-norm
halftest=gen # analysis test

source $srcdir/run-yaml-testcases.sh $transducer $halftest
