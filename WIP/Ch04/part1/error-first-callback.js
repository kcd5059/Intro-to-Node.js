const fs = require('fs');

fs.readFile('input.txt', (err, data) => {
    if(err) {
        return console.log('An error occurred');
    }

    console.log(data.toString());
});