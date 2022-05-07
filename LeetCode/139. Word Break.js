// 2022 05 07
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  // create tabulation table of true or false
  let table = new Array(s.length + 1).fill(false);
  table[0] = true;

  // check if dictionary includes sliced string
  for (let start = 0; start < table.length; start++) {
    if (table[start] === false) {
      continue;
    }
    for (let end = start + 1; end < table.length; end++) {
      if (wordDict.includes(s.slice(start, end))) {
        table[end] = true;
      }
    }
  }

  return table[table.length - 1];
};
