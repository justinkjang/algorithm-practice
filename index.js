// BOJ 4344 Above Average
const inputs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

function solution(inputs){
    let c = Number(inputs[0])
    let result = '';
    for (let i = 1; i <= c; i++) {
        let cases = inputs[i].split(' ').map(Number)
        let sum = 0;
        for (let j = 1; j <= cases[0]; j++) {
            sum += cases[j]
        }
        let avg = sum / cases[0]
        let count = 0;
        for (let k = 1; k <= cases[0]; k++) {
            if (cases[k] > avg) {
                count += 1
            }
        }
        let percentile = 0;
        percentile = count / cases[0] * 100
        result += percentile.toFixed(3) + '%\n'
    }
    console.log(result)

}
solution(inputs)