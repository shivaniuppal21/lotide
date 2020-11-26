const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`Assertion Passed: ${actual} === ${expected}`);
    }
    else { 
      console.log(`Assertion Failed: ${actual} !== ${expected}`);
    }
    return assertEqual};  

const countLetters = function(allItems) {
    const results = {}
    for (const item of allItems) {
        if (results[item]) {
            results[item] += 1;
    } else if (item !== " ") {
            results[item] = 1;
            } 
      }
     return results;
};

console.log(countLetters("lighthouse in the house"))


assertEqual(countLetters("lighthouse in the house")["l"],1 );
assertEqual(countLetters("lighthouse in the house").t,2 );
