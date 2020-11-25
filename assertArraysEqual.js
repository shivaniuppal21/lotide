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


    assertArraysEquals([1, 2, 3], [1, 2, 3])