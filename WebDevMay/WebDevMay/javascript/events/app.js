var number=1; //Dit werkt meermaals, want we hebben het in global scope gedefinieerd
function clickHandler(event){
    // event.preventDefault();
    // var number=1; //local scope variable
    number++; //op deze manier werkt het slechts één keer, omdat we local scope gebruiken
    console.log("Clicked the button", number);
}


const inputValue=document.getElementById("username");
function inputHandler(event){
    console.log('Hello',inputValue.value);
}
inputValue.addEventListener("change", inputHandler); //dit is een andere manier, dan gebruik je niet de onchange attribute in html. Hier zien we ook dat we de inputHandler al gedefinieerd hebben buiten deze addEventListener


const Registerbtn=document.getElementById("register");
Registerbtn.addEventListener("click", function(event){ //hier definiëren we de function binnen de addEventListener
    console.log("register button clicked", inputValue.value);
});

