# Chapter 7 Exercise 2: Templating With Data
## Objectives:
* Install Pug and use Pug to render views.
* Setup and pass data (locals) to rendered templates


Continue working in your `WIP\Ch07\express-server` directory. If you did not complete the last exercise, you can copy the solution from the last exercise in the solutions directory to be your starting point.

## New Packages

1. Install Moment.js: `npm install --save moment`

1. Install Pug with `npm install --save pug`

## Directories and files

1. Copy the public folder from this directory to your working directory


## Steps

1. Open for editing: `server.js`

1. Use require to define a path

	`const path = require("path");`


1. Use the `app.set()` to configure Express options for views and view engine.

	```javascript
	app.set("views", path.join(__dirname, "views"));
	app.set("view engine", "pug");

	
	```

1. Add a reference to the public views folder:

	`app.use(express.static(path.join(__dirname, "public")));`


## Update route to use views

1. Open the `routes/index.js` routing file for editing 

1. Require the `moment` library as a `const` named `moment`

1. Define the following array of objects for students. 
    ```javascript
		let studentArray = [{
			nameFirst: "Devin",
			nameLast: "Durgan",
			email: "Devin.Durgan@gmail.com",
			hireDate: moment("01/19/2015", "MM/DD/YYYY")
		}, {
			nameFirst: "Cristal",
			nameLast: "Adams",
			email: "Cristal.Adams@live.com",
			hireDate: moment("07/29/2016", "MM/DD/YYYY")
		}, {
			nameFirst: "Nettie",
			nameLast: "McGlynn",
			email: "Nettie.McGlynn@gmail.com",
			hireDate: moment("08/29/2015", "MM/DD/YYYY")
		}];
    ```

1. Change the route for (/) to render an index view that you will create in a future section, and pass the array of students.

	```javascript
		router.get("/", (req, res) => {
			res.render("index", {
				students: studentArray
			});
		});
	```

1. Create a new route for the "/class" path that renders the "class" template, passing in a similar object containing the `studentArray`


	```javascript
		router.get("/class", (req, res) => {
			res.render("class", {
				students: studentArray
			});
		});
	```

1. Create a new route for the "/about" path that renders an "about" template
	```javascript
	router.get("/about", (req, res) => {
		res.render("about");
	});
	```

## Template creation steps:
1. Create a `views` directory at the same level as `server.js`

2. Into your views directory copy the files from within the `/views` directory at the sme level as THIS README.
   
3. Open `Layout.pug` and see how it contains the basic html, head and body elements. Notice the use of **include foot**. Open `foot.pug` to 

4. Open and view `index.pug` - it (and other files) extend layout in order to replicate layout for each page. Notice how index will use the passed in student data.

5. Open and view `class.pug`. Note hw it includes an external JS file as well as embeds JS.
   
6. Open and view `about.pug`. Note its use of mailto and normal link.

## Run the application
1. If running solution, install Node dependencies `npm install`
2. Run the server `nodemon server.js`
3. Point a browser at the URL `http://localhost:3000`
4. Click the pages.
5. Fix any problems
