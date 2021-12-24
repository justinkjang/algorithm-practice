// BOJ 1110 더하기 사이클
const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const n = Number(input)

function solution(n){
    let newNum = n;
    let count = 0;
    let tempNum = 0;   
    while(true) {
        tempNum = Math.floor(newNum/10) + newNum%10;
        newNum = (newNum%10)*10 + tempNum%10
        count += 1;
        if(newNum === n){
            break;
        }
    }
    console.log(count);
}
solution(n)