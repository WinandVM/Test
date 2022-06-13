//string methods

const MyText='lorem ipsum lorem dolor sit amet';

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

// startsWith() and endsWith()method
result=MyText.startsWith("Lorem"); //het is dus case-sensitive, want dit statement is false
result=MyText.startsWith("lorem");
result=MyText.endsWith("amet");
result=MyText.endsWith("Amet");

//includes() method
result=MyText.includes("ipsum");
result=MyText.includes("Ipsum"); //false dus
result=MyText.includes("i"); //gaat ook voor letters

// indexOf() method
result=MyText.indexOf("dolor"); //geeft aan na hoeveel karakters deze string voorkomt, spaties included

//replace() method - zoekt in een regular expression (regex) naar een waarde en vervangt dit dan in een nieuwe string
result=MyText.replace("lorem","hallo"); //het eerste wordt vervangen door het tweede (maar slechts één keer)
result=MyText.replaceAll("lorem", "hallo"); //vervangt ze allemaal

//split() method !zeer belangrijk bv. als je iets uit een string moet halen, is het gemakkelijker om die om te zetten in een array
var names="Ersin,Hande,Alex,John,Jane";
result=MyText.split((" ")); //gebruikt de separator om te splitsen -> in deze string is het een spatie. Het resultaat is dan een array met de strings
result=names.split(",");

//slice() method - een specifiek stuk uit een string extracten
result=MyText.slice(4); //verwijdert de eerste vier karakters
result=MyText.slice(6,MyText.length);
result=MyText.slice(6,11); //houdt alleen tussen karakter 7 en karakter 11 over

//toUpperCase() en toLowerCase() method
result=MyText.toUpperCase();
result=MyText.toLowerCase();

//trim() method
var MyText2="            halllooooo      tt     rrtrtrt fggfgfg   ";

result=MyText2.trim(); //verwijdert enkel spaces aan het begin en aan het einde van een string, niet in het midden
result=MyText2.replaceAll(" ","") //Hier worden alle spaties verwijderd
result=MyText2.trim().replace(/  +/g, ' '); //Hier worden de spaties langs de zijkant verwijderd (trim), en dan worden de spaties tussen de woorden omgezet in enkele spaties

// match() method
result=MyText.match(/lorem/); //vindt wel enkel de eerste
result=MyText.match(/lorem/g) //vindt ze allemaal

console.log(result);
