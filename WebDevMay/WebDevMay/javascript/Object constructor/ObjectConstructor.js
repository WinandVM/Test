// prototype is a property of the Object constructor. It enables you to add new properties to the Object constructor.

function TwitterApplication(username,email,password){ //deze functie kan je gebruiken om objects te maken. Het heet een object constructor
this.username=username; //we gebruiken this om de values in global scope te storen. Anders zou het enkel in die functie accessible zijn
this.email=email;
this.password=password;
this.timeline=[];
}
TwitterApplication.prototype.showInfo = function (){  //Met prototype maken we een nieuwe property in de object constructor (dat kan een string zijn, een array, etc. MAAR ook een method, zoals hier het geval is (want we gebruiken een functie))
console.log(`Username: ${this.username}\nEmail: ${this.email}\nPassword: ${this.password}\nAvatar: ${this.avatar}\nTweets: ${this.timeline}`);
}

let user1 = new TwitterApplication('Jack','jack@jack.com', '12345') //creëert dus een object met deze values. We moeten het keyword new gebruiken als we die creëren
// console.log(user1);
// user1.showInfo();

TwitterApplication.prototype.updatePassword=function(newPassword){ //een method om een password te updaten
    return this.password=newPassword;
}
// user1.updatePassword("hello");
// user1.showInfo();

// TwitterApplication.prototype.avatar="myAvatar.jpg"
// user1.showInfo(); //wordt hier niet geprint, want we moeten dit nog toevoegen aan de definitie van de showInfo method. Heb ik nu wel gedaan

TwitterApplication.prototype.sendTweet=function(tweet){
    this.timeline.push(tweet);
}
// user1.sendTweet("Hello world");
// user1.sendTweet("Learning how to code JS")
// user1.showInfo();

let user2 = new TwitterApplication('Ersin', 'ersin@ersin.com','ersin456')
user2.sendTweet("I'm Ersin");
user2.sendTweet("I'm learning JS")
user2.showInfo(); //objects beïnvloeden elkaar dus niet, want anders zouden beide objects dezelfde tweets krijgen

// user2.timeline.forEach(function (tweet){ //aangezien dit een array is, kunnen we daar forEach op toepassen
//     console.log(tweet);
// })

TwitterApplication.prototype.deleteTweet=function(){ //deletet de laatste tweet
    this.timeline.pop();
}
user2.deleteTweet();
user2.showInfo();
