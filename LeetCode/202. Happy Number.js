// 04 22 2022
/**
 * @param {number} n
 * @return {boolean}
 */

var getNum = function (x) {
  let result = 0;

  while (x > 0) {
    result += Math.pow(x % 10, 2);
    x = Math.floor(x / 10);
  }

  return result;
};

var isHappy = function (n) {
  let fast = n;
  let slow = n;

  while (true) {
    fast = getNum(getNum(fast));
    slow = getNum(slow);

    if (fast === slow) {
      return fast === 1;
    }
  }
};
// Used::   Floyd's Cycle Method
// Time::   log n
// Space::  1

/**
 * @param {number} n
 * @return {boolean}
 */

let getNum = (num) => {
  let total = 0;
  while (num !== 0) {
    total += Math.pow(num % 10, 2); // 9^2
    num = Math.floor(num / 10); // 11
  }
  return total;
};

var isHappy = function (n) {
  let fast = n;
  let slow = n;

  while (true) {
    fast = getNum(getNum(fast));
    slow = getNum(slow);
    if (fast === slow) {
      return fast === 1;
    }
  }
};

//T = logN because depends on digit, not the actual size of number
