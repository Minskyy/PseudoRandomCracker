let _fibonacciIndex = 2;
let _fibonacciSequence = 1;

function getNextFib(numberOfTrades) {
  for (let i = 1; i <= numberOfTrades; i++) {
    _calculateNextFibonacci();
  }

  return _fibonacciSequence;
}

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

function getNextMultiple(currentGamble) {
  const quocient = Math.floor(currentGamble / 420);

  const nextMultiple = (quocient + 1) * 420;

  return nextMultiple;
}

module.exports = {
  getNextFib,
  getNextMultiple,
};
