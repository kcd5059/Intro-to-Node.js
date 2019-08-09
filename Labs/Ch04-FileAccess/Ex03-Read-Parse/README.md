# Chapter 4 Working with Files - Part 3 Read & Parse

## Overview

Read a file of temperatures for the week into your program and use a package to find the highest high and lowest low temperatures of the week.

## Directory and files

1. In your `\WIP` directory, create directory structure: `\WIP\Ch04\read-weather`

1. In this directory, create a file called `weather.json`

1. Run `npm init --yes` to generate the package.json with default values.

## Steps

1. In your `weather.json` file create an array of objects. One example object is:
    ```javascript
    {"day":"Monday", "high":100, "low":90}
    ```

    Copy this into your file, and repeat for the other days of the week. Remember the format is to separate the objects with commas:  [ {}, {}, {} ] 

1. In your `read-weather.js` file first put this in your code and run it. 
    
    ```javascript
        const weather = require('./weather.json');
        console.log(weather);
    ```

1. This gets the data, but what are some short-comings of this approach?

1. This is a synchronous approach.  Imagine we have a lot of data, and we want to process it asynchronously, because our app needs to service other requests. This will block and wait. We can use the fs core module which has synchronous functions.
    
1. Comment out your current code by highlighting it and using control + / in VSCode. this will comment out all lines of code. This acts as a toggle. if you do it again it will uncomment. Leave the code commented out and move to the next step.

1. Look at the code in the demo: `\Demos\Ch04-FileAccess\fs-module\fileReadAsync.js`

1. Use this approach to read in the data from weather.json.
    
1. To turn the json string into an array of objects, we can use JSON.parse.

    ```javascript
    const weatherArray = JSON.parse(contents);
    ```

1. This is asynchronous, you can use Promises to indicate the "sequential" asynchronous steps. We have seen using BlueBird but there is now also the ability to promisify functions within Node using a core module util.

https://nodejs.org/dist/latest-v10.x/docs/api/util.html#util_util_promisify_original

1. Now with an array of objects find the highest high and lowest low of the week. We have done this in a previous exercise, but now checkout using _lodash functions such as minBy to solve this problem differently.

https://lodash.com/docs/4.17.10#minBy

