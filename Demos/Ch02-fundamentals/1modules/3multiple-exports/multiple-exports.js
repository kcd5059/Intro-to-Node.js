const url = 'http://bands.com/api';

function log(message) {
    console.log(message);
}
//above is PRIVATE

//can export individual props
module.exports.log = log;

//you can change name of property
module.exports.api = url;


