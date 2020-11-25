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

const middle = function(array){
        let output = []
        if(array.length === 1 || array.length === 2){
            return  output
        }
        else if(array.length % 2 === 1){
            let index = Math.floor(array.length /2)
            output.push((array[index]))
            
        }
        else if(array.length % 2 === 0){
            let index = Math.floor(array.length /2)
            output.push((array[index-1]))    
            output.push((array[index]))
            
        }
    return output
}
console.log(middle([1, 2, 3, 4, 5,6]))