//07 24 2022
/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function (boxTypes, truckSize) {
  // sort 2d by unit
  // if size is greater or equal to target = return target * unit
  // else update target, update unit, move to next
  // Time = N log n, Space 1

  let target = truckSize;
  let max = 0;

  boxTypes.sort((a, b) => b[1] - a[1]);

  for (let box of boxTypes) {
    if (box[0] >= target) {
      max += target * box[1];
      return max;
    } else {
      target -= box[0];
      max += box[0] * box[1];
    }
  }

  return max;
};

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
