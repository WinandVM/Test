var _students = [
    {
        id:1,
        name:'avarel',
        course:'javascript',
        score:45
    },
    {
        id:1,
        name:'mike',
        course:'java',
        score:55
    },
    {
        id:1,
        name:'george',
        course:'javascript',
        score:66
    },
    {
        id:1,
        name:'joe',
        course:'python',
        score:70
    }
]

// whoPassedExam?
// function whoPassedExam(param) {
//     return param.filter(value => value.score>=50);
// }
// console.log(whoPassedExam(_students));

//nieuw idee
const getValueInput=()=>{
 let inputValue = document.getElementById("textvalue").value.toLowerCase();

 const result = _students.filter(checkScore);

function checkScore(value){
    return value.name === inputValue
}

if (result.length===0) {
    document.getElementById("fail").innerText="Your name is not on the list.";
    document.getElementById("pass").innerText="";
}
else {
let scoreResult=result.map(({ score }) => score)

let passOrFail=Number(scoreResult.toString());
if (passOrFail>=50){
    document.getElementById("fail").innerText="You passed."
}
else {
    document.getElementById("fail").innerText="You failed."
}

let endResult="Your score is " + scoreResult.toString() + ".";

document.getElementById("pass").innerText=endResult;}
}