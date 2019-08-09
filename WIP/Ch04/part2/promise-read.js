const Promise = require('bluebird');
const fs = Promise.promisifyAll(require('fs'));

Promise.try(() => {
    return fs.readFileAsync('input.txt');
}).then((data) => {
    console.log(data.toString());
});