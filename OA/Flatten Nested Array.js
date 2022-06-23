const numArr = [1, [2, [3], 4, [5, 6, [7]]]];
const arr = [1, 2, [3], [4]];

let flattenArray = (arr) => {
  const result = [];

  const dfs = (nested) => {
    for (let el of nested) {
      if (Array.isArray(el)) dfs(el);
      else result.push(el);
    }
  };

  dfs(arr);

  return result;
};
console.log(flattenArray(numArr));

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
