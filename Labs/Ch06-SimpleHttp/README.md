# Chapter 6 Simple Http Server
## Objectives:
* You will create a basic server using http.
* Create a simple server, in a file called server.js
* You will install a tool called nodemon to make development faster

NOTE: You can refer to the demo code for hints/help on this lab. 

## Dir/File setup

1. In your `\WIP` directory, create the directory structure `WIP\Ch06\http-server`

1. Create a file called `server.js`

## Steps

1. Inside of `server.js` require the `http` module and store as const http.

1. Add this code in `server.js`. This will be slightly different than the demos, but demonstrates what passing the function handler into createServer does...

    `const server = http.createServer();`

1. Now add this event listener. passing the handler to the createServer is a shortcut for this.

    ```javascript
        server.on('request', (request, response) => {
            response.end('Hello Planet!');
        });
    ```

1. Add this call to have the server listen on port 3131. 
 
    ```javascript  
        server.listen(3131, (err) => {  
        if (err) {
            return console.log('something bad happened', err);
        }

        console.log(`server is listening on 3131`);
        })
    ```

1. Open a terminal window - do not use the extension run code, you will be making more changes and hitting the up arrow to run again is faster. Use `node server.js` to start the server.

1. Open a browser to the URL: `http://localhost:3131`. Do you see the results?

1. Change the code to send the response Hello, Galaxy!  Refresh the browser, do you see your new message?

1. You must stop and restart the browser. You can use ctrl-C to stay in the same terminal window and then hit the up arrow to run again. 

1. Isn't this annoying?  Let's install `nodemon` globally.
    `npm install -g nodemon`

1. Restart the server but this time use:
    `nodemon server.js`

1. Refresh your browser, you should see the message you had created.

1. Now change the message to `Hello Universe`.  And change the console.log on startup to nicely display the full URL - with http:// so that it is clickable. 

1. After saving your code you should see in the console that the server restarts, and then see your message in the browser.

## Bonus

1. Return a hard-coded display of the days of the week and the weather.

1. Return weather from a file read.

1. Return weather from a database read.

