const os = require('os');

console.log(__filename);
console.log(__dirname);
console.log(process.argv[0]);
console.log(process.argv[1]);

console.log(`Total memory: ${os.totalmem()} Free memory: ${os.freemem()}`)