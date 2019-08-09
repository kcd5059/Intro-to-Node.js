const numbers = [1, 2, 10, 21];

numbers.sort((a, b) => {
  if (a < b) {
    // If the first element is less than the second return a negative number
    return -1;
  } else if (a > b) {
    // If the first element is greater than the second return a positive number
    return 1;
  } else {
    // If they are equal, return 0
    return 0;
  }
});

const values = [1, 2, 3, 4, 5];

const items = values.map(value => {
  return "Item: " + value;
});

console.log(items);
// Produces: ["Item: 1", "Item: 2", "Item: 3", "Item: 4", "Item: 5"]

const haystack = ["Apple", "Banana", "Cherry"];

const needle = haystack.find(currentValue => {
  return currentValue.startsWith("B");
});

console.log("Needle is: " + needle);
// Produces: "Needle is: Banana"

const moreNumbers = [1, 2, 3, 4, 5, 6];

const evens = moreNumbers.filter(currentValue => {
  return currentValue % 2 == 0;
});

console.log("Evens are: " + evens);
// Produces: "Evens are: 2, 4, 6"

[1, 2, 3, 4, 5].forEach(currentValue => {
  console.log("The current value is: " + currentValue);
});
/* Produces:
            "The current value is: 1"
            "The current value is: 2"
            "The current value is: 3"
            "The current value is: 4"
            "The current value is: 5"            
            */

{
  const moreValues = [10, 40, 50];
  let sum;

  sum = moreValues.reduce((accumulator, currentValue) => {
    console.log("accum", accumulator);
    console.log("val", currentValue);
    return accumulator + currentValue;
  });

  console.log("Sum is " + sum);
}

// Produces: 
// accum 10
// val 40
// accum 50
// val 50
// Sum is 100

{
  const moreValues = [10, 40, 50];
  let sum;

  sum = moreValues.reduce((accumulator, currentValue) => {
    console.log("accum", accumulator);
    console.log("val", currentValue);
    return accumulator + currentValue;
  }, 100);

  console.log("Sum is " + sum);
  
  // Produces: 
//  accum 100
// val 10
// accum 110
// val 40
// accum 150
// val 50
// Sum is 200
}
