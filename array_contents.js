// Checking to see if 2 arrays have the same contents (no unique elements between them)

const { cornflowerblue } = require("color-name");

const array1 = [1, 2, 3, 4, 5, 6, 7, 8];
const array2 = [5, 6, 7, 8, 9, 10, 11];

function doArraysContainSameElements(firstArray, secondArray) {

  for (let i=0; i<firstArray.length; i++) {

    let found = false;

    for (let j=0; j<secondArray.length; j++) {

      if (firstArray[i] == secondArray[j]) {
        found = true;
        break;
      }

    }

    if (found === false) {
      return false
    }

  }

}

console.log(doArraysContainSameElements(array1, array2))