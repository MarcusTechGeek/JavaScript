// We have a class definition called 'Dog'.
class Dog {
  // The constructor method is called when a new instance of the class is created.
  constructor(dogName, weight, color, breed) {
    // Inside the constructor, we are setting properties for the dog instance.
    this.dogName = dogName;
    this.weight = weight;
    this.color = color;
    this.breed = breed;
  }
}

// We are creating an instance of the 'Dog' class named 'dog'.
let dog = new Dog("JavaScript", 2.4, "brown", "chihuahua");
console.log(dog.dogName, "is a", dog.breed, "and weighs", dog.weight, "kg.");

// We have a class definition called 'Person'.
class Person {
  // The constructor method is called when a new instance of the class is created.
  constructor(firstname, lastname) {
    // Inside the constructor, we are setting properties for the person instance.
    this.firstname = firstname;
    this.lastname = lastname;
  }
}

// We are creating an instance of the 'Person' class named 'p' with firstname "Maaike" and lastname "van Putten".
let p = new Person("Maaike", "van Putten");
console.log("Hi", p.firstname);

// We are creating another instance of the 'Person' class named 'p1' with firstname "Maaike" and no lastname.
let p1 = new Person("Maaike");
console.log("Hi", p.firstname, p.lastname);

// We have a revised definition of the 'Person' class with additional methods.
class Person {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }

  greet() {
    console.log("Hi there!");
  }

  compliment(name, object) {
    return "That's a wonderful " + object + ", " + name;
  }
}

// We are calling the 'greet' method of the 'p' instance.
p.greet();

// We are calling the 'compliment' method of the 'p' instance and logging the result to the console.
let compliment = p.compliment();
console.log(compliment);

// We have a class definition called 'Vehicle'.
class Vehicle {
  constructor(color, currentSpeed, maxSpeed) {
    this.color = color;
    this.currentSpeed = currentSpeed;
    this.maxSpeed = maxSpeed;
  }

  move() {
    console.log("moving at", this.currentSpeed);
  }

  accelerate(amount) {
    this.currentSpeed += amount;
  }
}

// We have a class definition called 'Motor' that extends the 'Vehicle' class.
class Motor extends Vehicle {
  constructor(color, currentSpeed, maxSpeed, fuel) {
    // The 'super' keyword is used to call the constructor of the parent class.
    super(color, currentSpeed, maxSpeed);
    this.fuel = fuel;
  }
}

// We are creating an instance of the 'Motor' class named 'motor'.
let motor = new Motor("Black", 0, 250, "gasoline");
console.log(motor.color);
motor.accelerate(50);
motor.move();

// We have a class definition called 'Person' with private fields.
class Person {
  #firstname;
  #lastname;

  constructor(firstname, lastname) {
    this.#firstname = firstname;
    this.#lastname = lastname;
  }

  // Getter method for 'firstname'.
  get firstname() {
    return this.#firstname;
  }

  // Setter method for 'firstname'.
  set firstname(firstname) {
    this.#firstname = firstname;
  }

  // Getter method for 'lastname'.
  get lastname() {
    return this.#lastname;
  }

  // Setter method for 'lastname'.
  set lastname(lastname) {
    this.#lastname = lastname;
  }
}

// We are creating an instance of the 'Person' class named 'p2' with firstname "Maria" and lastname "Saga".
let p2 = new Person("Maria", "Saga");
console.log(p.firstname);

// We have a revised definition of the 'Person' class with additional methods.
class Person {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }

  greet() {
    console.log("Hi there!");
  }
}

// We are adding a new method 'introduce' to the prototype of the 'Person' class.
Person.prototype.introduce = function () {
  console.log("Hi, I'm", this.firstname);
};

// We are creating an instance of the 'Person' class named 'p3'.
let p3 = new Person("Maria", "Saga");

// We are calling the 'introduce' method of the 'p3' instance.
p3.introduce();
