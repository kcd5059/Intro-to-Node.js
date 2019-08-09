# Chapter 7 Exercise 3: Error Handling Middleware

## View a project with demonstrates:
* Use of new express modules for routing
* Sharing data between modules
* Using ES6 Object destructuring
* Using Error-handling Express middleware

You will be viewing an updated project based on our previous projects which demonstrates  these concepts.

Please follow the steps while viewing the project at:
`\901NodeIntro\Solutions\Ch07\express-server7-3`


## Steps

1. In `server.js` - notice the new modules of express-promise-router unhandled-error being used
	
	```javascript
	const expressPromiseRouter = require("express-promise-router");
	const unhandledError = require("unhandled-error");
	```

1. The Unhandled error module :
	```
	Catches all unhandled Promise rejections.
	Catches all uncaught synchronous exceptions.
	Allows for reporting errors manually.
	Automatically crashes your process to prevent data loss or corruption.
    ```

1. The `unhandledError()` takes a callback, which will be passed the error.  The call to unhandledError creates an errorReporter which is assigned to a local variable named `errorReporter`: [this is the unhandled error handler]

	```javascript
	let errorReporter = unhandledError((err) => {
		/* This should eventually be hooked into some sort of error reporting
		mechanism. */
		console.error("UNHANDLED ERROR:", err.stack);
	});
	```

		The callback that accepts an `err` argument will make a call to `console.error()`, with the `stack` property of the `err` object. This will contain the message and stacktrace for the error.

1. We want to be able to use this errorReporter in other modules. In the future there may be more things we wish to share. The variable called `state` is an object literal.  

1. In this state object, the `errorReporter` is stored in a property with the same name. The `state object` will be passed around to other modules, so that they can access the `errorReporter` if needed.

1. The code we had used to load routes had been:
	`app.use(require("./routes/index.js"));`

1. This has now been replaced with the use of an expressPromiserouter instead. 

	```javascript
	/* All routers and middlewares are wrapped into an express-promise-router to
	make sure that error handling is consistent throughout the application. */
	let router = expressPromiseRouter();

	router.use(express.static(path.join(__dirname, "public")));

	router.use(require("./routes/index.js"));

	app.use(router);
	```

### Add middleware error handler

1. A new file has been created in  `middleware/error-handler.js`.

1. Review this code. It takes in the errorReporter using object destructuring syntax. 
	```javascript
	module.exports = function({errorReporter}) {
	```

	The state object was passed to this router. It may end up with many properties, but we only care about the errorReporter property. 

	This code is now returning the error handlng middleware we have seen used before. Inside, it uses the errorReporter to report. 	

	Depending on the environment either `err.stack` (when in development mode) or `null` (when not in development mode) is used set for the `stackTrace` variable
	
	The `errorReporter.report()` is called with the `err` object and a new object containing `req` and `res` as properties with the same name.

	The response status is set using `res.status` with `500` as an argument, and then immediately chains on a call to `.render()` with the following arguments:
	1. The string "error", as the template name
	2. A new object, containing the properties:
		1. `errorMessage`, containing the string "Internal Server Error"
		2. `stackTrace`, containing the variable of the same name


	So the call in `server.js` 
	`app.use(require("./middleware/error-handler")(state));`

	requires it, and immediately calls the resulting function with the `state` object as its only argument, and passing the result into a new `app.use()` call that comes right before the existing call to `app.listen()`.

1. The `routes/index.js` has been modified. 
	
		`let router = express.Router();`

		has changed to this

		`let router = require("express-promise-router")();`

	This assured that next is called even when there is an error, and next was not explicitly called.

1. A file has been added to views called `error.pug` with these contents:

	```
	extends layout

	block content
		h1= errorMessage

		if stackTrace
			pre #{stackTrace}

	```
	
## Run the application
1. At the same level as package.json, install the node dependencies `npm install` 
1. Run the server `node server.js`
1. Point a browser at the URL `http://localhost:3000`
1. You should see the pages still working, now with error handling