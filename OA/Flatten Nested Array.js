const numArr = [1, [2, [3], 4, [5, 6, [7]]]];

let flattenArray = (numArr) => {
  const result = [];

  const dfs = (slate) => {
    for (let el of slate) {
      if (Array.isArray(el)) {
        dfs(el);
      } else {
        result.push(el);
      }
    }
  };

  dfs(numArr);

  console.log(result);
};

flattenArray(numArr);
