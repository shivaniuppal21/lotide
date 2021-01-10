const words = ["ground", "control", "to", "major", "tom"];
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};
const eqArrays = function(actual, expected) {
  if (actual.length === expected.length) {
    for (let i = 0; i < actual.length; i++) {
      if (actual[i] !== expected[i]) {
        return false;
      }
      if (i === actual.length - 1) {
        return true;
      }
    }
  }
  return false;
};
const assertArraysEquals = function(actual, expected) {
  if (eqArrays(actual,expected)) {
    console.log("The arrays are identical!");
  } else {
    console.log("Not Equal!!");
  }
  return assertArraysEquals;
};


  

const results1 = map(words, word => word[0]);
console.log(results1);
assertArraysEquals(results1,[ 'g', 'c', 't', 'm', 't' ]);