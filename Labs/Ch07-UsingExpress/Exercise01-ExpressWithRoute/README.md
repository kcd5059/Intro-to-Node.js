# Chapter 7 Exercise 1: Simple Express Server with routes
## Objectives:
* This exercise will create a basic server using Express.
* A router will be used to set a response for /
* Check the Slides or Demos if you need additional hints

## Dir/File setup steps

1. In your `\WIP` directory, create the directory structure `WIP\Ch07\express-server`

1. Create a file called `server.js`

1. Use `npm init --yes` to create a package.json

1. Use `npm install -S express` to install the express package and add it to the package.json dependencies

1. Create a `config.json` file, containing a `port` property with the numeric value 3000

## Steps

1. In `server.js` require the `express` library as a `const` named `express`

1. Create a new variable named  `app` by calling `express()`  [this is the Express application]

1. Require the `config.json` file as a `const` named `config`. This loads the file with the config information. We can do this as a straight require as it is during startup and is not intensive.

1. Call the `app.listen()` method, and pass in as arguments:
    * The port number 
    * A callback function, with no input, that uses `console.log` to display a message that you're listening on the configured port

1. Create a directory and file:  `routes/index.js` file

1. In the file, require the `express` library as a `const` named `express`

    ```javascript
    const express = require("express");
    ```

1. Call `express.Router()`, and store the result in a new variable named `router` [this is an Express router]

    ```javascript
    let router = express.Router();
    ```


1. Call the `router.get()` method, passing in as the arguments:

    * The string "/" - this is the path on which the new route should be created
    * A callback (accepting a `req` and `res` argument), that specifies the logic to execute for the route

    ```javascript
    router.get("/", (req, res) => {
        res.send("Hello world! From the main page");
    });
    ```
    
1. Export the new router, by assigning it to `module.exports`

    ```javascript
    module.exports = router;
    ```

1. In `server.js` require the `./routes/index` module, and pass it into a call to `app.use()` - you can do this in one line of code.

1. Run the server `nodemon server.js`

1. Point a browser at the URL `http://localhost:3000`

1. You should see the output from the server. If not fix any problems. And refresh the browser.

1. Add another route in `routes/index.js` for /about.

    ```javascript
    router.get("/about", (req, res) => {
        res.send("Hello world! From about page");
    });
    ```

1. You should now be able to hit this route in the browser at `http://localhost:3000/about`  Test that you can see it.

1. Add one more route for /class that says `welcome to the class page`.

1. Mark your work as complete.

## Bonus

1. Add a GET weather route for /weather - when localhost:3000/weather is loaded in browser, display weather data from randomly generated high and low values for the week.
