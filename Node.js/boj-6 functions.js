// BOJ 4673 Self Numbers
function d(n) {
    let sum = n;
    while (n>0) {
        sum += n%10
        n = Math.floor(n/10)
    }
    return sum
}
function solution(){
    let selfNum = new Array(100)
    selfNum.fill(true)
    let result = '';
    for (let i = 1; i < 100; i++) {
        selfNum[d(i)] = false
    }
    for (let k = 1; k < 100; k++) {
        if(selfNum[k]) {
            result += k + '\n'
        }
    }
    console.log(result)
}
solution()



// BOJ 1065 한수
const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const n = Number(input)

function han(n){
    let count = 0;
    for (let i = 1; i <= n; i++) {
        let stringI = String(i)
        if (i < 100) {
            count++;
        }
        if (i < 1000) {
            if(Number(stringI[0]) - Number(stringI[1]) == Number(stringI[1]) - Number(stringI[2])){
                count++;
            }
        }
    }
    console.log(count)
}
han(n)