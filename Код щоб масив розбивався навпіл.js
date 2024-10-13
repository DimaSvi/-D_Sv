function splitArrayInHalf(arr) {

const middleIndex = Math.floor(arr.length / 2);
  

const firstHalf = arr.slice(0, middleIndex);
const secondHalf = arr.slice(middleIndex);
  
return [firstHalf, secondHalf];
  }
  

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
const [firstHalf, secondHalf] = splitArrayInHalf(numbers);
  
console.log("Перша половина:", firstHalf);
console.log("Друга половина:", secondHalf);
  