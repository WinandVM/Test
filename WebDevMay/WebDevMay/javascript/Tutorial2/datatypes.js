let datatypes=5;
// datatypes="Helloworld";
// datatypes=`Test`;
// datatypes=false;

// datatypes = {
//     name:"Winand",
//     age:30,
//     email:'winand_vanmeerbeek@hotmail.com'
// }

student = {
    name:"Winand",
    age:30,
    email:'winand_vanmeerbeek@hotmail.com',
    isStudent: true,
    address:{
        street:"Middelweg",
        housenumber: 44,
    }
}
datatypes=student.name;
datatypes=`His name is ${student.name} and he is ${student.age} years old.`;
datatypes=student.isStudent?`His name is ${student.name} and he is ${student.age} years old.`: `He is not a student`;
datatypes=student.address.street;
datatypes=student.address;
datatypes=student;
// datatypes=housenumber; dit werkt niet

var numbers=[1, "helloworld", true, null];
datatypes=numbers;
datatypes=numbers.length;
datatypes=numbers[0]; //de eerste uit de groep -> start dus met 0
datatypes=numbers[2]; //de derde uit de groep

var students = [{name: "Ersin", age: 24, scores:[15,22,85]}, {name: "Reshad", age: 23}, {name: "John", age: 25}];
datatypes=students;
datatypes=students[0].name;
datatypes=students[0].scores;
datatypes=students[0].scores[2];

var nestedArray=[0,2,5,[1,8,6]];
datatypes=nestedArray;
datatypes=nestedArray[1];
datatypes=nestedArray[3];
datatypes=nestedArray[3][1]; // Dit lijst de tweede entry van de vierde entry


// console.log(datatypes, typeof datatypes);
console.log(datatypes);