// const Result=document.getElementById("result");
// var userinput = prompt("Enter a number"); //dit maakt een prompt met een message aan in html (prompt=iets wat opspringt en waar je een value kan ingeven)
// // console.log(typeof userinput); //de type is een string - prompts returnen dus strings
// var Vraag = (isNaN(userinput)) ? "This is not a number": `Your number is ${userinput}`;
// Result.innerText=Vraag;
// // Result.innerText=userinput;


var userinput = prompt("Enter number 1");
var userinput2 = prompt("Enter number 2");
var test = Number(userinput) + Number(userinput2);
var Vraag = (isNaN(test))? "Input not valid": `The sum of the two numbers is ${test}`;
const Result = document.getElementById("result");
Result.innerText = Vraag;