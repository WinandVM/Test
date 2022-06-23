const student = {
    name: 'John',
    age: 30,
    isAdmin: false,
    courses: ['html','css','jss'],
    address: {
        city: 'Leuven',
        street: 'Middelweg'
    }
}

//for in (om over object properties te gaan)
// for (var key in student){ //je geeft dus aan wat je zoekt en in welk object. Key could be any name
//     console.log(key); //dit geeft de keys (i.e. de property names)
//     console.log(student[key]) //dit geeft de property values
//     if(key === 'address'){
//     for (var key2 in student[key]){ //dit is voor nested objects MAAR dit geeft de andere property values ook gesplitst weer (bv. John wordt dan J O H N, en de courses worden ook uitgesplitst), dus daarom gebruiken we een if... else
//         console.log(student[key][key2]);}
//     }
// }
// console.log(student['name']) //dit geeft de property value van één property


// function UpdateData(obj,key,newValue){ //om een property value te updaten
//     return obj [key]=newValue;
// } 
// UpdateData(student,'name','Winand');
// UpdateData(student,'address', {city:'Brussels',street:'Stalingrad'}) //voor nested objects
// UpdateData(student,'courses',['html','css','photoshop']) //voor een array in een object
// console.log(student);

// const student1={
//     x:'John',
//     y:30,
//     z:false
// }
// UpdateData(student1,'x','Joe');
// console.log(student1);



//for of - wordt gebruikt om de values van een object af te gaan
// for (var key of Object.entries(student)){ //dit geeft de properties en hun values weer in aparte arrays (één property + values in één array)
//     console.log(key);
// }
// console.log(Object.entries(student)); //doet hetzelfde, maar zet die verschillende arrays in één array
// console.log(Object.entries(student)[0][1]); //logt dan de eerste array, en daarin dan het tweede element (ergo de eerste value)
// console.log(Object.keys(student)); //geeft enkel de properties weer.

//ergo: om enkel een property te verkrijgen moeten we key gebruiken
for (var key of Object.keys(student)){
    // console.log(key);
    console.log(student[key]); //dit geeft enkel de values weer
}
