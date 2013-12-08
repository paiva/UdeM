//////////////////////////////////////////
//
// Ex 7 : OOP 
// Auteur: Santiago Paiva (1066417)
// Date de remise: Dec 12, 2013
// 
//////////////////////////////////////////

/*
 * Creates an instance of Point
 * @constructor
 *
 * @param {Number} x - l'abscisse du point à représenter
 * @param {Number} y - l'ordonnée du point à représenter
 */
var Point = function(x,y)
{
	this.x = x;
	this.y = y;
};


/*
 * Creates an instance of Droite
 * @constructor
 *
 * @param {Arguments} Soit (a,b) ou ("y=ax+b")
 *
 */
var Droite = function(arguments)
{
	if(arguments.length == 1)
	{
		this.a = arguments.charAt(2);
		this.b = arguments.charAt(5);
	}
	
	else if(arguments.length ==2)
	{
		this.a = arguments[0];
		this.b = arguments[1];
	}
	
	return y=a*x+b; 
};

Point.prototype.getX = function()
{
	return this.x;
};


Point.prototype.getY = function()
{
	return this.y;
};










