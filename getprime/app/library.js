'use strict'

module.exports = {


 
 getPrime: function(n) {
 	var notprimeArray = [],  primeArray = [];
 	for (var i = 2; i <= n; ++i) {
 		if (!notprimeArray[i]) {
 			// i has not been marked -- it is prime
 			primeArray.push(i);
 		for (var j = i << 1; j <= n; j += i) {
 			notprimeArray[j] = true;
 		}

       }
    }
    return primeArray;
  }

}

 