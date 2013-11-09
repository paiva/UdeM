//////////////////////////////////////////////////////////////
//
// Devoir 1: Sodoku.js
// Auteurs: Olga Prezh (ID) et Santiago Paiva (1066417)
// Date: 21 Novembre 2013
//  
//////////////////////////////////////////////////////////////

load("http://www-etud.iro.umontreal.ca/~dridihou/sudokus.js");

// Generates a random number between 0 and 30
var t = sudoku [Math.floor(Math.random()*30)];

// Affiche l'etat actual du jeu de sodoku a la ligne de command	
var ecran = function()
{
	// Need to add an assert for the parameter of the function
    print (("    1 2   3 4  \n   -----------  \na | "
	+t[0][0]+" "+t[0][1]+" | "+t[0][2]+" "+t[0][3]+" |")+
	("\nb | "+t[1][0]+" "+t[1][1]+" | "+t[1][2]+" "+t[1][3]+" |")+
	("\n  |-----|-----|")+
	("\nc | "+t[2][0]+" "+t[2][1]+" | "+t[2][2]+" "+t[2][3]+" |")+
	("\nd | "+t[3][0]+" "+t[3][1]+" | "+t[3][2]+" "+t[3][3]+" |\n" + "   -----------   "));

};

// Calls the function passing the random number as a parameter
ecran(t);

// Doing some test functions
var test = function(r)
{
 ecran(sodoku[0]);
};