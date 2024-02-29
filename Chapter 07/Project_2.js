// We have a class definition called 'Menu'.
class Menu {
    // Private fields (#offer1 and #offer2) are used to store constant values.
    #offer1 = 10;
    #offer2 = 20;

    // The constructor method is called when a new instance of the class is created.
    constructor(val1, val2) {
        // Inside the constructor, we are setting the 'val1' and 'val2' properties of the instance.
        this.val1 = val1;
        this.val2 = val2;
    }

    // We have a method called 'calTotal' defined within the class.
    calTotal() {
        // The 'calTotal' method calculates the total cost based on the values of 'val1' and 'val2' and the private fields.
        return (this.val1 * this.#offer1) + (this.val2 * this.#offer2);
    }

    // We have a getter method called 'total' that returns the result of the 'calTotal' method.
    get total() {
        return this.calTotal();
    }
}

// We are creating three instances of the 'Menu' class with different values for 'val1' and 'val2'.
const val1 = new Menu(2, 0);
const val2 = new Menu(1, 3);
const val3 = new Menu(3, 2);

// We are logging the total cost calculated using the 'total' getter method for each instance to the console.
console.log(val1.total);
console.log(val2.total);
console.log(val3.total);
