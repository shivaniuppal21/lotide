const findKey = function(obj, callback) {
    for (let key of Object.keys(obj)){
        if (callback(obj[key])){
            return key
        }
    }
}


console.log(findKey({
    "Blue Hill": { stars: 1 },
    "Akaleri":   { stars: 3 },
    "noma":      { stars: 2 },
    "elBulli":   { stars: 3 },
    "Ora":       { stars: 2 },
    "Akelarre":  { stars: 3 }
  }, x => x.stars === 2)) // => "noma"

  