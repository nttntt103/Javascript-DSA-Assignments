// NUMBER 01 - KIỂM TRA SỐ TĂNG DẦN

function isIncreasingNumber(n) {
  const numberStr = n.toString();
  const sortArr = numberStr.split("").sort((a, b) => {
    return a - b;
  });
  console.log("isIncreasingNumber:", numberStr === sortArr.join(""), n);
}
isIncreasingNumber(167);

// NUMBER 02 - KIỂM TRA SỐ TĂNG DẦN ĐỀU THEO KHOẢNG CÁCH CHO TRƯỚC

function isIncreasingNumberByDistance(n, x) {
  const numberStr = n.toString();
  const sortArr = numberStr.split("").sort((a, b) => {
    return a - b;
  });
  const sortArrLength = sortArr.length;

  if (numberStr !== sortArr.join("")) {
    console.log(`isIncreasingNumberByDistance (${x}):`, false, n);
  } else {
    const isResultNumber =
      sortArr
        .map((elem, index) => elem - x * index)
        .reduce((acc, elem) => acc + elem) ===
      sortArr[0] * sortArr.length;
    console.log(`isIncreasingNumberByDistance (${x}):`, isResultNumber, n);
  }
  // const elemNumbers = (sortArr[sortArrLength - 1] - sortArr[0]) / x + 1;
  // console.log(
  //   `isIncreasingNumberByDistance (${x}):`,
  //   numberStr === sortArr.join("") && elemNumbers === sortArrLength,
  //   n
  // );
}
isIncreasingNumberByDistance(135, 2);

// NUMBER 04 - KIỂM TRA SỐ NGUYÊN TỐ

function isPrime(n) {
  const divisorArr = [];
  for (let i = 1; i <= n; i++) {
    n % i === 0 && divisorArr.push(i);
  }
  console.log("isPrime:", divisorArr.length === 2, n);
}
isPrime(129);

// NUMBER 05 - KIỂM TRA SỐ CHÍNH PHƯƠNG

function isPerfectSquare(n) {
  console.log("isPerfectSquare:", Math.round(Math.sqrt(n)) === Math.sqrt(n), n);
}
isPerfectSquare(5);

// NUMBER 06 - KIỂM TRA SỐ HOÀN HẢO

function isPerfectNumber(n) {
  let sum = 0;
  for (let i = 1; i < n; i++) {
    if (n % i === 0) {
      sum += i;
    }
  }
  console.log("isPerfectNumber:", n === sum, n);
}
isPerfectNumber(6);

// NUMBER 07 - KIỂM TRA SỐ ĐỐI XỨNG

function isSymetricNumber(n) {
  console.log(
    "isSymetricNumber:",
    n.toString() === n.toString().split("").reverse().join(""),
    n
  );
}
isSymetricNumber(121);

// NUMBER 08 - KIỂM TRA SỐ CÓ TỔNG CHỮ SỐ CHIA HẾT CHO 10

function isDivisibleBy10(n) {
  console.log(
    "isDivisibleBy10:",
    n
      .toString()
      .split("")
      .reduce((acc, elem) => Number(acc) + Number(elem)) %
      10 ===
      0,
    n
  );
}
isDivisibleBy10(145);

// STRING 01 - ĐẾM SỐ TỪ CÓ TRONG CÂU

function countWord(str) {
  const arr = str.split(" ");
  const arrLength = arr.length;
  let count = 0;
  for (let i = 0; i < arrLength; i++) {
    arr[i] !== "" && count++;
  }
  console.log("countWord:", count, arr, str);
}
countWord("Holy  moly  ");

// STRING 02 - THỐNG KÊ SỐ LƯỢNG TỪ TRONG CÂU

