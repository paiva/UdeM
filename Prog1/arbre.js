// Cree un champ vide de personnes dans l'arbre genealogique
var personnes = [];

// Cree un enregistrement avec trois champs: nom, age et enfants
// Prend deux parametres: un nom et un age
function ajoutePersonne(nom,age)
{ 
  assert(typeof(nom) == "string");
  assert(typeof(age) == "number");
    
  var enfant = []; 
  var personne = [nom, age, enfant];
  
  personnes.push(personne);
};

// On ajoute des personnes dans le champ vide
ajoutePersonne("Julie",100);
ajoutePersonne("Sarah",83);
ajoutePersonne("Jennifer",82);
ajoutePersonne("Olivia",79);
ajoutePersonne("Marge",55);
ajoutePersonne("Mathilde",48);
ajoutePersonne("Joanne",45);
ajoutePersonne("Isabelle",47);
ajoutePersonne("Celine",23);
ajoutePersonne("Caroline",29);
ajoutePersonne("Wendy",24);
ajoutePersonne("Kaliste",26);
ajoutePersonne("Karine",22);
ajoutePersonne("Sophie",28);
ajoutePersonne("Orianne",25);
ajoutePersonne("Alice",21);


// Ajoute un enfant a une personne (parent)
// Prend deux parametres: le nom du parent et le nom d'un enfant
function ajouteEnfant(nomParent, nomEnfant)
{
  assert(typeof(nomParent) == "string");
  assert(typeof(nomEnfant) == "string");
  
  //Trouve l'enfant dans personnes[]
  var enfant = trouverPersonne(nomEnfant);
  //var index = personnes.indexOf(enfant);
  
  //Ajoute l'enfant au parent
  for(var i = 0; i < personnes.length; i++)
  {
      for(var j = 0; j < personnes.length; j++)
      {
          if(personnes[i][j] === nomParent)
          {
              
              personnes[i][2].push(enfant);
              // Sort selon l'age des enfants
			   sortEnfant(personnes[i][2]);              
             
          }
      }
  } 
       
  // Removes child from list
  // personnes.splice(index, 1);
  
    
};
// Trouve l'index d'une personne dans personnes[]
// Prend un parametre comme input: le nom de la personne a trouver
function trouverPersonne(nomPersonne)
{   
    assert(typeof(nomPersonne) == "string");
    
    for(var i = 0; i < personnes.length; i++)
    {
          if(personnes[i][0] === nomPersonne)
          {
              var personne = personnes[i];
              return personne; 
          }      
    }
    
};
// Sort les enfants par rapport a leur age
// Prend un parametre comme input: une liste d'enfants
function sortEnfant(enfants)
{
    
  assert(typeof(enfants) == "object");
    
  enfants.sort(function(a,b)
    {
        return a[1] - b[1];
    });
  
};

// Enfants pour Julie
ajouteEnfant("Julie", "Sarah");
ajouteEnfant("Julie", "Jennifer");
ajouteEnfant("Julie", "Olivia");

// Enfants de Sarah
ajouteEnfant("Sarah", "Marge");
ajouteEnfant("Sarah", "Mathilde");

// Enfants de Jennifer
ajouteEnfant("Jennifer", "Joanne");

// Enfants de Olivia
ajouteEnfant("Olivia", "Isabelle");

// Enfants de Marge
ajouteEnfant("Marge", "Celine");
ajouteEnfant("Marge", "Caroline");
ajouteEnfant("Marge", "Wendy");

// Enfants de Mathilde
ajouteEnfant("Mathilde", "Kaliste");
ajouteEnfant("Mathilde", "Karine");
ajouteEnfant("Mathilde", "Sophie");

// Enfants de Isabelle
ajouteEnfant("Isabelle", "Orianne");
ajouteEnfant("Isabelle", "Alice");

// Retourne les enfants d'un parent
// Prend un parametre comme input: le nom du parent
function quiEnfants(nom)
{
  assert(typeof(nom) == "string");
  
  for(var i = 0; i < personnes.length; i++)
  {
      for(var j = 0; j < personnes.length; j++)
      {
          if(personnes[i][j] === nom)
          {              
              var enfants = [];
              for(var k = 0; k<personnes[i][2].length; k++)
              {    
               enfants.push(personnes[i][2][k][0]);
               
              }
              return enfants; 
          }
          
      }
      
  }
};

// Retourne une liste de petits enfants d'un parent
// Prend un parametre comme input: le nom du grand-parent
function quiPetitsEnfants(nom)
{
    
    assert(typeof(nom) == "string");
    
    var enfants = [];
    enfants.push(quiEnfants(nom));
    
    var petitsEnfants = [];
    
    for(var i = 0; i<enfants[0].length; i++)
    {
        petitsEnfants.push(quiEnfants(enfants[0][i]));
    }
    return petitsEnfants;
};

//quiEnfants("Julie"); // Should return: ["Olivia","Jennifer","Sarah"]
//quiEnfants("Isabelle"); // Should return: ["Alice","Orianne"]
//quiEnfants("Mathilde"); // Should return: ["Karine","Kaliste","Sophie"]
//quiEnfants("Marge"); // Should return: ["Celine","Wendy","Caroline"]
quiPetitsEnfants("Sarah"); // Should return: ["Karine", "Celine","Wendy","Kaliste", "Sophie", "Caroline"]
