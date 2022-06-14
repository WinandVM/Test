var result;
var myArr=[];
var myNumbers= [5,6,7,8,285,55,26];
var myLetters= ["c","b","a","d","e","f"]

//push() method - inserts a new element at the end; can be any data type
myArr.push(1);
myArr.push("a");
myArr.push(true);
myArr.push(null);
myArr.push({name: "John"}); //this is an object

//pop() method - removes the last element of an array
myArr.pop();

//shift() method - removes the first element of an array
myArr.shift();

//unshift() method - adds a new element at the beginning
myArr.unshift("Winand");

//join() method - converts array to a string
result=myArr.join("-"); //converts it into a string with dashes
result=myArr.join(" "); //converts it to a string with space as separator
result=myArr.join(); //convers it to a string with commas as separator

//sort() method
result=myLetters.sort(); //sorts the letters alphabetically
result=myNumbers.sort(); //dit sorteert op basis van het eerste cijfer in een nummer -> moeten we fixen
result=myNumbers.sort(function (a,b) {return a - b}); //dit sorteert wel goed
result=myNumbers.sort(function (a,b) {return b-a});//dit sorteert omgekeerd

//concat() method - to combine two arrays -> a.concat(b)=a+b
result=myNumbers.concat(myLetters);



//iteration method() {for, forEach, map, filter, reduce, every, some}
// for(var i=0;i<result.length; i++) { //for(variable; condition; function) Dit blijft het doen tot de condition niet meer klopt. De variable die je definieert in de for() gebruik je om de condition te definiëren
//     console.log(i); //print een i tot de condition is met, namelijk wanneer de lengte van de array is bereikt (length=13, want 13 gegevens in de array)
// };
// for (var i=0;i<result.length;i++) {
//     console.log(result[i]); //print de index van results tot i is met -> print dus eigenlijk het hele array
// }
// result.forEach(function(value,index,arrayitself){ //forEach doet een functie voor elk element in een array. For is dus met condities die bepalen hoe vaak die functie wordt uitgevoerd, forEach doet dat automatisch x-aantal keer (x=aantal elementen in een keer)
//     console.log(value,index,arrayitself); //print voor elke value in de array de value zelf, de plaats waar het staat en de gehele array
// })

// function myFunction(value,index,arrayitself){
//     console.log(value,index,arrayitself);
// }

// result.map(myFunction) - gelijkaardig aan forEach, maar creëert een nieuwe array met de resultaten van een functie op een array <-> forEach: gewoon een functie op elk array element

var total=0;
myNumbers.forEach(n=>total+=n);
result=`Total result is ${total}`;

//filter() method - creëert een nieuwe array met de array elements die een test passen bv. alle values groter dan 30
result=myNumbers.filter(function(value){ //array.filter(function -> in deze function definieer je de test)
    return value >=30;
})
result=myNumbers.filter(value=>value>=30) //andere optie voor hetzelfde, maar de function is veranderd in een arrow function

let posts = [{ //voorbeeld met objects in array
      "userId": 1,
      "id": 1,
      "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
      "userId": 1,
      "id": 2,
      "title": "qui est esse",
      "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    },
    {
      "userId": 1,
      "id": 3,
      "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
      "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
    },
    {
      "userId": 1,
      "id": 4,
      "title": "eum et est occaecati",
      "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
    },
    {
      "userId": 1,
      "id": 5,
      "title": "nesciunt quas odio",
      "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
    }]

    result=posts.filter(value=> {
        return value.id === 3; //we nemen enkel de post met de id=3
    })
    

//     function FindPostById(id){
//         return posts.filter(value=>value.id===id);
//     }
// result=FindPostById(5);

console.log(result);