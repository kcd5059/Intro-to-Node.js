# Chapter 2 Node fundamentals: Event Emitter
## Objectives:
* Practice with Node's EventEmitter 
* Raise Events using EventEmitter's emit()
* Create named handlers and inline functions
* Practice with on and once 

## Dir/File setup

1. In your `\WIP` directory, create the directory structure `\WIP\Ch02\events`

1. Create a file called `events.js`

Read through the high-level steps. If you need additional help - scroll down, and do the more detailed steps. 

You can also refer to the event demos.

Or you can look at solution  - see if you understand it - and then recreate it.

If you need additional help, ask your instructor or fellow students. 

## High level steps (Detailed steps below if you need help)
* Create an app that raises an event 'work'
* When the event is raised the first time only, print out, 'Clocking In'
* Each time the 'work' event is emitted - events should fire to print the steps for TDD (test driven development)
* Your output should look like the following:
    ```
    *******
    Clocking in...
    Write Tests
    Code
    Refactor
    Go to Meeting
    *******
    Write Tests
    Code
    Refactor
    Go to Meeting
    ```

## Detailed Steps


1. Require the events module and store it in a reference called events

    READ: Here we are NOT looking in the local file system for a module as we are not using path indicators such as "./filename.js" but instead using `let events = require('events')`

1. Use the events reference to create an EventEmitter with the keyword new, store this in a reference called emitter.

1. Register a handler so that when you emit a 'work' event things happen. You can use this format for events that keep happening. 
    ```javascript
    emitter.on('work', () => { 
        //doSomething
    });
    ```

1. For an event that only fires once, use 

    ```javascript
        emitter.once('work', () => { 
            //doSomething Only One time
        });
    ```

1. Once the setup is complete, fire off two events using:

    ```javascript
        emitter.emit('work');
        emitter.emit('work');
    ```

1. Examine your output to see if it matches the above desired output.


## Bonus #1

1. If done before others, create another type of event called 'break'.

1. When the 'break' event is omitted print out 'Check Emails'. You can put this in a named function handler, and add it to be called when the 'work' event is emitted too.

## Bonus #2

1. use setInterval and Math.random to create a number 1 to 20 - when it is 11 - raise an event called `sighting`. 

1. run the code and watch for the output

1. when exiting the program - use process - indicate how many times 11 was sighted.


