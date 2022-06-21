//do while
var i=0;
// do {
// console.log("Hello friend");
// i++;
// } while(i<=10);


// do {
// console.log("Hello friend");
// } while(i < 0); //print toch één keer, terwijl de conditie niet met is


// do {
//     var getRandomNumber = Math.floor(Math.random() * 100)
//     console.log(getRandomNumber);
//     i++;
// } while(i<=10)


// var number;
// do {
//     number = parseInt(prompt("Enter a number between 1 and 10"));
//     console.log(number);
// } while (number < 1 || number > 10) //logt een nummer in een console als je iets ingeeft, maar als je een nummer buiten die range geeft, komt de prompt opnieuw

// var number;
// const RateLimitResult = document.getElementById("rateLimit")
// const password = "12345"
// let rateLimit = 3; // 2 attempts left // 1 attempt left // 0 attempts left
// do {
//     number= prompt("Enter your password")
//     if(number !=password){
//         console.log("Wrong password")
//         rateLimit--
//         RateLimitResult.innerText = `${rateLimit} attempts left`
//     }else{
//         console.log("Correct password")
//     }
// }while(rateLimit!=0)



// var number;
// const password ="12345";
// let rateLimit=3;
// const rateLimitResult=document.getElementById("rateLimit");

// while(rateLimit>0){
//     var UserInput = prompt("Enter your password");
//     if (rateLimit==0) {
//         console.log("You are blocked")
//         break; //als er drie keer geprobeerd wordt, wordt de code afgebroken
//     }
//     if (UserInput !=password) {
//         console.log("Wrong password");
//         rateLimit--;
//         rateLimitResult.innerText=`${rateLimit} attemps left`;
//     }
//     else {
//         console.log("Correct password");
//         break; //als het juist is, wordt de while-loop afgebroken
//     }

// }



// var x = 0;
// var total = 0;
// while(x<10){
//     x++;
//     total+=x;
//     console.log(`${x} + ${total} = ${total}`);

// }


var x = 0;
while (x < 100) {
    x++;
    if (x % 3 == 0) {
        console.log(x);
        if (x > 50) {
            break; //hier stop je de loop eigenlijk al eerder
        }
    }
}