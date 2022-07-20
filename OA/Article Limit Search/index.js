const API_URL = 'https://jsonmock.hackerrank.com/api/articles';

const init = async () => {
  const request = await fetch(API_URL);
  const response = await request.json();

  const totalPages = response.total_pages;

  // forloop every page, and push data to
  // 1. array of num-comments
  // 2. map of title and num-comments (for search)
  // forloop end
  // 3. sort num-comments and slice by limit number
  // 4. find the key of number from map
  // 5. return title array

  // edge cases: if title = null // num_comments=null
  // if num_comment is same - descending character

  const numComments = [];
  const map = {};
  let maxComments = [];
  const result = [];

  for (let page = 1; page < totalPages; page++) {
    const URL = `https://jsonmock.hackerrank.com/api/articles?page=${page}`;

    const request = await fetch(URL);
    const response = await request.json();
    const dataArr = response.data;

    for (let obj of dataArr) {
      if (obj.title === '' || obj.num_comments === null) continue;
      numComments.push(obj.num_comments);

      map[obj.title] = obj.num_comments;
    }
  }

  numComments.sort((a, b) => b - a);
  maxComments = numComments.slice(0, 2);

  console.log(maxComments);

  // traverse maxComments arr to check if any duplicates
  // if yes,
  // check if i++ same, continue i++ until diff, i = next num, store it in temp arr, get titles of temp, sort
  // let temp = []

  // for (let i = 0; i < maxComments.length; i++){
  //   if(maxComments[i] === maxComments[i++]){
  //     temp.push('title of i, i++')
  //     temp.sort().reverse();
  //     result.push(temp)

  //   } else {
  //     temp = []
  //     result.push(Object.keys(map).find((title) => map[title] === num))
  //   }
  // }

  // if not, below
  for (let num of maxComments) {
    result.push(Object.keys(map).find((key) => map[key] === num));
  }

  console.log(result.sort());
};

init();
