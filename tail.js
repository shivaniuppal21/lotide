const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`Assertion Passed: ${actual} === ${expected}`);
    }
    else { 
      console.log(`Assertion Failed: ${actual} !== ${expected}`);
    }
    return assertEqual};  

    const tail = function(array)
  {
      return (array.slice(1))
  };
  

  // TEST CODE
  assertEqual("Lighthouse Labs", "Bootcamp"); 
  assertEqual(1,1);
  
  const result = tail([5,6,7])
  assertEqual(result[0], 6);
  assertEqual(result[1], 7);

// Test Case: Check the original array 
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); //