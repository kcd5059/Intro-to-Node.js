
// This is how callbacks were born:
//  if you pass a function to another function as a parameter, 
//  you can call it within the function when you are finished with 
//  your job. No need to return values, only calling another 
//  function with the values.

function printStars() {
    console.log("*******");
}

function repeatFunction(functionName, times) {
    for (let x = 0; x<times; x++) {
        functionName();
    }
}

repeatFunction(printStars,3);