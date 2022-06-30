// const posts = [{
//     id: 1,
//     title: 'Call of Duty',
//     body: 'First post body'
// }, {
//     id: 2,
//     title: 'Valorant',
//     body: 'Second post body'
// }]

// // get Posts
// function getLastGames(){
//     console.log(posts)
// }

// function createPost(post,callback){
//     setTimeout(()=>{
//         posts.push(post)
//         callback()    //we gebruiken de callback om ervoor te zorgen dat de output van de getLastGames gebruikt wordt in de createPost. Dit hebben we nodig, want anders loopt de functie getLastGames vooraleer de functie createPost al gelopen is. Daardoor zouden er maar twee games getoond worden in plaats van drie
//     },3000)
// }


// createPost({
//     id: 3,
//     title:"Counter Strike offensive"
// },getLastGames) //de callback functie die hier als argument gebruikt wordt is dus getLastGames()


// getLastGames()

// function Keeper1(string,callback){
//     callback(string)
// }

// function Keeper2(string,callback){
//     let newString = string.toUpperCase();
//     callback(newString)
// }

// function Keeper3(string,callback){
//     let arr = string.split("");
//     callback(arr)
// }

// function Keeper4(arr,index,callback){
//     let getLetter = arr[index]
//     callback(getLetter)
// }

// function PrintIt(letter){
//     console.log(letter)
// }

// Keeper1("Hello Friend",(string)=>{
//     Keeper2(string,(string)=>{
//         Keeper3(string,(arr)=>{
//             Keeper4(arr,2,(letter)=>{
//                 PrintIt(letter)
//             })
//         })
//     })
// })



//dit kan gemakkelijker, daarvoor gebruiken we async functions. Normaal gezien lopen functies synced (tegelijkertijd); hier geven we aan dat functies moeten wachten tot ze input krijgen.
//we gebruiken async functions als we data van een url moeten fetchen, want daar zit ook delay op
async function Keeper1(string) {
    return await string; //we wachten dus op de string
}

function Keeper2(string) {
    let newString = string.toUpperCase();
    return newString;
}

function Keeper3(string) {
    let arr = string.split("");
    return arr;
}

function Keeper4(arr, index) {
    let getLetter = arr[index];
    return getLetter;
}

function PrintIt(letter) {
    console.log(letter);
}

Keeper1('Hello Friend') //dit is een promise chain
    .then(Keeper2)
    .then(Keeper3)
    .then(response => Keeper4(response, 2))
    .then(PrintIt)
    .catch(err => console.log(err))

console.log(Keeper1("Hello friend")) //de promise wijst erop dat er data beloofd wordt, maar dat die er nog niet is



let promiseMe = new Promise((resolve, reject) => { //dit print een promise uit met een delay. In principe kunnen we de reject ook weglaten
    setTimeout(() => {
        resolve("Helo friend, I promise you that I will be back in 3 seconds")
    }, 3000)
})

let promiseMe2 = new Promise((resolve, reject) => {
    resolve("Hello friend, this is a second promise")
})

let getPromiseResult = Promise.all([promiseMe, promiseMe2]) //dit geeft aan dat promiseMe2 niet wacht op promiseMe om uit te voeren, maar ze voeren tegelijkertijd uit. getPromiseResult voert dan pas uit wanneer beide promies zijn uitgevoerd
console.log(getPromiseResult)
getPromiseResult
    .then(response => { //hier geven we aan dat we moeten wachten op getPromiseResult (want die heeft een delay). Dus we wachten op een resolve
        console.log(response)
    })

console.log(promiseMe)
promiseMe.then(answer => {
    console.log(answer);
})