function statisticsWord(str) {
  // const outputMap = new Map();
  // const arr = str.split(" ");
  // const strSet = new Set(arr);
  // const arrLength = arr.length;
  // for (let i = 0; i < arrLength; i++) {
  //   if (arr[i] !== "" && strSet.has(arr[i])) {
  //     let count = 1;
  //     outputMap.get(arr[i]) === undefined
  //       ? outputMap.set(arr[i], count)
  //       : outputMap.set(arr[i], outputMap.get(arr[i])++);
  //   }
  // }
  // console.log(str, outputMap);
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
  console.log("statisticsWord:", outputObject, str);
}
statisticsWord("Captain Teemo on duty - Teemo");

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
  console.log("statisticsCharacter:", outputObject, str);
}
statisticsCharacter("Trust nothing but your strength - Sejuani");

// ARRAY CHECK 09 - KIỂM TRA MẢNG CÓ TĂNG DẦN HAY KHÔNG

function isIncreasingNumberList(numberList) {
  const strFromArray = numberList.join("");
  console.log(
    "isIncreasingNumberList:",
    strFromArray.length >= 2 &&
      strFromArray ===
        [...numberList]
          .sort((a, b) => {
            return a - b;
          })
          .join(""),
    numberList
  );
}
isIncreasingNumberList([1, 2]);

// ARRAY CHECK 11 - KIỂM TRA MẢNG CÓ ĐỐI XỨNG KHÔNG

function isSymetricList(numberList) {
  console.log(
    "isSymetricList:",
    numberList.length >= 1 &&
      numberList.join("") === [...numberList].reverse().join(""),
    numberList
  );
}
isSymetricList([1, 3, 5, 3, 2]);

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
  console.log(
    "hasFibonaciNumber:",
    inputSet.size + fibonaciSet.size > mergedSet.size,
    numberList
  );
}
hasFibonaciNumber([1, 3, 5, 7, 9]);

// ARRAY FIND 5 - TÌM SỐ LỚN THỨ 2 TRONG MẢNG

function findSecondLargestNumber(numberList) {
  console.log(
    "findSecondLargestNumber:",
    numberList.sort((b, a) => a - b)[1],
    numberList
  );
}
findSecondLargestNumber([10, 0, 8, 20]);

// ARRAY FIND 6 - TÌM SỐ CHÍNH PHƯƠNG CUỐI CÙNG TRONG MẢNG

function findLastPerfectSquare(numberList) {
  const numberListLength = numberList.length;
  const squareNumbers = [];
  for (let i = 0; i < numberListLength; i++) {
    Math.round(Math.sqrt(numberList[i])) === Math.sqrt(numberList[i]) &&
      squareNumbers.push(numberList[i]);
  }
  console.log("findLastPerfectSquare:", squareNumbers.sort((b, a) => a - b)[0]);
}
findLastPerfectSquare([1, 7, 9, 16, 27]);

// ARRAY COUNT 5 - ĐẾM SỐ LƯỢNG CÁC SỐ CÓ TRONG MẢNG A MÀ KHÔNG CÓ TRONG MẢNG B

function countNumbersNotInB(a, b) {
  const bSet = new Set(b);
  const aLength = a.length;
  let count = 0;
  for (let i = 0; i < aLength; i++) {
    !bSet.has(a[i]) && count++;
  }
  console.log("countNumbersNotInB:", count, a, b);

  // const aSet = new Set(a);
  // const bSet = new Set(b);
  // console.log(bSet)
  // const mergedSet = new Set([...bSet, ...aSet]);
  // const halfMergedSet = new Set([...bSet, ...a]);
  // console.log(halfMergedSet)
  // aSet.size + bSet.size === mergedSet.size &&
  //   console.log("countNumbersNotInB:", a.length, a, b);
  // aSet.size + bSet.size > mergedSet.size &&
  //   console.log(
  //     "countNumbersNotInB:",
  //     a.length - (a.length + bSet.size - halfMergedSet.size),
  //     a,
  //     b
  //   );

  // const bSet = new Set(b);
  // const mergedSet = new Set([...bSet, ...a]);
  // console.log(
  //   "countNumbersNotInB:",
  //   a.length - (bSet.size + a.length - mergedSet.size),
  //   a,
  //   b
  // );
  // a.length - ((a.length - aSet.size) + (aSet.size + bSet.size - mergedSet.size)),
}
countNumbersNotInB([3, 3, 5, 5, 7, 7], [1, 2, 3, 3, 5]);





