// 07 19 2022
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  // create a stack that pushes in given string
  // as we push el in stack, check if the can pop out
  // if stack is empty at the end it is true

  // Time: n, space: n

  const stack = [];
  const parens = '() {} []';
  let i = 0;

  while (i < s.length) {
    stack.push(s[i]);
    i++;

    let open = stack[stack.length - 2];
    let close = stack[stack.length - 1];

    let temp = open + close;

    if (parens.includes(temp)) {
      stack.pop();
      stack.pop();
    }
  }

  return stack.length === 0 ? true : false;
};

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let obj = {
    ')': '(',
    ']': '[',
    '}': '{',
  };

  let arr = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '[' || s[i] === '(' || s[i] === '{') {
      arr.push(s[i]);
    } else {
      if (obj[s[i]] === arr[arr.length - 1]) {
        arr.pop(); // ({[]})
      } else {
        return false; // ({]
      }
    }
  }

  return arr.length === 0 ? true : false; // [{}
};
