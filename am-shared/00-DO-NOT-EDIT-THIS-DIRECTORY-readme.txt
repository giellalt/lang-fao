README
======

This directory SHOULD NOT BE CHANGED MANUALLY.

It should ONLY BE CHANGED using an AUTOMATIC MERGE from the template dir.


HOW TO CHANGE
-------------

That is, if you find you need to change this dir, do as follows:

CHANGE THE TEMPLATE
-------------------

1) make your changes _without_ committing (or by using a branch)
2) test your changes
3) when ok, manually copy your changes to $GIELLA_TEMPLATES/langs/und/
4) edit $GIELLA_TEMPLATES/langs/und/und.timestamp to contain a change note
5) commit the changes in $GIELLA_TEMPLATES/langs/und/

PROPAGATE THE CHANGES
---------------------

Then, in each langs/ dir (langs/, startup-langs/, experiment-langs/), run the
following commands (it might be a good idea to check out these langs dirs
independently for this operation):

First time:

./autogen.sh
./configure

Each time:

`make templatemerge`

or

`make templatemerge USERNAME=<your-svn-username>`

This command will svn-merge the changes in $GIELLA_TEMPLATES/langs/und/ with
each language dir.

Review the merge results, if ok then commit (preferably all languages at once).


!!! WARNING !!!
===============

We want to avoid merge conflicts at any costs since this merge scheme is the
core of the scaleability of the infrastructure, so:

KEEPING THE am-shared DIR FREE OF LOCAL MODIFICATIONS IS IMPERATIVE FOR THE
MERGE SCHEME TO FUNCTION!


ALTERNATIVE
-----------

In the case the above procedure is too complicated, or doesn't fit the changes
you need, you can instead leave a (diff and) change request at
http://giellatekno.uit.no/bugzilla/, or just send an e-mail to
feedback@divvun.no.
