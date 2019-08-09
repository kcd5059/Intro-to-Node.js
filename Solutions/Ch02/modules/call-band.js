const Band = require('./band');

const beatles = new Band('The Beatles', ['John', 'Paul', 'George', 'Ringo']);

console.log(`beatles member count`, beatles.memberCount());
console.log(`has Ringo?`, beatles.hasMember('Ringo'));
