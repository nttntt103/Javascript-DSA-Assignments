//----------------------findIndex------------------

function myFindIndex(myArray, elementToLookFor) {
  for (let i = 0; i < myArray.length; i++) {
    if (myArray[i] === elementToLookFor) {
      return i;
      }
  }
  return -1;
}
console.log(myFindIndex([1, 2, 3], 3));

//----------------------map------------------------

const mapOutputArray = [];
const mapCallback = (element, index, array) => {
  //code to be executed
  return element * 2;
};

Array.prototype.myMap = function (mapCallback) {
  const arrLength = this.length;
  for (let i = 0; i < arrLength; i++) {
    if (this.hasOwnProperty(i)) {
      mapOutputArray.push(mapCallback(this[i], i, this));
    }
  }
  return mapOutputArray;
}
console.log([1, 2, 3].myMap(mapCallback))

//----------------------reduce---------------------

const reduceCallback = (total, element, index, array) => {
  //code to be executed
  return total + element;
};

Array.prototype.myReduce = function (reduceCallback, result) {
  const arrLength = this.length;
  let i = 0;
  if (arguments.length < 2) {
    i = 1;
    result = this[0];
  }
  for (; i < arrLength; i++) { 
    if (this.hasOwnProperty(i)) {
      result = reduceCallback(result, this[i], i, this);
    }
  } 
  return result;
} 
console.log([1, 2, 3, 4, 5].myReduce(reduceCallback, 10))

//----------------------every----------------------

const everyCallback = (element, index, array) => {
  //code to be executed
  return element > 0;
};

Array.prototype.myEvery = function (everyCallback) {
  const arrLength = this.length;
  let everyOutput = true;
  for (let i = 0; i < arrLength; i++) {
    if (this.hasOwnProperty(i)) {
      let result = everyCallback(this[i], i, this);
      if (!result) {
        everyOutput = false;
        break;
      }
    }
  }
  return everyOutput;
}
console.log([1, 2, 3, 4, 5].myEvery(everyCallback))

//----------------------sort-----------------------

const sortCallback = (element, index, array) => {
  //code to be executed
};
function mySort(sortCallback) {
  
}

//----------------------flat-----------------------

const flattenedArray = [];
function myFlat(myArray, depth) {
    
}
