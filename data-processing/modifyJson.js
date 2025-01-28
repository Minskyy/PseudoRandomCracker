const jsonData = require('../bitquery/results/dexTrades.json');
const fs = require('fs');

let _fibonacciIndex = 1;
let _fibonacciSequence = 1;

const modifiedTransferObject = jsonData.ethereum.ethereum.transfers
  .reverse()
  .map((elem, i) => {
    _calculateNextFibonacci();

    return {
      ...elem,
      i,
      fib: _fibonacciSequence,
    };
  })
  .reverse();

console.log(modifiedTransferObject);

fs.writeFile(
  '../bitquery/results/modifiedDexTrades.json',
  JSON.stringify(modifiedTransferObject),
  (error) => {
    if (error) {
      console.log(error);
    }
  }
);

function _calculateNextFibonacci() {
  _fibonacciIndex++;
  if (_fibonacciIndex > 42) {
    _fibonacciSequence = 1;
    _fibonacciIndex = 1;
  } else if (_fibonacciIndex <= 2) {
    _fibonacciSequence = 1;
  } else {
    a = 1;
    b = 1;
    for (let i = 3; i <= _fibonacciIndex; i++) {
      c = a + b;
      a = b;
      b = c;
    }
    _fibonacciSequence = b;
  }
}
