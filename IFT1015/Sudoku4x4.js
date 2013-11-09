//////////////////////////////////////////////////////////////
//
// Devoir 1: Sododku.js
// Auteurs: Olga Prezh (ID) et Santiago Paiva (1066417)
// Date: 21 Novembre 2013
//  
//////////////////////////////////////////////////////////////

load"http://www-etud.iro.umontreal.ca/~dridihou/sudokus.js";


// Affiche l'etat actual du jeu de sodoku a la ligne de command
var ecran = function(t)
{
	// Generate a random number between 0 and 30
	var num = Math.floor(Math.random *30);
	print();

};

// Call the function passing the random number as a parameter
ecran(sodoku[num]);

var test = function(r)
{
 ecran(sodoku[0]);
};