// const student = {
//     name: "Joe",
//     age: 25,
//     education: "Software Developer",
//     projects: ['a', 'b', 'c', 'd'],
//     print: function () {
//     console.log("print function");
//     console.log(this.name)
//     },

//     print: () => {
//         console.log(student.name); //Als je hier this schrijft, werkt het niet
//         console.log("arrow function");
//     }
// }

// student.print();


// const name = "Joe"; // global scope
// function localScopeFunc() {
//     const name = "Dalton";
//     console.log(name);
// }
// localScopeFunc(); //het print het ding uit de local scope


// const Tools={
//     bmicalc: function(weight,height){
//         let bmi=weight/(height*height);
//         console.log (`BMI result is ${bmi}`);
//     },
//     nettosalary:function(salary,tax){
//         let netSalary=salary-((salary*tax)/100);
//         console.log(`Net salary is ${netSalary}`)
//     }
// }
// Tools.bmicalc(75,1.75);
// Tools.nettosalary(1000,21);


// const Computer ={
//     screen:"ASUS",
//     keyboard:"Logitech",
//     mouse:"Logitech",
//     cpu:"Intel i7",
//     gpu:"NVIDIA GTA 1060 6Gb",
//     power: false,
//     turnon:function(){
//         this.power=true;
//         console.log("Computer is turning on...")
//         console.log(`
//         Screen: ${this.screen}
//         Keyboard: ${this.keyboard}
//         Mouse: ${this.mouse}
//         CPU: ${this.cpu}
//         GPU: ${this.gpu}
//         `
//         )

//     },
//     turnoff:function(){
//         this.power=!false;
//     },
//     switcher:function(){
//         this.power=!this.power; //This is an alternative (turns true into false and vice versa)
//     },
//     status:function(){
//         const computerStatus=this.power ? "Computer is running":"Computer is off";
//         console.log(computerStatus);
//     }
// }
// Computer.turnon();
// Computer.status();


function number1(){
    console.log(1);
}
function number2(){
    console.log(2);
}
console.log(number1()+number2()) //this won't work because the functions don't have return, they have console instead
function number3(){
    return 1;
}
function number4(){
    return 4;
}
console.log(number3()+number4()); //this does work