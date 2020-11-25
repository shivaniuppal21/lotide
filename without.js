const eqArrays = function(actual, expected) {
    if( actual.length === expected.length){
        for( let i = 0; i < actual.length; i++){
           if(actual[i]!== expected[i])
           {
               return false
           }
           if(i === actual.length -1){
               return true
           }
        }
    }
    return false
    };
    const assertArraysEquals = function (actual, expected){
        if (eqArrays(actual,expected))
        {
            console.log("The arrays are identical!")
        }else{
            console.log("Not Equal!!")
        }
        return assertArraysEquals
    }
    const without = function (source, itemsToRemove){
    let newsource = source.filter(function(x){
        return (itemsToRemove.indexOf(x) < 0)
    })
    return newsource
    }

    console.log(without([1, 2, 3], [1,2]))

const words = ["hello", "world", "lighthouse"];
let newwords = without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEquals(newwords,["hello", "world"])
assertArraysEquals(words, ["hello", "world", "lighthouse"]);

