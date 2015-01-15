////////////////////////////////////////////////////////
//
// Ex 6: Multiplication Egyptienne
// Date de remise: Dec 5, 2013
//
////////////////////////////////////////////////////////

/*
 * Fonction MultiEgypt recursive
 * @param {Number} un entier positif "a"
 * @param {Number} Un entier positif "b"
 * @return {Number} Produit egyptienne de deux entiers a,b
 */
  var MultiEgypt = function(a,b)
{
    assert(typeof(a) == "number");
	assert(typeof(b) == "number");  
	assert(a >= 0);
	assert(b >= 0);
  
    // Cas de base
	if (a == 0)
        return 0;
	// Return recusive 
    // Décale la valeur de "a" vers la droite (divise par 2)
	// Décale la valeur de "b" vers la gauche un bit (multiplie par 2)
	// Ajoute la valeur de "b" si "a" est impair, 0 si "a" est pair
    return MultiEgypt(a>>1,b<<1) + (a%2 == 1 ? b : 0);  
};

/* Fonction test
 * @return {String} MultiEgypt(a,b) avec a et b aleatoires (0-999)
 */
var test = function()
{
    // Generate two number randomly
	var a = Math.floor(Math.random() * 999);
	var b = Math.floor(Math.random() * 999);
	
	assert(MultiEgypt(a,b) === a*b);
    print("MultiEgypt(" + a + "," + b + ") = " + MultiEgypt(a,b));
    
};

test();
