// console.log("functions.js");
// function GetSum(){
// //dit is de function scope
// var getResult=1+1;
//     console.log('Get Sum function', getResult);
//     return 2
// }
// // GetSum(); //calledback function
// console.log(GetSum());

// function GetSumOfNumbers(n1,n2){
//     return n1+n2;
// }
// console.log(GetSumOfNumbers(5,6));


//regular function
function BMI(kg,height){
    return kg/(height*height)
}
console.log("Your BMI is " + BMI(64,1.77));

function nettoWage(brutowage){
    return brutowage*0.78
}
console.log("Your netto wage is €" + nettoWage(1800));

//arrow function
const BMI2 = (kg,height) => kg/(height*height);
console.log("Your BMI is " + BMI2(68,1.77));

const nettoWage2=(brutowage) => brutowage*0.78;
console.log("Your netto wage is €" + nettoWage2(1600))
