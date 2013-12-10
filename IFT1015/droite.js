////////////////////////////////////////////////////////
//
// Ex 7: Object-Oriented Javascript
// Auteur: Santiago Paiva (1066417)
// Date de remise: Dec 12, 2013
//
////////////////////////////////////////////////////////

/*
 * @constructor Constructeur pour Point
 */
var Point = function(x,y)
{
	this.x = x;
	this.y = y;
};

/*
 * @constructor Constructeur pour Droite
 */
 var Droite = function(a,b)
{
    // Convention interne
	this.sign = "";
	
    // Pour 1 argument: y=ax+b
    if(arguments.length == 1)
    {
     	// type: y=-ax+b ou y=-ax-b
		if(arguments[0].length == 7)
        {
            if(arguments[0].charAt(2) == "-")
                this.a = -parseInt(arguments[0].charAt(3));
            if(arguments[0].charAt(5) == "-")
                this.b = -parseInt(arguments[0].charAt(6));
            	
        } 
		//	type: y=ax+b ou y=ax-b
        else if(arguments[0].length == 6)
        {    
        	this.a = parseInt(arguments[0].charAt(2));
        	this.b = parseInt(arguments[0].charAt(5));
            this.sign = "+";
        }
		// type: y=x+b ou y=x-b ou y=-ax
        else if(arguments[0].length == 5)
        {    
        	if(arguments[0].charAt(2) == "x")
			{
				this.a = 1; 
				if(arguments[0].charAt(3) == "-")
					this.b = -parseInt(arguments[0].charAt(4));
				this.b = parseInt(arguments[0].charAt(4));
				this.sign = "+";
			}
			else if(arguments[0].charAt(2) == "-")
            {    
                this.a = -parseInt(arguments[0].charAt(3));
            	this.b = 0;
                this.sign = "+";
            }
        }
		// type: y=ax y=-b
        else if(arguments[0].length == 4)
        {    
        	if(arguments[0].charAt(2) == "-")
            {    
                this.a = 0;
            	this.b = -parseInt(arguments[0].charAt(3));
            }
            else
            {
                this.a = parseInt(arguments[0].charAt(2));
        		this.b = 0;
                this.sign = "+";
            }
        }
		// type: y=x ou y=b
        else
        {
         	if(arguments[0].charAt(2) == "x")
            {
             	this.a = 1;
                this.b = 0;
                this.sign = "+";
            }  
            else
            {    
            	this.a = 0;
            	this.b = parseInt(arguments[0].charAt(2));
                this.sign = "+";
            }
        }
    }
    // Pour 2 arguments: (a,b)
	else if(arguments.length == 2)
    {
        this.a = a;
        this.b = b;
        if(b > 0)
            this.sign = "+";
    }
};

/*
 * @return a  
 */
Droite.prototype.getA = function()
{
	return this.a;    
};

/*
 * @return b  
 */
Droite.prototype.getB = function()
{
	return this.b;    
};

/*
 * @return y=ax+b  
 */
Droite.prototype.toString = function()
{
  return "y=" + this.a + "x" + this.sign + this.b;   
};

/*
 * @param x 
 * @return a*x+b  
 */
Droite.prototype.getY = function(x)
{
  	return this.a*x + this.b;  
};

/*
 * @return x  
 */
Point.prototype.getX = function()
{
  	return this.x;  
};

/*
 * @return y  
 */
Point.prototype.getY = function()
{
  	return this.y;  
};

/*
 * @return (x,y)  
 */
Point.prototype.toString = function()
{
 	return "(" + this.x +"," + this.y + ")";   
};

/*
 * @type boolean
 * @param p un point
 * @return true si la droite passe par le point
 */
Droite.prototype.passePar = function(p)
{
	if(p.getY() == this.a * p.getX() + this.b)
    	return true; 
    return false; 
};

/*
 * @type boolean
 * @param d une droite
 * @return true si les deux droites sont perpendiculaires 
 */
Droite.prototype.isPerpendicularWith = function(d)
{	
    var a1 = this.a; 
    var a2 = d.getA(); 
    if(a1 * a2 == -1)
    	return true;
    return false;
};

var tests = function () {

    var d1 = new Droite (2,3);
    var d2 = new Droite (-2,-3);
    var d3 = new Droite (0,3);
    var d4 = new Droite (0,-3);
    var d5 = new Droite (0.5,2);
 
    var t = [d1,d2,d3,d4,d5];
    var s = ["y=3x+5", "y=5", "y=-7","y=-3x", "y=3x", "y=-3x-2", "y=0", "y=3x+2", "y=0x+0", "y=0x"];;
    
    for (var i=0; i<s.length; i++)
    {
		t.push(new Droite(s[i]));
		print("string constructor: ", s[i]," , ",t[t.length-1]);
    }
    
    for (var i=0; i<t.length; i++)
    {    
		print (t[i]," en x=2 :",t[i].getY(2)); 
    }
    
    var p1 = new Point(2,0);
    var p2 = new Point(-2,1);
    
    print (d1, " passe par ", p1, " : " , d1.passePar(p1));
    print (d2, " passe par ", p2, " : " , d2.passePar(p2));

    for (var i=0; i < t.length; ++i)
		for (var j=i; j < t.length; ++j)
	    	if (t[i].isPerpendicularWith(t[j]))
			print(t[i], " est perpendiculaire avec ", t[j]);
};    

tests();