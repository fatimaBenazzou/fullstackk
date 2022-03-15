 // Remove a specific Element from an array

 function supprimer(t, element){
    i = j = 0,
    existe = false;

    //Verifier si l'element existe :
    while (!existe && i < t.length) {
        if (t[i] === element) {
            existe = true;
            j = i + 1;
        } else {
            i++;
        }
    }

    if (existe) {
        while(j <= t.length){
            t[i] = t[j];
            j++;
            i++;
        }
        //t[i] = null ;
        t.length -- ;
    }

    return t;
}


// Remove Duplicates from Sorted Array
var t = [1, 2, 3, 3, 4],
  i = 0,
  j = 1;

function suppD(t) {
    while (j < t.length) {
        if (t[i] === t[j]) {
            t = supprimer(t,t[i]);
        } else {
            i++;
            j++;
        }
    }
  return t;
}
console.log(suppD(t));
