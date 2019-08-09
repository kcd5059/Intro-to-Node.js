const express = require('express') ; 
const app = express() ; 
const port = 3721;

let router = express.Router();

router.get("/", (request, response) => {  
  response.send('Hello from Express router!')
});

app.use(router);

app.listen(port, (err) => {  
  if (err) {
    return console.log('something bad happened', err)
  }

	console.log(`Listening at http://localhost:${port} ...`);
})

