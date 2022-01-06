// BOJ 1330 두 수 비교하기

const fs=require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

const [a,b] = input

function solution(a,b){
  if (a > b) {
    console.log('>')
  } else if (a < b) {
    console.log('<')
  } else {
    console.log('==')
  }
}

solution(a,b)



// BOJ 9498 시험 성적

const fs=require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

const [a] = input

function solution(a){
  if (a >= 90) {
    console.log('A')
  } else if (a >= 80) {
    console.log('B')
  } else if (a >= 70) {
    console.log('C')
  } else if (a >= 60) {
    console.log('D')
  } else {
    console.log('F')
  }
}

solution(a)



// BOJ 9498 시험 성적

const fs=require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

const [a, b] = input

function solution(a,b){
  console.log(
    a>0 && b>0 ? 1
    : a>0 && b<0 ? 4
    : a<0 && b>0 ? 2
    : 3
  )
}

solution(a,b)



// BOJ 2884 SPAVANAC

const fs=require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

let [a, b] = input;

function solution(a,b){

  b -= 45;

  if (b < 0) {
    b += 60;
    a--;

    if (a === -1) {
      a = 23
    }
  }

  console.log(a, b)
}

solution(a,b)