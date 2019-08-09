function Square(width) {
      this.width = width;
      this.area = function() {
          return this.width * this.width;
        };
}

const square = new Square(4);
console.log(square.area());

function BetterSquare(width) {
  this.width = width;
} 

BetterSquare.prototype.area = function() {
  return this.width * this.width;
};

const newSquare = new BetterSquare(5);
console.log(newSquare.area());
