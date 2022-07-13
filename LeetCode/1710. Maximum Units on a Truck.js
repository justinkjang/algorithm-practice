// 07 13 2022
/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function (boxTypes, truckSize) {
  // sort 2d array by the unit size
  // add unit to global var, counted by the num of box and truck size
  // return global value

  // Time: n log n Space : 1

  boxTypes.sort((a, b) => b[1] - a[1]);

  let result = 0;
  let max = truckSize;

  for (let el of boxTypes) {
    if (el[0] >= max) {
      result += max * el[1];
      return result;
    } else {
      max -= el[0];
      result += el[0] * el[1];
    }
  }

  return result;
};
