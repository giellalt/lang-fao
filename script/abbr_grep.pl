#!/usr/bin/perl
use strict;

# abbr_grep.pl
# Script for finding abbreviations that are followed
# by small letter or number.
# $Id$


$/ = ". ";

my $before_dot="";
my $after_dot;
my %contexts;

while (<>) {

	s/[\-\;,:"\(\)\[\]]//gs;
	if( /^\s*(.*?)\s/s ) {
		$after_dot = $1;
	} 

# Do not take words following the dot which begin with capital l.
	if ($after_dot =~ /^[A-ZÆØÅÖÄÁ]/s) {
		$after_dot = "";
	} 

	if ($before_dot && $after_dot){
		my $number = $contexts{$before_dot}{$after_dot}; 
		if ($number) {
			$number++;
		}
		else {
			$number = 1;
		}
		$contexts{$before_dot}{$after_dot}=$number; 
	} 

	if( /^.*\s+(.*\.)\s*$/s ) {	
		$before_dot = $1;
	}
	if( $before_dot !~ /[A-ZÅÄÖÆØa-zöäæåø]/s ) {	
		$before_dot = "";
	}

} 

foreach my $word (sort {keys %{ $contexts{$b}} <=> keys %{$contexts{$a}} } keys %contexts ) { 
	print "$word:\n"; 
	for my $word2 (sort keys %{ $contexts{$word}} ) {
		print "$word2 $contexts{$word}{$word2}\n"; 
	}
	print "\n";
}
