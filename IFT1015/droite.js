// Enter JavaScript code here

var Point = function(x,y)
{
	this.x = x;
	this.y = y;
};

var Droite = function(a,b)
{
    this.sign = "+";
    
    if(arguments.length == 1)
    {
     	if(arguments[0].length == 7)
        {
            if(arguments[0].charAt(2) == "-")
                this.a = -parseInt(arguments[0].charAt(3));
            if(arguments[0].charAt(5) == "-")
                this.b = parseInt(arguments[0].charAt(6));
            	this.sign = "-";
        }  
        else if(arguments[0].length == 6)
        {    
        	this.a = parseInt(arguments[0].charAt(2));
        	this.b = parseInt(arguments[0].charAt(5));
        }
        else if(arguments[0].length == 5)
        {    
        	if(arguments[0].charAt(2) == "-")
            {    
                this.a = -parseInt(arguments[0].charAt(3));
            	this.b = 0;
            }
        }
        else if(arguments[0].length == 4)
        {    
        	if(arguments[0].charAt(2) == "-")
            {    
                this.a = 0;
            	this.b = parseInt(arguments[0].charAt(3));
            	this.sign = "-";
            }
            else
            {this.a = parseInt(arguments[0].charAt(2));
        		this.b = 0;
            }
        }  
        else
        {
         	if(arguments[0].charAt(2) == "x")
            {
             	this.a = 1;
                this.b = 0;
            }  
            else
            {    
            	this.a = 0;
            	this.b = parseInt(arguments[0].charAt(2));
            }
        }
    }
    else if(arguments.length == 2)
    {
     	this.a = a;
        this.b = b; 
    }
};

Droite.prototype.toString = function()
{
  return "y=" + this.a + "x" + this.sign + this.b;   
};

Droite.prototype.getY = function(x)
{
  	return this.a*x + this.b;  
};

//@type boolean
Droite.prototype.passePar = function(p)
{
	return true;
};

//@type boolean
Droite.prototype.isPerpendicularWith = function(d)
{
  	return true;   
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
    };
};    

tests();