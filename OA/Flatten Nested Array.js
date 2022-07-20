const numArr = [4, 3, 2, 1];
// const numArr = [1, [2, [3], 4, [5, 6, [7]]]];
// [1, 2, 3, 4, 5]

let flattenArray = (arr) => {
  let min = Infinity;
  let maxDiff = -Infinity;

  for (let num of arr) {
    if (num < min) min = num;

    maxDiff = Math.max(maxDiff, num - min);
  }

  if (maxDiff === 0) return -1;
  return maxDiff;
};

console.log(flattenArray(numArr));

// ---------
// // recursive
// // create result
// // if array -> recursion
// // if not, push into result array

// // Time: n
// // Space: n

// const result = [];

// const dfs = (arr) => {
//   for (let el of arr) {
//     if (Array.isArray(el)) {
//       dfs(el);
//     } else {
//       result.push(el);
//     }
//   }
// };

// dfs(arr);

// return result;

// --------

// let flattenArray = (arr) => {
// recursive
// if el is array, recursive,
// if not, push to result array

// Time: linear
// space: linear

//   const result = [];

//   const dfs = (arr) => {
//     for (let el of arr) {
//       if (Array.isArray(el)) dfs(el);
//       else result.push(el);
//     }
//   };

//   dfs(arr);

//   return result;
// };

// console.log(flattenArray(numArr));

// DFS WAY

// let flattenArray = (arr) => {
//   const result = [];

//   const dfs = (nested) => {
//     for (let el of nested) {
//       if (Array.isArray(el)) dfs(el);
//       else result.push(el);
//     }
//   };

//   dfs(arr);

//   return result;
// };
// console.log(flattenArray(numArr));

// REDUCE and CONCAT WAY

// let flattenArray = (arr) => {
//   let result = arr.reduce(
//     (acc, cur) => acc.concat(Array.isArray(cur) ? flattenArray(cur) : cur),
//     []
//   );

//   return result;
// };
// console.log(flattenArray(numArr));
