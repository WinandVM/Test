//http client (web browser) stuurt http request naar een server (web server). Die stuurt dat een response (success of no success) terug, eventueel na een validation. Er zijn vier soorten http requests:
//get request: we downloaden data van een website bv. door ernaar toe te surfen
//post request: we zenden info (bv. bij een login)
//delete request: we verwijderen info (bv. gegevens verwijderen bij een sociaal netwerk)
//patch/put request (doen allebei hetzelfde; kies best patch): we veranderen bestaande data
//Insomnia tool (insomnia.rest/download) is een tool om http requests te testen. We moeten ook aangeven welke soort method we willen checken + daarna moeten we een nodemon-extension downloaden door npm i json-server -g in te voeren in een terminal

// A JSON file is a file that stores simple data structures and objects in JavaScript Object Notation (JSON) format
// {
//     "api": [], "products": [] //zo starten we een server om front-end applications te testen, namelijk op de url homepage/API en de url homepage/products. Het is een fake API. Dan in een terminal (mag bash zijn) json-server en de filename zetten (in casu data.json)

// } //start automatisch op port number 3000. We kunnen ook een andere port kiezen (tussen 2000 en 6000) bv. json-server data.json (da's de file name) -p 5000. Daarna moeten we klikken op de home link die in de terminal gegeven wordt

//control c cancelt een proces in een terminal

//belangrijk, we mogen geen comments in een json-file zetten

//als we een json-file aanpassen, moeten we ctrl+c gebruiken en de server opnieuw loaden. Gebruik het pijltje naar omhoog om de laatste comment opnieuw op te roepen, dan moeten we die niet opnieuw typen

// in een terminal: als we ls gebruiken als comment, list dat de bestanden in een folder

//om iets te sturen naar de API application: kan gestuurd worden als een json, xml, form url encoded (dit is een belangrijke bv. https://g.com/login?user=admin) of binary file (etc.). Gebruik Insomnia, kies dan POST en het type van data, en begin dan te typen. De json-file wordt automatisch geüpdated. Programma voegt ook automatisch ID's toe aan die data
//bijvoorbeeld een object:
// {
// 	"username":"root", //belangrijk: zowel de property als de value tussen "" voor Insomnia
// 	"password": "root123"
// } (je krijgt dan een succes code: 201 created <-> get request die succesvol is, heeft een 200 ok). Om te kijken wat er gelogd is, moet je een get request naar dezelfde url sturen.

//als we dan een specifiek ding willen, sturen we een get request naar .../api/1 (de data met ID number 1). We voegen dus parameters toe. Idem voor delete: we geven de parameter als we een specifieke ID willen deleten. Zelfde met patch: we moeten aangeven welke data entry we veranderen

//hoe moeten we nu de data verkrijgen in javascript? Door een fetch method, wat een async function is 
// fetch("http://localhost:5000/api") //voor get requests is maar één argument nodig, namelijk de url
// .then(response=>console.log(response)) //als we dan in de console kijken, dan vinden we onze data in body. Als we headers meesturen, wordt dat gestored in header. OK staat voor het feit of het al dan niet succesvol geladen is. Redirected: false (er is geen redirect gebeurd; soms is dat wel, bijvoorbeeld als je ergens inlogt en je gaat naar een dashboard). Type:cors is een securitymechanisme dat ervoor zorgt dat enkel jouw app data kan verzenden.

// fetch("http://localhost:5000/api") //voor get requests is maar één argument nodig, namelijk de url
// .then(response=>response.json()) //we zetten de response om naar de data type die we gebruikt hebben
// .then(data=>console.log(data)) //we moeten het ook displayen natuurlijker


// fetch("http://localhost:5000/api") 
// .then(response=>{
//     setTimeout(()=>{
//         console.log("hello")
//     },2000)
//     return response.json()
// }
//     ) //als we hetzelfde willen doen, maar dan met een delay
// .then(data=>{
//     data.forEach(user=>{ //hier iteraten we voor elke data, want dat doet een forEach nu eenmaal :-)
//         console.log(user)
//     })
// }) //als we meer javascript codes willen toevoegen
// .catch(err=>console.log(err)) //als er iets verkeerd is, logt het dit


// fetch("http://localhost:5000/api") 
// .then(res=>res.json())
// .then(data=>data) //returnt gewoon de data van de vorige then, wat nodig is voor de volgende stap
// .then(data=>{
//     data.map(user=>{
//         user.username=user.username.toUpperCase()
//     })
//     return data
// })
// .then(data=>console.log(data))


// async function getUsers() { //wat als we dit nu in een async function doen? Dit doet hetzelfde, maar is meer leesbaar (totaal niet, maar goed)
//     let response = await fetch('http://localhost:5000/api');
//     return response.json()
// }

// getUsers() //hier is een callback
// .then(data=>{
//     console.log(data);
// })


// //selecting the tbody element
// const TbodyResult=document.getElementById("result") //we runnen dit in global scope, maar kan ook enkel in local scope als we dit maar in één functie moeten gebruiken (wat hier in feite het geval is)

// //fetching data from server
// let getUsers = new Promise((resolve, reject) => { //hetzelfde, maar met promise chain. Die parameternamen van de Promise zijn fixed
//     fetch('http://localhost:5000/api')
//     .then(res=>res.json())
//     .then(data => {
//         resolve(data) //indien resolve, geeft het de data
//     })
//     .catch(err=> reject(err)) //indien error, is er een reject die de error geeft
// })

// //updating the tbody element with data from server
// getUsers
// .then(data=>{
//     data.forEach(user=> {
//         //we updaten het niet met een single data-entry, maar we voegen er meerdere toe. Anders zou het maar één id printen en die updaten, dus we gebruiken +=
//         TbodyResult.innerHTML+= `<tr>
//         <td>${user.id}</td>
//         <td>${user.username}</td>
//         <td>${user.password}</td>
//     </tr>` 
//     })
// })


//hier gaan we een oefening maken op basis van https://jsonplaceholder.typicode.com/users. De onderstaande is mijn poging
const users = []

//step 1 get all original data
fetch("https://jsonplaceholder.typicode.com/users")
    .then(result => result.json())
    .then(data => data)
    //step 2 extract specific properties from user
    .then(data => {

        data.map(user => {
            const username = user.username;
            const email = user.email;
            const object = { username, email };
            users.push(object); //step 3 push it to a new array

        })
        return users
    })
    .then(users => console.log(users)) //step 4 console the modified array