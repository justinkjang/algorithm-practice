/** 
Write a function that takes an array of objects, and returns an array
of the objects' 'name' property, only if that property exists
 */

function getNames(array) {
  // hasOwnProperty
  let results = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].hasOwnProperty('name')) {
      results.push(array[i].name);
    }
  }

  return results;
}

console.log(
  'getNames',
  getNames([
    { a: 1 },
    { name: 'Jane' },
    {},
    { name: 'Mark' },
    { name: 'Sophia' },
    { b: 2 },
  ])
);
