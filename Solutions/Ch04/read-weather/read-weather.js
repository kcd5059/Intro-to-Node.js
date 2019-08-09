const weather = require('./weather.json');
console.log(weather);

// Asynchronous read
// const fs = require("fs");
// fs.readFile('weather.json', function (err, data) {
//    if (err) {
//       return console.error(err);
//    }
//    console.log("Asynchronous read: " + data);

//    data.forEach(element => {
//        console.log(element.day)
//    });
// });


//Using promisify
// const {promisify} = require('util')
// const fs = require('fs')
// const readFileAsync = promisify(fs.readFile)

// readFileAsync(`${__dirname}/weather.json`, {encoding: 'utf8'})
//   .then(contents => {
//     const weatherArray = JSON.parse(contents);
//     console.log(weatherArray);

//     weatherArray.forEach(element => {
//         console.log(element.day)
//     });
//   })
//   .catch(error => {
//     console.log(error);
//   });