const express = require('express') ; 
const app = express() ; 
const port = 3722;

app.use(require("./routes/index.js"));

app.listen(port, (err) => {  
  if (err) {
    return console.log('something bad happened', err)
  }

	console.log(`Listening at http://localhost:${port} ...`);
});

