# Chapter 1: Getting Started with node

## Objectives:
* Practice executing JavaScript in Node

## Directory and files

1. In your `\WIP` directory, create your working directory: `\WIP\Ch01\js`

## Steps

### simple-concat.js
1. In this directory create a file called `simple-concat.js`

1. In this file create variables to hold your firstName and LastName 

1. Use back ticks and template expressions instead of concatenation to display a greeting on two lines as follows:
  Hello
  firstName LastName

1. Test your code by executing it using `node simple-concat.js` from the command line.

### constructor-function.js
1. Now create a file called `constructor-function.js` with a  constructor function called Person, which takes in a firstName, lastName, and has a function called getFullName which uses a template expression to return the fullName.  Create a new person1 by calling the function passing firstName and lastName values. Use console.log and pass in person1.getFullName(). Run the code to see that it works as expected. For help, scroll down past the grey box:

    ```javascript
























    function Person(fname, lname) {
        this.fname = fname;
        this.lname = lname;
        this.getFullName = function() {
            return `${fname} ${lname}`
        }
    }

    let person1 = new Person(firstName, lastName);
    console.log(person1.getFullName());
    ```
 
### weatherweek.js

1. In a new file called `weatherweek.js` - create an array of objects with the high/low temps for the week.

    An example to get started { day: “Monday”, high: 80,low: 67 }   

    With the array, can you loop through and find the highest and lowest temp of the week?

    After finding the highest high temp day, and lowest low temp day, print something similar to the following:

    ```
    The lowest temperature this week was on Wed and it was 65
    The highest temperature this week was on Thurs and it was 102
    ```

    Hint: keep track of a variable for lowestTempDay and highestTempDay, while looping compare to current day and replace variables as necessary.

### jschallenges

1. Create another subdirectory: `\WIP\Ch01\jschallenges`

1. In this directory create a file called `introduction.js`.

1. Now, open a command prompt (not within VSCode) to any path. Maximize the window.

1. Execute this command, we will talk more about its meaning later:
`npm install -g javascripting`

1. Now execute the following command:
  `javascripting`

1. The CLI screen will present a list of challenges to you. Choose the first one and ignore the bits about creating a directory, you will do your work in VSCode in the folder you have already created. Skip to the first part which says to add this to introduction.js:
  
    ```javascript
      console.log('hello');
    ```

1. Right click on your `introduction.js` file to open to a terminal at this path.

1. Note the command below that the program says to use to verify your work. This is how you will check your work for future challenges.

    ```
    javascripting verify introduction.js
    ```

1. Read the output. If your code passes, go on to the next challenge by returning to the command prompt and hitting the up arrow to get to the menu again.

1. Complete all challenges. 

1. Mark your work as complete using the means specified for your class. Ask your instructor if they did not tell you. :)

## Bonus

1. Write a JavaScript function called first to get the first element of an array. Passing a second parameter 'n' will return the first 'n' elements of the array

Test Data : 
console.log(first([7, 9, 0, -2])); 
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));

Expected Output : 
7
[] 
[7, 9, 0] 
[7, 9, 0, -2] 
[] 
