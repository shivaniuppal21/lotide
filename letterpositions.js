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


assertArraysEquals([1, 2, 3], [1, 2, 3]);

const letterPositions = function(allItems) {
  const results = {};
  for (let i = 0; i < allItems.length; i++) {
    if (results[allItems[i]]) {
      results[allItems[i]].push(i);
    } else if (allItems[i] !== " ") {
      results[allItems[i]] = [];
      results[allItems[i]].push(i);
    }
  }
    
  return results;
};



console.log(letterPositions("lighthouse in the house"));
assertArraysEquals(letterPositions("lighthouse in the house").l, [0]);
assertArraysEquals(letterPositions("lighthouse in the house").h, [3, 5, 15, 18]);

