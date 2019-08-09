var moment = require('moment');
var moment_tz = require('moment-timezone');
console.log(moment().format('MM-DD-YYYY'));

console.log(
moment("20110101","YYYYMMDD").fromNow()
);


let now = moment_tz();

let message =
    moment_tz.tz('America/New_York').format('ha z') + ' is ' +
    moment_tz.tz('America/Los_Angeles').format('ha z');
    
    console.log(message);