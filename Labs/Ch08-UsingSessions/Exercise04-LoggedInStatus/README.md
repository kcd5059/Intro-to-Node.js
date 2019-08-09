# Chapter 8: Exercise 4: User Management: Show LoggedIn Status

You will be viewing an updated project based on our previous projects which demonstrates the following concepts & additions: 

## New Concepts
* Access to user-specific data via res.locals
* Conditional logic in Pug templates
* Modify `fetch-user.js` to store the user on res.locals as well, making it available to every template


Please follow the steps while viewing the project at:
`\901NodeIntro\Solutions\Ch08\express-server8-4`


## Steps:

1. Navigate to `\901NodeIntro\Solutions\Ch08\express-server8-4`

1. Note how the `middleware/fetch-user.js` middleware has been modified to also show the currently logged-in user in `res.locals` - this makes it available to all templates as a template local.

1. Accordingly, the `views/layout.pug` template was modified to check whether a `user` local exists - if not, it shows the login/signup menu items.

## Run the application
1. Install Node dependencies `npm install`
1. Run the command `knex migrate:latest`
   * if you get a migration corrupted message: drop all tables from Postgres using the pgAdmin client. This may happen if you run the exercises in a non-sequential order.

1. Run the server `node server.js`
1. Point a browser at the URL `http://localhost:3000`
1. You should see the output from the server. If not fix any problems
1. When you log in now, you should see the status change.
