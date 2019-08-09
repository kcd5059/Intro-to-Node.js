console.log(`current running file: ${__filename}`);

console.log(`current directory: ${__dirname}`);
 
const another = require("./another/another-module.js");
another();
