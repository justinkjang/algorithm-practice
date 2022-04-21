/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  let a = x;

  while (a * a > x) {
    a = ((a + x / a) / 2) | 0; //bitwise OR truncate decimal
  }

  return a;
};
