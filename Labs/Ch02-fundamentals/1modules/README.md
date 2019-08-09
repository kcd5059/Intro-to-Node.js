# Chapter 2 Practice with modules

## Objectives:
* Follow the steps below to create node programs using custom modules

## Directory and files

1. In your `\WIP` directory, create the directory structure `\WIP\Ch02\modules`

1. Create a file called `main.js` to start your work.

## Steps

### require a Single function:

1. In the `main.js` file add this line:
    ```javascript
        const add = require('./add.js');
    ```

    NOTE: The `.js` extension is optional.

1. Open a VSCode terminal at this point by right clicking on the file and choosing open at terminal.

1. Use `node main` to run the file and read the error.
    
    If you ever have a bad reference to a module (for example, here it can't find `add.js`) this is the type of error message you will see.

    READ: Notice how the Node `Module` class is trying to load the specified module. Node loads modules and caches them. Because of this, if in your code you use the same module more than once, you get the same instance that has been cached.

1. In your working directory, create a file called `add.js` and add this code to it:

    ```javascript
        module.exports = function add(a,b) {
            return a+b;
        }
    ```

1. In your `main.js` add this code:
    ```javascript
        console.log('5+7=', add(5,7));
    ```

1. Now try to run your `main.js` again. Do you get the expected output?

    If not modify your program, and ask if you need help.



    ###  == require a class: ==



1. In your `main.js` add this line:
    ```javascript
        const Calculator = require('./calculator.js');
    ```


1. Now create a file in the same directory called `calculator.js`.

1. Inside set `module.exports` to a class called Calculator with an add function that takes in two numbers and returns the sum.

    ```javascript
        module.exports = class Calculator {
    
            add(a,b) {
                return a+b;
            }
        }
    ```

1. In `main.js`, after you require the `calculator.js` module, create a new instance like this:
    ```javascript
        const Calculator = require('./calculator.js');
        const myCalc = new Calculator();
    ```

1. Now call the add function passing two values and console log the result.
    ```javascript
        console.log(`1+2=`, myCalc.add(1,2));
    ```

1. Now create subtract and multiply functions and call those with values to test them as well.

    ###  Practice with a constructor functions & classes

1. Create a module / file called `constructor-band.js`
    * which allows you to create a new band by passing in a band name (string) and an array of band members (strings). 

    Example usage: 
    ```javascript
    const beatles = new Band('The Beatles', ['John', 'Paul', 'George', 'Ringo']);
    ```     

    Scroll down for hint and to continue:

    ```javascript














        function Band(name, members) {
            this.name = name;
            this.members = members;
        }
    ```

1. Add a prototype function called memberCount() to return the number of members. Scroll down for hint and to continue:

    ```javascript



















        Band.prototype.memberCount = function() {
            return this.members.length;
        }
    ```

1. Add another prototype function for `hasMember` which uses Array.prototype.includes() to see if the array contains the passed in string name. Check MDN if you need help: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes

1. Make sure you use module.exports to export the Band function.

1. Create a `call-band.js` file which uses (requires) the `bands.js` module. Inside, create a band object similar to this:
    ```javascript
    const beatles = new Band('The Beatles', ['John', 'Paul', 'George', 'Ringo']);
    ```
    
1. Call each of the functions and log the output. 

    Example for the first function:

    ```javascript
    console.log(`beatles member count`, beatles.memberCount());
    ```

1. Mark your work as complete and then work on the bonus

## Bonus

1. Create a shape area calculator that has methods for calculating area of a circle given a radius, area of a square given a side, and area of a triangle given base and height.
Require and use your calculator module.

1. Rewrite the band module in `class-band.js` - and use ES6 class notation instead.