// We have a class definition called 'Person'.
class Person { 
    // The constructor method is called when a new instance of the class is created.
    constructor(firstname, lastname) { 
        // Inside the constructor, we are setting the 'firstname' and 'lastname' properties of the instance.
        this.firstname = firstname; 
        this.lastname = lastname;
    } 

    // We have a method called 'fullname' defined within the class.
    fullname() {
        // The 'fullname' method concatenates the 'firstname' and 'lastname' properties and returns the full name.
        return this.firstname + " " + this.lastname;
    }
} 

// We are creating a new instance of the 'Person' class with the first and last names "Maaike" and "van Putten".
let person1 = new Person("Maaike", "van Putten");

// We are creating another instance of the 'Person' class with the first and last names "Laurence" and "Svekis".
let person2 = new Person("Laurence", "Svekis");

// We are calling the 'fullname' method of 'person1' and logging the result to the console.
console.log(person1.fullname());

// We are calling the 'fullname' method of 'person2' and logging the result to the console.
console.log(person2.fullname());
