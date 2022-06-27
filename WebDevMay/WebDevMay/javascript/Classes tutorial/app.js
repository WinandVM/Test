// om een class te maken, moeten we het keyword class gebruiken. Classes zijn templates voor objects

// function App(username){ //een gewone constructor, ter vergelijking
//     this.username=username
// }

class App{
    //class heeft altijd een constructor method nodig
    constructor(username){
        this.username = username;
        this.users=[];
        this.test= function(){ //dit gaat dus ook
            return 'Function in Constructor'
        }
    }

    getUsername(){ //we hebben het function keyword niet nodig
        return this.username;
    }

    getUsers(){
        return this.users; //returnt alle users in de array
    }

    addUser(){
        return this.users.push(this.username);
    }

    toString(){
        return this.getUsername() + " lives in " + App.getCity();
    }

    static getCity(){ 
        return "Brussels"
    }
    
}

let app = new App('John'); //vergelijkbaar met Object constructor
console.log(typeof App) //classes hebben dus een function als type. Object constructor heeft object als type
console.log(typeof app) //het object dat hiermee gecreëerd wordt, is effectief een object

console.log(app.getUsername())

app.addUser()
console.log(app.getUsers())
// console.log(app.getCity()) //static methods zijn niet accessible via het object. Dat zijn protected methods die niet accessible zijn via het object. Ergo: voor sensitieve tasks
console.log(App.getCity()) //daarom gebruiken we dit
console.log(app.toString())
console.log(app.test())