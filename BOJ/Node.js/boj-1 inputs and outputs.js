// BOJ 1000 A+B
const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');
const a = Number(input[0]);
const b = Number(input[1]);

console.log(a + b);



// BOJ 1001 A-B
const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');
const a = Number(input[0]);
const b = Number(input[1]);

console.log(a - b);



// BOJ 1008 A/B
const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');

function ans(arr) {
    return Number(arr[0]) / Number(arr[1])
}

console.log(ans(input));



// BOJ 10869 사칙연산
const fs = require('fs');
// let inputs = fs.readFileSync('/dev/stdin').toString().split(' ').map(Number);
const inputs = fs
  .readFileSync('/dev/stdin')
  .toString()
  .split(' ')
  .map((item) => +item);

const [a, b] = inputs;

function solution(a, b) {
  console.log(a + b);
  console.log(a - b);
  console.log(a * b);
  console.log(Math.floor(a / b));
  console.log(a % b);
}

solution(a, b);



// BOJ 10430 나머지
const fs = require('fs');
let inputs = fs.readFileSync('/dev/stdin').toString().split(' ').map(Number);
const [a, b, c] = inputs;

function solution(a, b, c) {
  console.log((a+b)%c);
  console.log(((a%c)+(b%c))%c);
  console.log((a*b)%c);
  console.log(((a%c)*(b%c))%c);
}

solution(a, b, c);



// BOJ 2588 곱셈

const fs=require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const a = Number(input[0]);
const b = input[1];

function solution(a,b){
  console.log(a*Number(b[2]));
  console.log(a*Number(b[1]));
  console.log(a*Number(b[0]));
  console.log(a*Number(b));
}

solution(a,b)