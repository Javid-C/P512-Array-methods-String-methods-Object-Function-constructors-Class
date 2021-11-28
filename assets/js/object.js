// let OBJECT_KEY = "username";
// let object = {
//     firstname: "Sama",
//     surname: "Mayilova",
//     age: 17,
//     [OBJECT_KEY]: "sam",
//     getFullname: function() {
//         return `${this.firstname} ${this.surname}`
//             // return this.firstname + " " + this.surname
//     }
// }


// object.groupNo = "P512"


// // object[OBJECT_KEY] = "sam"

// console.log(object.getFullname());


//Function constructors

// function Test() {
//     return "okay"
// }

// function Person(firstname, surname, age) {
//     this.firstname = firstname;
//     this.surname = surname;
//     this.age = age;
//     this.getFullname = function() {
//         return `${this.firstname} ${this.surname}`
//     }
// }

// function Student(groupType, groupNo) {
//     this.Type = groupType;
//     this.No = groupNo;


// }

// Student.prototype = new Person();



// let person = new Person("Idris", "Mikayil", 21)
// let person2 = new Person("Latif", "Hasanzade", 18)

// let student = new Student("P", "512")


// let student1 = new Student("D", "500")
// Object.setPrototypeOf(student, new Person("Idris", "Mikayilov", 21))
// Object.setPrototypeOf(student1, new Person("Togrul", "Asadov", 20))
// console.log(student);
// console.log(student1);

// console.log(person);
// console.log(person2.getFullname());


// let stu = {
//     firstname: "Ricat",
//     surname: "Alizade",
//     age: 17
// }


// console.log(Object.keys(stu));
// console.log(Object.values(stu));
// console.log(Object.entries(stu)[1][1]);

// console.log(stu);
// Object.defineProperty(stu, "groupNo", { value: "P512", writable: true })

// stu.groupNo = "P500"
// console.log(stu.groupNo);

// Object copy

let user = {
    name: "crokie",
    password: "12345"
}


let details = {
        email: "test@gmail.com",
        phone: "12345678"
    }
    // let user2 = user;

// user2.password = "54321"


// console.log(user);
// console.log(user2);

// let user2 = Object.assign(details, user)

// user2.password = "54321"
// console.log(user2);

// let user3 = {...user }

// user3.password = "qwe123"
// console.log(user3);
// console.log(user);


// let string = JSON.stringify(user)
// let user4 = JSON.parse(string)

// user4.password = "@1234Qwe"
// console.log(user4);
// console.log(user);


//Class


class Person {
    constructor(firstname, surname) {
        this.firstname = firstname
        this.surname = surname
    }
    getFullname = function() {
        return `${this.firstname} ${this.surname}`
    }
}

class Student extends Person {
    constructor(groupType, groupNo, firstname, surname) {
        super(firstname, surname)
        this.Type = groupType;
        this.No = groupNo;
    }
    getType = function() {
        return this.Type;
    }
}

let student = new Student("P", "P512", "Sama", "Mayilova")

let person = new Person("Madina", "Agazade")

console.log(person.getFullname());
console.log(student);