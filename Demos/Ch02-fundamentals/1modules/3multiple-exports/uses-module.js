
const importedModule = require('./multiple-exports');

console.log(importedModule);
//when imported object, 
//must use same property name as exported
importedModule.log( importedModule.api);

