const Band = require('./constructor-band.js');

const beatles = new Band('The Beatles', ['John', 'Paul', 'George', 'Ringo']);

console.log('beatles member count', beatles.memberCount());
