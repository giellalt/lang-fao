# This is a template file for writing an exception / modification file for the
# regex that removes derivation strings from the Apertium transducers. The main
# reasoning is that derivations are most often very hard to translate in a
# straightforward way, and are best treated on a case-by-case basis.
#
# To add exceptions to the dynamically built regex, copy this file to another
# file named identical to the regex except for the following addition:
#
# -modifications.regex
#
# That is, if the dynamically created regex files is named:
#
# remove-derivation-strings.regex
#
# the modification file should be named:
#
# remove-derivation-strings-modifications.regex
#
# If the filtering is specific for a given target language, the end of the
# filename should be:
#
# *.LANGCODE.regex
#
# e.g.: remove-derivation-strings-modifications.nob.regex
#
# for a filter removing derivations from an analyser used in an Apertium
# language pair with Norwegian Bokmål as the target language.
#
# The regex fragment in the modification file should asume a context as follows:
#
# ~[ $[ +Der/A | +Der/B | ... | +Der/Z ] -
#
# That is, remove the language containing all derivation tags in the fst MINUS:

$[ 
  %+Der%/PassL
| %+Der%/PassS
| %+Der%/goahti
]

# ] ; # - end of final regex
