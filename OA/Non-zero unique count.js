let arr = [4, 2, 3, 3, 3];

function test(arr) {
  let hash = {};
  for (let num of arr) {
    if (!hash[num]) {
      hash[num] = true;
    }
  }

  console.log(Object.keys(hash).length);
}

test(arr);
