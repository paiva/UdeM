//////////////////////////////////////////////////////////////
//
// Devoir 1: Sodoku.js
// Auteurs: Olga Prezh (ID) et Santiago Paiva (1066417)
// Date: 21 Novembre 2013
//  
//////////////////////////////////////////////////////////////

// Enter JavaScript code here
load("http://www-etud.iro.umontreal.ca/~dridihou/sudokus.js");
var t = sudoku[Math.floor(Math.random()*30)];

var lancerSudoku = function(t)
{
    // Affiche l'etat actuel du jeu de sudoku a la ligne de command de coodboot 
	var ecran = function (t)
	{
  		print (("    1 2   3 4  \n   -----------  \na | "+t[0][0]+" "+t[0][1]+" | "+t[0][2]+" "+t[0][3]+" |")+("\nb | "+t[1][0]+" "+t[1][1]+" | "+t[1][2]+" "+t[1][3]+" |")+("\n  |-----|-----|")+("\nc | "+t[2][0]+" "+t[2][1]+" | "+t[2][2]+" "+t[2][3]+" |")+("\nd | "+t[3][0]+" "+t[3][1]+" | "+t[3][2]+" "+t[3][3]+" |\n" + "   -----------   "));
	};
    ecran(t);
    
    var choix = prompt("Pr\xE9cisez votre choix: \n\n - Pour ajouter un num\xE9ro au tableu soduko \n (ex.b3,2 ajoute 2 \xE0 la position b3). \n\n - Pour que l'ordinateur ajoute le num\xE9ro suivant: \n tapez 'prochain'. \n\n - Pour r\xE9soudre le soduko: tapez 'r\xE9soudre'. \n\n - Pour terminer: tapez 'exit'.)");  
	switch(choix)
    {
        case "prochain":
            print("prochain");
            break;
        case "resoudre":
            print("resoudre");
            break;
        case "exit":
            break;
        default:
            ajouteNumero(t,choix);
            
    }
};

var ajouteNumero = function(jeu,val)
{
	var x = val.charAt(0);
    	switch(x)
        {
            case 'a':
                x = 0;
                break;
            case 'b':
                x = 1;
                break;
            case 'c':
                x = 2;
                break;
            case 'd':
                x = 3;
                break;
            default:
                print("error");
        }
	var y = +val.charAt(1)-1;
	var z = +val.charAt(3);
    
    jeu[x][y] = z;
    
    var sudoku = [[jeu[0][0],jeu[0][1],jeu[0][2],jeu[0][3]],
                 [jeu[1][0],jeu[1][1],jeu[1][2],jeu[1][3]],
                 [jeu[2][0],jeu[2][1],jeu[2][2],jeu[2][3]],
                 [jeu[3][0],jeu[3][1],jeu[3][2],jeu[3][3]]];
    
    //print(("    1 2   3 4  \n   -----------  \na | "+jeu[0][0]+" "+jeu[0][1]+" | "+jeu[0][2]+" "+jeu[0][3]+" |")+("\nb | "+jeu[1][0]+" "+jeu[1][1]+" | "+jeu[1][2]+" "+jeu[1][3]+" |")+("\n  |-----|-----|")+("\nc | "+jeu[2][0]+" "+jeu[2][1]+" | "+jeu[2][2]+" "+jeu[2][3]+" |")+("\nd | "+jeu[3][0]+" "+jeu[3][1]+" | "+jeu[3][2]+" "+jeu[3][3]+" |\n" + "   -----------   "));
	lancerSudoku(sudoku);
    
};

lancerSudoku(t);
