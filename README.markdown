The Faroese morphology and tools
================================

This directory contains source files for the Faroese language morphology
and dictionary. The data and implementation are licenced under
\_\_LICENCE\_\_ licence also detailed in the LICENCE file of this
directory. The authors named in the AUTHORS file are available to grant
other licencing choices.

Installation and compilation, and a short note on usage, is documented
in the file INSTALL.

Documentation can be found here:

-   <https://giellalt.uit.no/lang/fao/index.html> (analyser)
-   <https://giellalt.uit.no/index.html> (infrastructure)

Requirements
------------

In order to compile and use Faroese language morphology and
dictionaries, you need:

-   Xerox Finite-State Morphology tools, or
-   Helsinki Finite-State Technology library and tools, version 3.8 or
    newer, or
-   Foma finite-state tool

Optionally:

-   VislCG3 Constraint Grammar tools

Downloading
-----------

The Faroese language sources can be acquired using [giella SVN
repository](https://giellalt.uit.no/infra/anonymous-svn.html), from the
language specific directory, after the core has been downloaded and
initial setup has been performed.

Installation
------------

INSTALL describes the GNU build system in detail, but for most users the
usual:

```
 ./configure
 make
 (as root) make install
```

should result in a local installation and:

    (as root) make uninstall

in its uninstallation.

If you would rather install in e.g. your home directory (or aren\'t the
system administrator), you can tell ./configure:

    ./configure --prefix=$HOME

If you are checking out the development versions from SVN you must first
create and install the necessary autotools files from the host system,
and check that your environment is correctly set up. This is done by
doing:

> ./autogen.sh

It is common practice to keep [generated files out of version
control](http://www.gnu.org/software/automake/manual/automake.html#CVS).

VPATH builds
------------

If you want to keep the source code tree clean, a VPATH build is the
solution. The idea is to create a build dir somewhere outside of the
source code tree, and call [configure]{.title-ref} from there. Here is
one VPATH variant of the standard procedure:

```
 mkdir build && cd build
 ../configure
 make
 (as root) make install
```

This will keep all the generated files within the build/ dir, and keep
the src/ dir (mostly) free of generated files. If you are building from
the development version in SVN, you must run the ./autogen.sh script
BEFORE you take the steps above.

For further installation instruction refer to file `INSTALL`, which
contains the standard installation instructions for GNU autoconf based
software.
