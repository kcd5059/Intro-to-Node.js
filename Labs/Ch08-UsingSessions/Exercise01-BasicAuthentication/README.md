# Chapter 8: Exercise 1: Basic Authentication

## View a project with demonstrates:

* Use of body-parser
* Sessions + express-session usage
* Using a custom regular middleware
* Custom error types
* Access control (require login before allowing access to certain routes)
* Because of access control: specifying route-level middleware (requireLogin) before the route handler
* Conditional error logic; expose and log certain information under certain circumstances, but not under others

You will be viewing an updated project based on our previous projects which demonstrates  these concepts.

Please follow the steps while viewing the project at:
`\901NodeIntro\Solutions\Ch08\express-server8-1`


## Run the application
1. Navigate to `\901NodeIntro\Solutions\Ch08\express-server8-1`

1. Install dependencies `npm install`

2. Run the server `node server.js`

3. Point a browser at the URL `http://localhost:3000`


## Steps:

1. Open `server.js`, and note the new require statetements - bluebird, body-parser and express-session. 

1. After `router.use(express.static(path.join(__dirname, "public")));`
new code has been added to configure a session

	```javascript
	router.use(bodyParser.urlencoded({extended: true}));

	router.use(expressSession({
		secret: config.sessions.secret,
		resave: false,
		saveUninitialized: false
	}));

	router.use(require("./middleware/sessions-promises"));

	router.use(require("./routes/index.js"));
	router.use(require("./routes/users.js"));
	```


## Use of sessions and promises
	
1. A new file is at `middleware/sessions-promises.js`. This will be used to specify middleware that adds promisified session methods on every request object.

1. In server.js, find the new require for `sessions-promises`.
	` const expressSession = require("express-session");`

1. Note how config.json now contains a randomly generated secret key, and how this is used in the express-session configuration in `server.js`.

## Add custom errors

1. Find the new `errors.js` file which has been created, for containing custom error types that will be created using the `create-error` module. 

1. Note how a new `routes/users.js` file was created. This contains the router that specifies all authentication-related routes (eg. login).

1. The new router specifies two routes: one to display the login page, and one to handle the form submission from that login page.

	Note how the ‘form handling’ route validates the password, and either saves the session and redirects (if valid) or throws an error (if invalid).
	
	Note also how a corresponding template was created at `views/admin/login.pug`, and how `views/layout.pug` was updated to include a link to the login page.

1. In `server.js`, you can see the new `routes/users.js` module being required and added to the application using `router.use`.

1. Note how a new `middleware/require-login.js` module is created, and how it validates whether the user is logged in, by inspecting the session data. If so, it calls `next()`, allowing the request to proceed. If not, it instead produces an error.

1. Note how `routes/index.js` is modified to use this new `require-login` middleware, to ensure that only logged-in users can access the student list.

1. Finally, note how the `middleware/error-handler.js` middleware is modified, to change its behaviour depending on scenario:
	- A default status code of 500 is set for any error that doesn’t have an explicit status code defined on it.
	- The original error message and stack trace are only displayed in situations where it’s safe to do so, depending on the status code of the error and whether the application is running in development mode or not.
	- Non-client errors (which usually means a bug has occurred, or something else that is of interest to the developer) are logged to the terminal.
 	- Error reporting is changed to only happen when a bug occurs, but not for other kinds of errors.
