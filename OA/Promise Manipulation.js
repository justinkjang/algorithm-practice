/**
Write a function that returns a promise that resolves
after n number of millisecons
 */
function delay(n) {}

(async () => {
  console.time('Testing delay');
  await delay(1000);
  console.timeEnd('Testing delay');
})();
