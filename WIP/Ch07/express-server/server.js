const express = require('express');
const app = express();
const config = require('./config.json');
const path = require('path');
const expressPromiseRouter = require("express-promise-router");
const unhandledError = require("unhandled-error");

console.log(process.env.NODE_ENV);
/* All routers and middlewares are wrapped into an express-promise-router to
make sure that error handling is consistent throughout the application. */
let router = expressPromiseRouter();

router.use(express.static(path.join(__dirname, "public")));
router.use(require("./routes/index.js"));

app.use(router);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

let errorReporter = unhandledError((err) => {
	/* This should eventually be hooked into some sort of error reporting
	mechanism. */
	console.error("UNHANDLED ERROR:", err.stack);
});


/* The 'state' object is an object that we pass to everything that needs some
   sort of stateful dependency; all of the stateful dependencies are initialized
   here in server.js, and then passed into the modules that need them using a
   wrapper function. The wrapper function can unpack the stateful dependencies
   that it needs, eg. using object destructuring. */
let state = {
    errorReporter: errorReporter
}

app.use(require("./middleware/error-handler")(state));

app.listen(config.port, (err) => {
    if(err) {
        return console.log('An error occurred.', err);
    }

    console.log(`Server is listening on port ${config.port}`);
})