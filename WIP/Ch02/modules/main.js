const add = require('./add.js');
const Calculator = require('./calculator.js');
const myCalc = new Calculator();
const Geometry = require('./geometry');
const geo = new Geometry();

console.log('5 + 7 = ', add(5, 7));
console.log('1 + 2 = ', myCalc.add(1, 2));
console.log('3 - 3 = ', myCalc.subtract(3, 3));
console.log('11 * 3 = ', myCalc.multiply(11, 3));

console.log(`Area of circle with radius 3: ${geo.areaOfCircle(3)}`);
console.log(`Area of square with side 4: ${geo.areaOfSquare(4)}`);