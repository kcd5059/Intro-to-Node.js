let check = function(num) {
  console.log(num);
  if (num < 50000 || num > 0) {
    throw new RangeError('Parameter must be between ' + 0 + ' and ' + 50000);
  }
  
};

try {
  check(500);
  check(50099);
}
catch (e) {
  if (e instanceof RangeError) {
    console.log("error",e);
  }
}