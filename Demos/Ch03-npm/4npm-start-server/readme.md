# Chapter 3 Use Node to start a server

## Objectives:
* Explore a Node project which uses JSON-Server as a back-end

## Steps

1. Open the terminal window at the same location as this file. Refer to previous demo README.md if you need additional help.  

1. Open the `package.json` and review its contents. 
    * What is/are the dependencies?
    * What scripts are available?


    ### Install Dependencies

1. Execute the command `npm install`. This will obtain the dependency `json-server` (and its dependencies) and put it into the `node_modules` folder.

    ### Learn about json-server 

1. Look up the description of json-server on the npm website. A quick way to look up packages is to search for `npm name-of-package`

    The results should include the URL: https://www.npmjs.com/package/json-server

1. Note, (but do not execute), that manually, you can start json-server by using the following command:
    ```javascript
    json-server db.json -p 3000
    ```

1. Note that using -p allows you to set a different port

1. Execute the script named `start`. You can do this using `npm run start` - or because start is a common script, you can just use `npm start`.

    ### Open in Browser

1. The console will display two URLs.
You can ctrl-click these in order to open in the browser:

    http://localhost:3000/


    ### Explore the files 

1. Find json-server in the /node_modules folder. What are it's dependencies? 

1. Mark your work as complete.
