#!/usr/bin/perl -w
use utf8 ;

# Minimalistic perl script to move from html input to 
# xml output. 

# HOW TO HOW TO HOW TO HOW TO, 
# standing in lang-fao (here with +N+Msg+Sg+Acc): 

# cat src/morphology/stems/nouns.lexc |grep ";"|tr '\!' '£'| cut -d"£" -f1|tr '[+ ]' ':' |grep -v '_pl'|cut -d":" -f1| sort|uniq |sed 's/$/+N+Sg+Par/'|lookup src/generator-gt-norm-dial_Por.xfst| grep '\t'|rev|sort|rev|perl src/scripts/all_fst_output_as_table.pl > doc/testit/TestiSgPar.xml

# Thereafter, write a hyperlink to TestiSgPar.html in doc/KvenDocumentation.jspwiki, e.g. under Test reports

$datestring = localtime();
#print "Local date and time $datestring\n";
#@months = qw( tammikuun helmikuun maaliskuun huhtikuun toukokuun kesäkuun heinäkuun elokuun syyskuun lokakuun marraskuun joulukuun );
#@days = qw(Sun Mon Tue Wed Thu Fri Sat Sun);
#($sec,$min,$hour,$mday,$mon,$year,$wday,$yday,$isdst) = localtime();
#$year = $year+1900;

print "<?xml version=\"1.0\" encoding=\"UTF-8\"?>  \n" ;
print "<!DOCTYPE document PUBLIC \"-//APACHE//DTD Documentation V2.0//EN\" \"http://forrest.apache.org/dtd/document-v20.dtd\">\n" ;
print "<document xmlns:xi=\"http://www.w3.org/2001/XInclude\" xml:lang=\"en\">  \n" ;
print "  <header> \n"  ;
#print "    <title>Generoidut muodot ($months[$mon] $mday. päivänä $year, klo. $hour:$min)</title>  \n"  ;
print " <title>Genererte former $datestring</title>\n" ;
print "  </header> \n"  ;
print "  <body>	  \n"  ;
print "    <section><title/>  \n"   ;
print "<table>\n" ;

while ($line = <> ) {
    chomp $line;
     my ($lemma,
     $analysis)
	= split /\t/, $line ;
    print "<tr><td>$lemma</td><td>$analysis</td></tr>\n";
}

print "<\/table>\n" ;
print "    </section>\n" ;
print "  </body> \n" ;
print "</document> \n" ;




