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