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