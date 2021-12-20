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