//////////////////////////////////////////////////////////////////////////////////////////////
//
// Devoir 1: Sodoku.js
// Auteur: Santiago Paiva (1066417)
// Date: 21 Novembre 2013
//  
//////////////////////////////////////////////////////////////////////////////////////////////

// Load sudokus
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
	
    // Affiche les choix possibles
    var choix = prompt("Pr\xE9cisez votre choix: \n\n - Pour ajouter un num\xE9ro au tableu soduko \n (ex.b3,2 ajoute 2 \xE0 la position b3). \n\n - Pour que l'ordinateur ajoute le num\xE9ro suivant: \n tapez 'prochain'. \n\n - Pour r\xE9soudre le soduko: tapez 'r\xE9soudre'. \n\n - Pour terminer: tapez 'exit'.");  
	switch(choix)
    {
        case "prochain":
            alert("Fonction Non Disponible.");
            break;
        case "resoudre":
            resoudreSudoku(t); 
            break;
        case "exit":
            break;
        default:
            ajouteNumero(t,choix);
            
    }
};

// Fonction pour ajouter une valeur manuellement
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
                print("Error");
        }
	var y = +val.charAt(1)-1;
	var z = +val.charAt(3);
    
    jeu[x][y] = z;
    
    var sudoku = [[jeu[0][0],jeu[0][1],jeu[0][2],jeu[0][3]],
                 [jeu[1][0],jeu[1][1],jeu[1][2],jeu[1][3]],
                 [jeu[2][0],jeu[2][1],jeu[2][2],jeu[2][3]],
                 [jeu[3][0],jeu[3][1],jeu[3][2],jeu[3][3]]];
    
    lancerSudoku(sudoku);
    
};

// Fonction pour resoudre le sudoku
var resoudreSudoku = function(t)
{
  for(var i = 0; i<4; i++)
  {
   for(var j = 0; j<4; j++)
   {
    if(t[i][j] == 1 || t[i][j] == 2 || t[i][j] == 3 || t[i][j] == 4)
        continue;
    resoudre(t,i,j);    
   }
  }
  ecran(t);
};
var resoudre = function(t,i,j)
{    
    var a1 = t[0][0];
	var a2 = t[0][1];
	var a3 = t[0][2];
	var a4 = t[0][3];
	
	var b1 = t[1][0];
	var b2 = t[1][1];
	var b3 = t[1][2];
	var b4 = t[1][3];
	
	var c1 = t[2][0];
	var c2 = t[2][1];
	var c3 = t[2][2];
	var c4 = t[2][3];
	
	var d1 = t[3][0];
	var d2 = t[3][1];
	var d3 = t[3][2];
	var d4 = t[3][3];
	
	// Rangees
	var ran1 = [a1,a2,a3,a4];
	var ran2 = [b1,b2,b3,b4];
	var ran3 = [c1,c2,c3,c4];
	var ran4 = [d1,d2,d3,d4];
	
	// Colonnes
	var col1 = [a1,b1,c1,d1];
	var col2 = [a2,b2,c2,d2];
	var col3 = [a3,b3,c3,d3];
	var col4 = [a4,b4,c4,d4];
	
	var value;
    
    // Elimine les possibilites pour le quadrant
    for(value=1;value<5;value++)
    {
		// Verifie si value est dans le  quandrant
        if(!quadrant(t,i,j,value))
            t[i][j] += value+"";                    	  
    }
    
    // Elimine les possibilities pour la rangee
	// Cette partie ne fonctionne pas.
	// J'ai essaye d'ecrire une autre fonction "identifier" et "supprimerElement" (voir ci-dessous) pour suprimmer les possibilites dans la rangee
    for(value=1;value<5;value++)
    {
        if(rangee(t,i,j,value))
            t[i][j] -= value+"";                    	  
    }
    
	// Elimine les possibilities pour la colonne
	// Cette partie ne fonctionne pas.
	// J'ai essaye d'ecrire une autre fonction "identifier" et "supprimerElement" (voir ci-dessous) pour suprimmer les possibilites dans la rangee
   
	for(value=1;value<5;value++)
    {
        if(colonne(t,i,j,value))
            t[i][j] -= value+"";                    	  
    }
    
	ecran(t);
};

var quadrant = function(t,i,j,value)
{
    for(var k=Math.floor(i/2)*2; k<Math.floor(i/2)*2+2;k++)
    {
        for(var m=Math.floor(j/2)*2; m<Math.floor(j/2)*2+2;m++)
        {
            if(t[k][m]== value)
            {    
                //print("subgridOK");
                return true;
            }	
        }
    }
    return false;
};

var rangee = function(t,i,j,value)
{
    for(var k=0; k<4;k++)
    {
        if(k!=j)
        {
            if(t[i][k]== value)
            {
                //print("rowOK");
                return true;
            }
        }
    }
    return false;
    
};

var colonne = function(t,i,j,value)
{
	for(var m=0; m<4;m++)
	{
		if(m!=i)
		{
			if(t[m][j]==value)
			{    
				//print("colOk");
				return true;
			}
		}
	}
	return false;
};

// Fonction pour supprimer un element dans une rangee ou colonne
// Parametres: une rangee ou colonne (Ex: ran1 ou col1) et un element a supprimer
var supprimerElement = function(a,element)
{ 
    //print("need to remove " + element + " from " + a);
    for(var i = 0; i<4; i++)
    {
        if(a[i].length != 1)
        {
          var entry = a[i].split('');
          var index = entry.indexOf(element);
            if(index == -1)
                continue;
          entry.splice(index, 1);
          
          if(entry.length > 1)
          {    
            var newentry = [""];  
          	for(var k = 0; k<entry.length; k++)
          	{    
            	newentry[0] += entry[k];
          	}
          }
          a[i] = newentry;  
        }   
    } 
    print(a);
     
};

// Fonction pour identifier un element a suprimmer dans une rangee ou colonne  
// Parametre: une rangee ou colonne (Ex: ran1 ou col1)   
var identifier = function(a)
{  
	for(var i = 0; i<4; i++)
	{
		if(a[i].length == 1)
        {    
	       supprimerElement(a,a[i]);   
		}
        
    }
};
	
lancerSudoku(t);
