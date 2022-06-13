//string methods

const MyText='lorem ipsum dolor sit amet';

//length
result=MyText.length; //vertelt je de lengte van de string (het aantal karakters)
result=MyText[0]; //refereert de eerste karakter in de string
result=MyText[25]; //refereert de 26ste letter in de string
result=MyText[MyText.length-1]; //refereert de laatste letter in de string (want de index begint met 0)

//charAt()
result=MyText.charAt(25); //hetzelfde als [25]

//concat () method
var firstname= "John ";
var lastname ="Doe";
result=firstname.concat(lastname); //merget de eerste string met de string in de concat()
result="Hello ".concat("iedereen"); //kan ook zonder de vars te definiëren
result="Hello".concat(", ",firstname, lastname);

//

console.log(result);
