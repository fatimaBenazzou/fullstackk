// Exercice 1:
// Write a JavaScript program that compare two objects 
// to determine if the first one contains equivalent 
// property values to the second one.

var a1 = {
    "name": 'fatima',
    "surname": 'benazzou',
    "matricule": 12345,
    "level": 'L3',
    "hobbies": ['a','b']
},
 a2 = {
    "name": 'fatima',
    "surname": 'benazzou',
    "matricule": 12345,
    "level": 'L3',
    "hobbies": ['a','b']
};

function cmp (a1,a2) {
    for(var key in a1) {
        if (Array.isArray(a1[key])) {
            if (a1[key] == null || a2[key] == null) return false;
            if (a1[key].length !== a2[key].length) return false;
        
            for (var i = 0; i < a1[key].length; i++) {
                if (a1[key][i] !== a2[key][i]) return false;
            }
        
        }
        else if(a1[key] != a2[key]) {        
            return false;
        }
    }
    return true;
}

console.log(cmp(a1,a2));

// Exercice 2:
// Write a JavaScript function to find the common elements from two arrays
// console.log(difference([1, 2, 3], [100, 2, 1, 10]));
// ["1", "2"] 

function difference (a,b){
  return  a.filter(function(elm){
        return b.indexOf(elm) !== -1;
    });
}

console.log(difference([1, 2, 3],[100, 2, 1, 10]));