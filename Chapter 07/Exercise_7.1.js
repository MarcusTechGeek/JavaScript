// We have a class definition called 'Person'.
class Person { 
    // The constructor method is called when a new instance of the class is created.
    constructor(firstname, lastname) { 
        // Inside the constructor, we are setting the 'firstname' and 'lastname' properties of the instance.
        this.firstname = firstname; 
        this.lastname = lastname; 
    } 
}

// We are creating a new instance of the 'Person' class with the first and last names "Maaike" and "van Putten".
let person1 = new Person("Maaike", "van Putten");

// We are creating another instance of the 'Person' class with the first and last names "Laurence" and "Svekis".
let person2 = new Person("Laurence", "Svekis");

// We are logging a message to the console using the 'firstname' property of 'person1'.
console.log("hello " + person1.firstname);

// We are logging a message to the console using the 'firstname' property of 'person2'.
console.log("hello " + person2.firstname);
