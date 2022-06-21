let result;
 //
let date= new Date(); //wanneer we een nieuwe date object declaren, moeten we het keyword new gebruiken. Deze declaration gebruikt de huidige tijd
result=date;
//get full year
result=date.getFullYear(); //dit is een methode om het huidige jaar te verkrijgen en niets anders
result= date.getMonth(); //dit geeft een maand aan in cijfers (index is 0)
result=date.toLocaleString() //geeft de lokale tijd aan, je kan er verschillende gebruiken
result=date.toLocaleString('nl-BE', {timeZone: 'Europe/Brussels', day: '2-digit', month: 'short', year: 'numeric'}) //hier zijn er verschillende mogelijkheden, om de datarepresentatie aan te passen. NL/BE is om te definiëren in welke tijd




// window.setInterval(UpdateTime,1000); //dit zegt hoe vaak de functie moet gebeuren, is dus een repeater

// function UpdateTime (){
//     var hours, minutes, seconds; //drie variables in dezelfde lijn gedeclared
// hours=date.getHours();
// minutes=date.getMinutes();
// seconds=date.getSeconds();
//     result= `${hours}:${minutes}:${seconds}`;
// }

result=date.getDay(); //hier is de index wel 1 (voor maandag), want de index voor zondag is 0. De week begint dus op zondag
var Days=['zondag','maandag', 'dinsdag', 'woensdag','donderdag','vrijdag','zaterdag'];
result=Days[date.getDay()]

console.log(result);