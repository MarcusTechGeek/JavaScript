// We have a class definition called 'Employee'.
class Employee {
    // The constructor method is called when a new instance of the class is created.
    constructor(first, last, years) {
        // Inside the constructor, we are setting the 'first', 'last', and 'years' properties of the instance.
        this.first = first;
        this.last = last;
        this.years = years;
    }
}

// We are creating a new instance of the 'Employee' class with the first name "Laurence", last name "Svekis", and 10 years of experience.
const person1 = new Employee("Laurence", "Svekis", 10);

// We are creating another instance of the 'Employee' class with the first name "Jane", last name "Doe", and 5 years of experience.
const person2 = new Employee("Jane", "Doe", 5);

// We are creating an array 'workers' that contains the instances 'person1' and 'person2'.
const workers = [person1, person2];

// We are adding a method 'details' to the prototype of the 'Employee' class.
Employee.prototype.details = function() {
    // The 'details' method returns a message with information about the employee.
    return this.first + " " + this.last + " has worked here " + this.years + " years";
}

// We are using a forEach loop to iterate over the 'workers' array and log details about each employee to the console.
workers.forEach((person) => {
    console.log(person.details());
});
