const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`Assertion Passed: ${actual} === ${expected}`);
    }
    else { 
      console.log(`Assertion Failed: ${actual} !== ${expected}`);
    }
    return assertEqual};  

const countOnly = function(allItems, itemsToCount) {
    const results = {}
    for (const item of allItems) {
        if (itemsToCount[item]) { 
        if (results[item]) {
            results[item] += 1;
    } else {
            results[item] = 1;
            } 
        console.log(item);
      }
    
     } return results;
};

const firstNames = [
    "Karl",
    "Salima",
    "Agouhanna",
    "Fang",
    "Kavith",
    "Jason",
    "Salima",
    "Fang",
    "Joe"
  ];
const result1 = countOnly(firstNames, { "Jason": true, "Salima": true, "Fang": true, "Agouhanna": false });
console.log(result1)


    assertEqual(result1["Jason"], 1);
    assertEqual(result1["Karima"], undefined);
    assertEqual(result1["Fang"], 2);
    assertEqual(result1["Agouhanna"], undefined);