const fs = require('fs');

let readStream = fs.createReadStream('run-on.txt');

readStream.on('data', (data) => {
    let str = data.toString();
    
    console.log(str);
});

readStream.on('end', (data) => {
    console.log(data);
});