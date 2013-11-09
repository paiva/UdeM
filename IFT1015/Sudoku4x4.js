//////////////////////////////////////////////////////////////
//
// Devoir 1: Sodoku.js
// Auteurs: Olga Prezh (ID) et Santiago Paiva (1066417)
// Date: 21 Novembre 2013
//  
//////////////////////////////////////////////////////////////

load"http://www-etud.iro.umontreal.ca/~dridihou/sudokus.js";


// Affiche l'etat actual du jeu de sodoku a la ligne de command

// Generates a random number between 0 and 30
var num = Math.floor(Math.random *30);
	
var ecran = function(t)
{
	// Need to add an assert for the parameter of the function
	
	
	// Prints the sodoku to the command line
	print("");

};

// Calls the function passing the random number as a parameter
ecran(sodoku[num]);

// Doing some test functions
var test = function(r)
{
 ecran(sodoku[0]);
};