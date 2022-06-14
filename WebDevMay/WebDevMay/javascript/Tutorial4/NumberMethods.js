var result;
var n1="10";
var n2=10;
const PI=3.14159265358979;
var n3="10.5";
var n4="10 15 20";
var n5="10,15,20";
var n6="9e+2";
var n7=10e+2 //scientific notation
var n8=10.5;
var n9="10a61"


//toString() method - returns number as a string
result=n2.toString(); //nummer dus omgezet in een string


//parseInt() method - zet een string om in een integer
result=parseInt(n1);
result=parseInt(n3);
result="10"+"10"; //dit geeft 1010 als string
result=parseInt("10")+parseInt("10"); //dit zet het om in nummers en geeft dus als resultaat 20
result=parseInt(n6); //geeft enkel 9 als resultaat, het verwijdert de rest
result=parseInt(10e+2); //geeft 1000 als resultaat


//parseFloat() method - zet een string om in een gewoon nummer (dus niet afgerond)
result=parseFloat(n3);
result=parseFloat(n4); //geeft het eerste nummer in een string
result=parseFloat(n4); //geeft het eerste nummer in een string
result=parseFloat(n9); //geeft het eerste nummer in een string


// toExponential() method - geeft een string als resultaat, met afgerond nummer en geschreven als een exponential notation (je kan het aantal decimalen definiëren)
result=PI.toExponential();
result=PI.toExponential(5); //vijf decimalen achter de komma


//toFixed() method - zet om in een string, met het nummer geschreven in een gespecifieerd aantal decimalen achter de komma
result=PI.toFixed(); //geen decimalen achter de komma
result=PI.toFixed(5); //vijf decimalen achter de komma


//Number() method - zet een ding om in een nummer
result=Number("10");
result=Number(undefined); //zegt dat het NaN is (not a number), maar type is wel number
result=Number(null); //geeft 0
result=Number(true); //geeft 1 aan als waarde
result=Number(false); //geeft 0 aan als waarde
result=Number.MAX_VALUE; //Number heeft ook properties. Max_Value geeft het grootst mogelijke getal aan in Javascript
result=Number.MIN_VALUE; //het kleinst mogelijke getal in Javascript
result=Number.MAX_SAFE_INTEGER; //het grootst mogelijke getal, geschreven als een integer
result=Number.POSITIVE_INFINITY; //geeft oneindig
result=Number.NEGATIVE_INFINITY; //geeft negatief oneindig
result=Number.NaN; //geeft NaN als resultaat
result=Number.isFinite(10); //geeft aan of een value finite is -> hier true
reuslt=Number.isFinite(10.5); //hier true
result=Number.isFinite(Infinity); // hier false
result=Number.isFinite(NaN); // hier ook false
result=Number.isFinite("10"); //hier ook false, want het is een string
result=Number.isNaN(10); //geeft aan of een getal NaN is
result=Number.isNaN("10"); //geeft vreemd genoeg ook false aan
result=Number.isSafeInteger(10); //is iets een integer of niet?
result=Number.isSafeInteger(10.5); //dit geeft dus false aan

var userInput="asdsd";
if (Number.isInteger(userInput)) {
    console.log("Valid input");
}
else {
    console.log("Invalid input");
}

console.log(result, typeof result);