// BOJ 1712 손익분기점
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number)

function solution(input) {
    let a = input[0]
    let b = input[1]
    let c = input[2]

    if (c > b) {
        console.log(Math.floor(a/(c-b)) + 1)
    } else {
        console.log(-1)
    }
}
solution(input)



