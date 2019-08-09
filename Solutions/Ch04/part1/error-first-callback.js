const fs = require("fs");
//If you create a file using VSCode it needs to be read with utf8 set
//fs.readFile("./input.txt",{encoding: 'utf-8'}, (err, fileContents) => {
//OR
fs.readFile("./input.txt", 'utf-8', (err, fileContents) => {

    if (err != null) {
		console.error("An error occurred", err);
	} else {
		console.log(fileContents.toString());
	}
})
