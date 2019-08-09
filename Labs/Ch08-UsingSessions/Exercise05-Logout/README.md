# Chapter 8: Exercise 5: Logging Out

You will be viewing an updated project based on our previous projects which demonstrates the following concepts & additions: 


## New Concepts
* Add logout button to layout, only visible when user is logged in
* Add logout route to `routes/users.js` that destroys the session

Please follow the steps while viewing the project at:
`\901NodeIntro\Solutions\Ch08\express-server8-5`


## Steps:

1. Navigate to `\901NodeIntro\Solutions\Ch08\express-server8-5`

1. Note how in `routes/users.js`, a new route for `/logout` has been added - this route will destroy the session that the user has (effectively logging them out), and then redirects them back to `/`.

1. Accordingly, the `views/layout.pug` template has been updated to include a Logout button, that’s only visible when the user is logged in.

## Run the application
1. Install Node dependencies `npm install`
1. Run the server `node server.js`
1. Point a browser at the URL `http://localhost:3000`
1. You should see the output from the server. If not fix any problems
1. You should now be able to register/login and logout.
