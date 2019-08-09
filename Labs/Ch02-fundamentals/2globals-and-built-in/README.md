# Chapter 2 Practice with globals

## Objectives:
* Follow the steps below to create node programs using globals

## Steps

1. In your `\WIP` directory, create the directory structure `\WIP\Ch02\globals`

1. Create a file called `inputs.js`

1. READ: The `process` object is a global that provides information about, and control over, the current Node.js process. As a global, it is always available to Node.js applications without using require().

1. In your `inputs.js` file, use console.log to print out the following 4 globals:
     * __filename 
     * __dirname
     * process.argv[0]
     * process.argv[1]

1. In your inputs file, use `process.argv` array and console.log any inputs from the command line input. If need be, use `\Demos\Ch02-fundamentals\2globals\3process\processArray.js` as a guide.

1. Execute the code using `node inputs.js one two three`

    Do you see your arguments printed?

2. Open the node documentation to https://nodejs.org/dist/latest-v10.x/docs/api/os.html and read about the functions **totalmem** & **freemem**. In a new **os.js** file, require this built in os module, and use backticks and the functions to output a message such as :

    Total memory: 365128761
    Free memory: 1033749737

## Bonus ##

1. Using only what we have covered so far, create a program which takes command line input and reverses it. 
    
    Create directory for your work called `reverse`. Create a module called `reverse.js` which takes in a string and returns a string with characters in the reverse order. Create a `program.js` in your folder and read in a string from the command line. Use the module you created and display the reversed version of the name.

1. Write a program that accepts a string as a parameter and converts the first letter of each word of the string in upper case.
Example string: 'the quick brown fox' 
Expected Output: 'The Quick Brown Fox '
