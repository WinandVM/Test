//parent class
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

//child classes
class Student extends Person { //hiermee zeggen we dat deze class voortbouwt op Person
    constructor(name, age, role) {
        super(name, age); //hiermee linken we de parameters met person
        this.role = role;
    }
}

class Teacher extends Person {
    constructor(name, age, role) {
        super(name, age);
        this.role = role;
    }
}



let student1 = new Student("John", 20, "student")
let teacher1 = new Teacher("Jane", 35, "teacher")