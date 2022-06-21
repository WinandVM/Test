// // Switch Statement
// var value = 2;
// switch (value) {
//     case 1:
//     console.log("Hello");
//     break;
//     case 2:
//     console.log("Hi");
//     break;
//     default:
//     console.log ("tsjalalala");
//     break;
// } //we moeten die break gebruiken, anders wordt alles uitgevoerd vanaf die conditie

// var date = new Date();
// console.log(date.getDay());
// switch(date.getDay()) {
//     case 0:
//         console.log("Today is Sunday");
//         break;
//     case 1:
//         console.log("Today is Monday");
//         break;
//     case 2:
//         console.log("Today is Tuesday");
//         break;
//     case 3:
//         console.log("Today is Wednesday");
//         break;
//     case 4:
//         console.log("Today is Thursday");
//         break;
//     case 5:
//         console.log("Today is Friday");
//         break;
//     case 6:
//         console.log("Today is Saturday");
//         break;
//     default:
//         console.log("Something went wrong");
//         break;
// }


// const winner = "Joe";

// switch(winner) {
//     case "Dave":
//         console.log("Dave is the winner");
//     break;
//     case "Joe":
//         console.log("Joe is the winner");
//     break;
//     default:
//         console.log("No winner");
//     break;
// }


// switch(isLightOn){
//     case false:
//         console.log("Light is off");
//     break;
//     case true:
//         console.log("Light is on");
//     break;
//     default:
//         console.log("Something went wrong")
// }


let isLightOn=true;
const SwitchBtn=document.getElementById("switcher");

const LightController = { //dit is een object, en daarin definiëren we functies die daarna als methods dienen
    lightOn:function(){
        console.log("Light is on");
        isLightOn=true;
    },
    lightOff:function(){
        console.log("Light is off");
        isLightOn=false;
    }
}
SwitchBtn.addEventListener('click',(e)=>{
    e.preventDefault()
    console.log('Hello');
    switch(isLightOn){
        case false:
            LightController.lightOn();
        break;
        case true:
            LightController.lightOff();
        break;
    }
})