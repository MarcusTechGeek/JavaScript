// We have a class definition called 'Animal'.
class Animal {
    // The constructor method is called when a new instance of the class is created.
    constructor(species, sounds) {
        // Inside the constructor, we are setting the 'species' and 'sounds' properties of the instance.
        this.species = species;
        this.sounds = sounds;
    }

    // We have a method called 'speak' defined within the class.
    speak() {
        // The 'speak' method logs a message to the console using the 'species' and 'sounds' properties.
        console.log(this.species + " " + this.sounds);
    }
}

// We are adding a method 'eat' to the prototype of the 'Animal' class.
Animal.prototype.eat = function () {
    // The 'eat' method returns a message indicating that the animal is eating.
    return this.species + " is eating";
}

// We are creating a new instance of the 'Animal' class with the species "cat" and sounds "meow".
let cat = new Animal("cat", "meow");

// We are creating another instance of the 'Animal' class with the species "dog" and sounds "bark".
let dog = new Animal("dog", "bark");

// We are calling the 'speak' method of the 'cat' instance, which logs a message to the console.
cat.speak();

// We are calling the 'eat' method of the 'dog' instance and logging the result to the console.
console.log(dog.eat());

// We are logging the 'dog' instance to the console.
console.log(dog);
