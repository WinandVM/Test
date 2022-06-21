var result;

result=Math.PI; //geeft het getal pi

result=Math.round(2000.5); //rondt af
result=Math.round(2000.4);

result=Math.pow(2,5); // twee tot de vijfde macht

result=Math.sqrt(64); // de square root
result=Math.sqrt(55);

result=Math.max(44,55,66,77,88,22,99); //zoekt het hoogste getal
result=Math.min(44,55,66,77,22,99); //zoekt het laagste getal
let numbers = [44,55,66,77,88,22,99];
result=Math.min(...numbers);

result=Math.abs(-7); //geeft het positieve nummer, dus 7

result=Math.random(); // 0 tot 0.999999999
result=(Math.random()*5); // tussen 0 en 4.99999999999
result=(Math.random()*10).toFixed(); //0, 1, 2, 3, 4 of 5 (kan ook met Math.round of Math.floor)

function GetRandomNumberRange(min,max){ //Om een willekeurig afgerond getal te hebben tussen één cijfer en het andere
    return Math.round(Math.random()*(max-min)+min);
}

result=GetRandomNumberRange(1,20); // eender welk nummer tussen 1 en 20

console.log(result);