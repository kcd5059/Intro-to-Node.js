# Chapter 8: Exercise 2: Database Access from Express

You will be viewing an updated project based on our previous projects which demonstrates the following concepts & additions: 

## Overview
* Knex/database use with connect-session-knex
* Abstraction functions as separate modules (createStudentObject)
* Random data generation (faker, pick-item, range)
* Use of faker, pg, knex, pick-item, range
* Database details added to config.json
* Modify of expressSession call to use connect-session-knex with Knex instance
* Changed state object to include Knex instance
* Wrapped ./routes/{index.js,users.js} contents in a wrapper function that accepts state object and extracts the db instance from it
* Create route for generating fake users using faker/pick-item/range
* Write createStudentObject wrapper (which turns the hireDate into a moment instance)
* Remove hardcoded student entries
* Modify / and /class routes to fetch the students from the database, instead of the now-removed hardcoded student entries
* Modify template to have 'generate students' button


Please follow the steps while viewing the project at:
`\901NodeIntro\Solutions\Ch08\express-server8-2`

## Run the application
1. Navigate to `\901NodeIntro\Solutions\Ch08\express-server8-2`
2. Install Node dependencies `npm install`
3. Run the server `node server.js`
4. Point a browser at the URL `http://localhost:3000`
5. You should see the output from the server. 
6. Login with the password: secretpassword


## Steps:
1. Installed in package.json: faker, pg, knex, pick-item, range

1. Open the npm description for faker to find out what this is about.

1. Note how database connection details have been added to the `config.json` file. These should work if you are using a class virtual machine setup. If not ask your instructor for the login details.

1. Note how a `knexfile.js` has been created, that mostly just re-exports the database configuration values from `config.json` - but it does so in the specific format that Knex expects. This file is used by Knex and your application to configure database access.

1. Note how a new ‘migration file’ has been created as `migrations/20170323125040_init.js` - this file specifies the schema of the database table that you’ll be storing the users in.

    Before executing the script, ensure there are no database tables in postgres with names such as knex or knex migrate.
    If so, right click and drop.

    Now you will execute this migration by using the npm scrit migrate. From the command line you can run `npm run migrate`.

    Notice the output and check the database. you should now see a students table.



1. Note how in `routes/index.js` and `routes/users.js`, the contents of the module have been wrapped into a function (turning the module into a “parametric module”), and how that module extracts the `db` property from the argument it receives.

## Explore server.js

Note how server.js has been updated in a number of ways:

1. It now uses Knex to set up a database connection, using the `knexfile.js`.

1. It adds the database connection object to the ‘state object’.

1. It changes the `express-session` configuration to store sessions in the database instead of in memory, using the `connect-session-knex` plugin (which is required near the top of the file).

1. Instead of passing the results of requiring `routes/index.js` and `routes/users.js` directly into `router.use`, it now first calls the wrapper function, passing in the state object. This allows the wrapper function to extract the `db` database connection object from it, providing the modules with access to the database.

1. Note how near the bottom of `routes/index.js`, a new `/generate` route was created - this route uses `faker`, `pick-item`, and `range` to generate 10 new student items. It then inserts them into the database and redirects the user back to the list.

1. The `views/index.pug` template was updated to include a form with a button, that triggers this new route.

1. Note how a new file at `lib/create-student-object.js` was created. This file uses a wrapper function, similar to the one that the `routes/index.js` and `routes/users.js` modules use, and returns a function that:

1. Takes in a student object (containing data from the database)

1. Overrides the `hireDate` property with a `moment` object (for easier formatting in the templates)
    - Returns the changed object.

1. Now look at `routes/index.js`:
    
    - The `lib/create-student-object.js` module is required, passing on the `db` from the state object.

    - The `/` and `/class` routes are modified - the hardcoded student data is removed, and instead the students are retrieved from the database, transformed using the `createStudentObject` abstraction, and then passed into a template.

