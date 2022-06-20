let score=0;
function shakeIt(){
    var number1 = Math.round(Math.random()*(6-1)+1);
    var number2 = Math.round(Math.random()*(6-1)+1);
    if (number1 == number2) {
        score++;
        document.getElementById('dice').innerText=`Your dices are ${number1} and ${number2}`; //document.getElementById geeft altijd een foutcode in de nodemon, maar dat is niet erg. Het werkt wel in de browser
document.getElementById('score').innerText=`Your score is ${score}`;
        
    }
    else {
        document.getElementById('dice').innerText=`Your dices are ${number1} and ${number2}`;
        document.getElementById('score').innerText=`Your score is ${score}`;
    };
}
