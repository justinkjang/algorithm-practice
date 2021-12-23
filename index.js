// BOJ 10871 X보다 작은 수
const inputs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [a, x] = inputs[0].split(' ').map(Number);
const nums = inputs[1].split(' ').map(Number);

function solution (a, x, nums){
    let result = '';
    for (i=0; i < a; i++) {
        if(nums[i] < x) {
            result += nums[i] + ' ';
        }
    };
    console.log(result);
};
solution(a, x, nums);
// push, join Method
// let result = [];
// for (let i=0; i <= x; i++) {
//     if (nums[i] < x) {
//         result.push(nums[i]);
//     }
// }
// console.log(result.join(' '));