// BOJ 2739 구구단
const fs=require('fs');
let input = fs.readFileSync('/dev/stdin').toString();
let a = Number(input[0]);

function solution(a){
  for (i=1; i<10; i++) {
    console.log(`${a} * ${i} = ${a*i}`)
  }
}
solution(a)



// BOJ 10950 A+B -3
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

function solution(input){
  for (i=1; i<=input[0]; i++){
    let a = input[i].split(' ').map(Number);
    console.log(a[0]+a[1]);
  }
};
solution(input)



// BOJ 8393 Sum
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
const [n]=input;

function solution(n){
  let num = 0;
  for(i=1; i<=n; i++){
    num+=i
  };
  console.log(num);
}
solution(n);



// BOJ 15552 빠른 A+B
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

function solution(input){
  for(i=1; i<=input[0]; i++){
    const num = input[i].split(' ').map(Number);
    console.log(num[0]+num[1]);
  }
};
solution(input);



// BOJ 2741 N찍기
const [n] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

function solution(n){
  let ans = '';
  for(i=1; i<=n; i++){
    ans += i + '\n'
  }
  console.log(ans)
};
solution(n);



// BOJ 2742 기찍N
const [n] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

function solution(n){
  let ans='';
  for (i=n; i>0; i--) {
    ans += i+'\n'
  }
  console.log(ans)
};
solution(n);



// BOJ 11021 A+B -7
const inputs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

function solution(inputs){
  let ans = '';
  for(i=1; i<=inputs[0]; i++){
    let nums = inputs[i].split(' ').map(Number);
    ans += `Case #${i}: ${nums[0]+nums[1]}\n`
  }
  console.log(ans)
};
solution(inputs);



// BOJ 11022 A+B -8
const inputs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

function solution(inputs){
  ans='';
  for(i=1; i<=inputs[0]; i++){
    let nums = inputs[i].split(' ').map(Number);
    ans += `Case #${i}: ${nums[0]} + ${nums[1]} = ${nums[0]+nums[1]}\n`
  }
  console.log(ans);
};
solution(inputs);



// BOJ 2438 별 찍기 -1
const [n]=require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

function solution(n){
  let ans='';
  for(row=1; row<=n; row++){
    let stars='';
    for(star=1; star<=row; star++){
      stars += '*';
    }
    ans += stars + '\n';
  }
  console.log(ans)
};
solution(n);



// BOJ 2439 별 찍기 -2
const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const n = Number(input);

function solution(n){    
    let result = '';
    for (row = 1; row <= n; row++) {
        let stars = '';
        for (i = n; i > 0; i--) {
            stars += i > row ? ' ' : '*';
        }
        result += stars + '\n';
    }
    console.log(result);
};
solution(n);



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