// var name = "John";
// console.log("Hello friend");
// console.log(name); 
// const company="Google";
// console.log(company);
// let website ="google.com";
// website="facebook.com";
// console.log(website);
// var user ="root";
// console.log(user);

// var number1=10;
// var number2=20;
// var total=number1+number2;
// var message="Winand zegt \"Hallo\""
// console.log(message);
// console.log(total);

// document.getElementById("titlepage").innerText="Hello friend";
// document.getElementById("container").innerHTML="<h1>Container!!!</h1>";

// titlepage.innerText="Hallo";
// var weight=64;
// var height=1.77;
// var BMI = weight / (height * height);
// console.log(BMI);

// var bruto=3000;
// var netto=bruto*0.79;
// console.log(netto);

// let result;
// result=9+3;
// result=result-2;
// result+=5;
// result/=2;
// result++;
// ++result;
// --result;
// result--;
// console.log(result);

// var firstname="John";
// var lastname="Doe 😎";
// result=firstname+" "+lastname;
// console.log(result);

let result;
var n1=5;
var n2=5;
var n3=6;
var n4="5";
var n5="6";
var n6="Hello";

// result=n1==n4;

// result2=n1===n4;
// console.log(result2)

// result2=n1!==n5;
// console.log(result2);

// result="spacex"=="Spacex";

// result=n1>n3;

// result=n1!=n3;

// result=n5>n1;

// result=n1+n6;

// result=n1>=n4;

// result=n1>==n4; niet mogelijk

// result=n1>=n3 ? "Correct": "Incorrect"; //Eerste print als het true is, tweede als het false is

var StudentName="Jack"
var age=18;
var money=0;
// result = age >= 18 ? StudentName + " is allowed to drink": StudentName + " is not allowed to drink";
// result = age >= 18 ? `${StudentName} is allowed to drink`: `${StudentName} is not allowed to drink`;

// andere manier van schrijven
// var myRule=age>=18;
// var successMessage="Allowed to drink";
// var errorMessage="Not allowed to drink"; 

// var myRule = n3 > n1;
// var mySecondRule = n1 < n2;
// result= myRule && mySecondRule;

// var myRule=age>=18;
// var mySecondRule=money >=1;
// result = myRule && mySecondRule ? `${StudentName} is allowed to drink`: `${StudentName} is not allowed to drink`;

var myRule = age>=18;
var mySecondRule = money >=1;
result = myRule ? (mySecondRule)? "Yes, he can have a drink": "No, he needs money": "No, he's underage"; //Nesting is dus mogelijk. De antwoorden zijn dan (yes vraag1 yes vraag2, yes vraag1 no vraag2, no vraag1)


console.log(result);
