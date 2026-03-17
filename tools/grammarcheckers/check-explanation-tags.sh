# Usage:
# sh check-explanation-tags.sh
# The script fetches tags from the LIST definitions of grammarchecker.cg3 and
# Compares the list against the various error files.

echo "\n"
echo "Are the rule tags in grammarchecker.cg3 declared in the error tags files?"
echo "=========================================================================\n"
cat grammarchecker.cg3 |grep "^LIST &"|cut -d" " -f2|tr -d "&"|sort | uniq > xxg
cat errors-fo.ftl |grep "^[a-z]"|cut -d" " -f1|sort | uniq > xxn
cat errors-en.ftl |grep "^[a-z]"|cut -d" " -f1|sort | uniq > xxe
cat errors.json |grep '"id"'|cut -d'"' -f4|sort | uniq > xxj
cat errors.source.xml | grep "error id"|cut -d'"' -f2|sort | uniq > xxx

echo "Number of tags missing in errors-fo.ftl: "
comm -23 xxg xxn | wc -l
echo "The tags tags missing in the native ftl file were:"
comm -23 xxg xxn
echo "\n"

echo "Number of tags missing in errors-en.ftl: "
comm -23 xxg xxe | wc -l
echo "The tags tags missing in errors-en.ftl file were:"
 comm -23 xxg xxe
echo "\n"
 
echo "Number of tags missing in errors.json: "
comm -23 xxg xxj | wc -l
echo "The tags issing in errors.json were: "
comm -23 xxg xxj
echo "\n"

echo "Number of tags missing in errors.source.xml: "
comm -23 xxg xxx | wc -l
echo "The tags missing in errors.xml were: "
comm -23 xxg xxx
echo "\n"

#echo "Delete auxiliary xx* files\n"
rm -f xxe xxn xxg xxj xxx 

