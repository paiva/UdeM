//////////////////////////////////////////////////////////////
//
// Devoir 1: Sodoku.js
// Auteurs: Olga Prezh (ID) et Santiago Paiva (1066417)
// Date: 21 Novembre 2013
//  
//////////////////////////////////////////////////////////////

load"http://www-etud.iro.umontreal.ca/~dridihou/sudokus.js";

// Generates a random number between 0 and 30
var num = Math.floor(Math.random() *30);

// Affiche l'etat actual du jeu de sodoku a la ligne de command	
var ecran = function(t)
{
	// Need to add an assert for the parameter of the function
	
	// Prints the sodoku to the command line
	print(" 1 2 3 4 \n ----------- 	\n a | " + t[0][0] + " " + t[0][1]) + " | " + t[0][2] + " " + t[0][3] = " | \n"
	+ " b | " + t[1][0] + " " + t[1][1]) + " | " + t[1][2] + " " + t[1][3] = " | \n"
    + "   | ----- | ----- | \n "
	+ " c | " + t[2][0] + " " + t[2][1]) + " | " + t[2][2] + " " + t[2][3] = " | \n" 
    + " d | " + t[3][0] + " " + t[3][1]) + " | " + t[3][2] + " " + t[3][3] = " | \n" 
    + " ----------- ";

};

// Calls the function passing the random number as a parameter
ecran(sodoku[num]);

// Doing some test functions
var test = function(r)
{
 ecran(sodoku[0]);
};