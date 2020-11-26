const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`Assertion Passed: ${actual} === ${expected}`);
    }
    else { 
      console.log(`Assertion Failed: ${actual} !== ${expected}`);
    }
    return assertEqual};  

    const eqObjects = function(object1, object2) {
        let length1 = (Object.keys(object1)).length
        let length2 = (Object.keys(object2)).length
        if(length1 === length2) {
            for(var k of Object.keys(object1)){
                if (Array.isArray(object1[k])){
                    if (object1[k].length !== object2[k].length)
                    {
                        return false
                    }
                    for(let j=0;j<object1[k].length;j++){
                        if (object1[k][j] !== object2[k][j]){
                            return false
                        }
                    }
                }else{
                if(object1[k] !== object2[k]){
                return false
                }
            }
        } 
    } else {
        return false   
 }
 return true
}

const cd = { c: "", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc))