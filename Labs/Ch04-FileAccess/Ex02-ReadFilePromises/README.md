# Chapter 4 Working with Files - Part 2 Promises

## Directory and files

1. In your `\WIP` directory, create directories `\WIP\Ch04\part2`

1. In this directory, create a file called `promise-read.js`

1. Create another file called `input.txt` with this text: 
    ```
    Hello world! Im read with promise-read.js
    ```

## Overview 

* This differs from Part I in that you will now use Bluebird to work with Promises instead of callbacks.


##  Steps

1. Create a directory structure `\WIP\Ch04\part2`

1. Run `npm init` accepting the defaults to create a package.json

1. Add bluebird as a production dependency. `npm install bluebird -S`

1. Where can you find the documentation on Bluebird?

1. Look for and read the description of how to use of `Promise.promisifyAll`.  

1. Now visit the demos at `\Demos\Ch04-FileAccess\fs-demos\2fs-promises`. Read each example and execute them. Examine the order of the console outputs.

1. Now that you have seen these code examples, you will do similar work.  In your code `promise-read.js`, require bluebird and use it to promisifyAll of the fs module

    ```javascript
    const Promise = require("bluebird");
    const fs = Promise.promisifyAll(require("fs"));
    ```

1. Leverage the demos, and use a Promise.try to wrap promise calls to readFileAsync, then console.log the contents, and have a catch in case of errors which logs the error using console.error.

1. Use the node command to run your file. You may be making several changes, it is best to open a terminal for this work.
