// NUMBER 01 - KIỂM TRA SỐ TĂNG DẦN

function isIncreasingNumber(n) {
  const numberStr = n.toString();
  const sortArr = numberStr.split("").sort((a, b) => {
    return a - b;
  });
  return numberStr === sortArr.join("");
}
console.log("isIncreasingNumber:", isIncreasingNumber(167));

// NUMBER 02 - KIỂM TRA SỐ TĂNG DẦN ĐỀU THEO KHOẢNG CÁCH CHO TRƯỚC

function isIncreasingNumberByDistance(n, x) {
  const numberStr = n.toString();
  const sortArr = numberStr.split("").sort((a, b) => {
    return a - b;
  });
  const sortArrLength = sortArr.length;
  for (let i = 0; i < sortArrLength; i++) {
    if (Number(sortArr[i]) + x !== Number(sortArr[i + 1])) {
      return false;
    }
    return true;
  }
}
console.log("isIncreasingNumberByDistance:", isIncreasingNumberByDistance(135, 2));

// NUMBER 04 - KIỂM TRA SỐ NGUYÊN TỐ

function isPrime(n) {
  const divisorArr = [];
  for (let i = 1; i <= n; i++) {
    n % i === 0 && divisorArr.push(i);
  }
  return divisorArr.length === 2;
}
console.log("isPrime:", isPrime(9));

// NUMBER 05 - KIỂM TRA SỐ CHÍNH PHƯƠNG

function isPerfectSquare(n) {
  return Math.round(Math.sqrt(n)) === Math.sqrt(n);
}
console.log("isPerfectSquare:", isPerfectSquare(4));

// NUMBER 06 - KIỂM TRA SỐ HOÀN HẢO

function isPerfectNumber(n) {
  let sum = 0;
  for (let i = 1; i < n; i++) {
    if (n % i === 0) {
      sum += i;
    }
  }
  return n === sum;
}
console.log("isPerfectNumber:", isPerfectNumber(6));

// NUMBER 07 - KIỂM TRA SỐ ĐỐI XỨNG

function isSymetricNumber(n) {
  return n.toString() === n.toString().split("").reverse().join("");
}
console.log("isSymetricNumber:", isSymetricNumber(121));

// NUMBER 08 - KIỂM TRA SỐ CÓ TỔNG CHỮ SỐ CHIA HẾT CHO 10

function isDivisibleBy10(n) {
  return n.toString().split("").reduce((acc, elem) => Number(acc) + Number(elem)) % 10 === 0;
}
console.log("isDivisibleBy10:", isDivisibleBy10(145));

// STRING 01 - ĐẾM SỐ TỪ CÓ TRONG CÂU

function countWord(str) {
  const arr = str.split(" ");
  const arrLength = arr.length;
  let count = 0;
  for (let i = 0; i < arrLength; i++) {
    arr[i] !== "" && count++;
  }
  return count;
}
console.log("countWord:", countWord("Holy  moly  "));

// STRING 02 - THỐNG KÊ SỐ LƯỢNG TỪ TRONG CÂU

function statisticsWord(str) {
  const arr = str.split(" ");
  //const arr = str.replace(/ /g, '').split('')
  const arrLength = arr.length;
  const outputObject = {};
  for (let i = 0; i < arrLength; i++) {
    const char = arr[i];
    if (!outputObject[char]) {
      outputObject[char] = 0;
    }
    outputObject[char]++;
  }
  delete outputObject[" "];
  return outputObject;
}
console.log("statisticsWord:", statisticsWord("Captain Teemo on duty - Teemo"));

// STRING 03 - THỐNG KÊ KÝ TỰ CÓ TRONG CÂU

function statisticsCharacter(str) {
  const outputObject = {};
  const strLength = str.length;
  for (let i = 0; i < strLength; i++) {
    const char = str[i];
    if (!outputObject[char]) {
      outputObject[char] = 0;
    }
    outputObject[char]++;
  }
  outputObject["spaces"] = outputObject[" "];
  delete outputObject[" "];
  return outputObject;
}
console.log("statisticsCharacter:", statisticsCharacter("Trust nothing but your strength - Sejuani"));

// ARRAY CHECK 09 - KIỂM TRA MẢNG CÓ TĂNG DẦN HAY KHÔNG

function isIncreasingNumberList(numberList) {
  const strFromArray = numberList.join("");
  return strFromArray.length >= 2 && strFromArray === [...numberList].sort((a, b) => a - b).join("");
}
console.log("isIncreasingNumberList:", isIncreasingNumberList([1, 2]));

// ARRAY CHECK 11 - KIỂM TRA MẢNG CÓ ĐỐI XỨNG KHÔNG

function isSymetricList(numberList) {
  return numberList.length >= 1 && numberList.join("") === [...numberList].reverse().join("");
}
console.log("isSymetricList:", isSymetricList([1, 3, 5, 3, 2]));

// ARRAY CHECK 12 - KIỂM TRA MẢNG CÓ SỐ FIBONACI NHỎ HƠN 100 HAY KHÔNG (F0 = 0, F1 = 1, Fn = Fn-1 + Fn-2)

function hasFibonaciNumber(numberList) {
  const fibonaciNumbers = [0, 1];
  for (let i = 2; ; i++) {
    if (fibonaciNumbers[i - 1] + fibonaciNumbers[i - 2] < 100) {
      fibonaciNumbers.push(fibonaciNumbers[i - 1] + fibonaciNumbers[i - 2]);
    } else {
      break;
    }
  }
  console.log(fibonaciNumbers);

  const fibonaciSet = new Set(fibonaciNumbers);
  const inputSet = new Set(numberList);
  const mergedSet = new Set([...inputSet, ...fibonaciSet]);
  return inputSet.size + fibonaciSet.size > mergedSet.size;
}
console.log("hasFibonaciNumber:", hasFibonaciNumber([1, 3, 5, 7, 9]));

// ARRAY FIND 5 - TÌM SỐ LỚN THỨ 2 TRONG MẢNG

function findSecondLargestNumber(numberList) {
  const sortArr = numberList.sort((b, a) => a - b);
  const arrToSet = new Set(sortArr);
  return [...arrToSet][1];
}
console.log("findSecondLargestNumber:", findSecondLargestNumber([10, 0, 8, 20, 20]));

// ARRAY FIND 6 - TÌM SỐ CHÍNH PHƯƠNG CUỐI CÙNG TRONG MẢNG

function findLastPerfectSquare(numberList) {
  const numberListLength = numberList.length;
  const squareNumbers = [];
  for (let i = 0; i < numberListLength; i++) {
    Math.round(Math.sqrt(numberList[i])) === Math.sqrt(numberList[i]) &&
      squareNumbers.push(numberList[i]);
  }
  return squareNumbers[squareNumbers.length - 1];
}
console.log("findLastPerfectSquare:", findLastPerfectSquare([1, 7, 9, 16, 27, 4]));

// ARRAY COUNT 5 - ĐẾM SỐ LƯỢNG CÁC SỐ CÓ TRONG MẢNG A MÀ KHÔNG CÓ TRONG MẢNG B

function countNumbersNotInB(a, b) {
  const bSet = new Set(b);
  const aLength = a.length;
  let count = 0;
  for (let i = 0; i < aLength; i++) {
    !bSet.has(a[i]) && count++;
  }
  return count;
}
console.log("countNumbersNotInB:", countNumbersNotInB([3, 3, 5, 5, 7, 7], [1, 2, 3, 3, 5]));











