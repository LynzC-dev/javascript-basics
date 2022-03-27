function negate(a) {
  // your code here
  return (!a);
};

function both(a, b) {
  // your code here
  return a && b;

};

function either(a, b) {
  // your code here
  return a || b;
};

function none(a, b) {
  // your code here
  return !(a || b);
};

function one(a, b) {
  // your code here\
  if ((a === true && b === false) || (a === false && b === true)) {
    return true;
  }
    else return false;
};

function truthiness(a) {
  // your code here
  return Boolean(a);
};

function isEqual(a, b) {
  if (a ===b)  {
    return true;
  }
  else return false;
  // your code here
};

function isGreaterThan(a, b) {
  // your code here
  return a > b;
};

function isLessThanOrEqualTo(a, b) {
  // your code here
  return a <= b;
};

function isOdd(a) {
  // your code here
  if (a%2 > 0) {
    return true;
  }
  else return false;
};

function isEven(a) {
  // your code here
  if (a%2 === 0) {
    return true;
  }
  else return false;
};

function isSquare(a) {
  // your code here
//  if (Number.isInteger(Math.sqrt(a))) {
//    return true;
//  }
//  else return false;

function startsWith(char, string) {
  // your code here
  if (string[0] === char) {
    return true;
  }
  else return false;
};

function containsVowels(string) {
  // your code here

};

function isLowerCase(string) {
  // your code here
  if (string === string.toLowerCase()) {
    return true;
  }
  else return false;
};

module.exports = {
  negate,
  both,
  either,
  none,
  one,
  truthiness,
  isEqual,
  isGreaterThan,
  isLessThanOrEqualTo,
  isOdd,
  isEven,
  isSquare,
  startsWith,
  containsVowels,
  isLowerCase
};
