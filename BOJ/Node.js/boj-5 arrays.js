// BOJ 10818 최소, 최대
const inputs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

function solution(inputs){
    const n = Number(inputs[0])
    const nums = inputs[1].split(' ').map(Number)
    // console.log(nums)
    nums.sort((a,b)=> a-b)
    // console.log(nums)
    console.log(nums[0], nums[n-1])
}
solution(inputs)



// BOJ 2562 최댓값
const inputs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number)

function solution(inputs){
    let maxNum = inputs[0]
    let index = 0;

    for (let i=1; i<9; i++){
        if(maxNum < inputs[i]) {
            maxNum = inputs[i];
            index = i
        }
    }
    console.log(maxNum)
    console.log(index+1)
}
solution(inputs)



// BOJ 2577 숫자의 개수
const inputs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

function solution(inputs){
    let num = String(inputs[0] * inputs[1] * inputs[2])
    // console.log(num) // 17037300
    // console.log(num.split(0)) // ['17', '373', '', '']
    for (let i=0; i<10; i++){
        console.log(num.split(i).length-1)
    }
}
solution(inputs)



// BOJ 3052 MODULO
const inputs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number)

function solution(inputs){
    let newArr = inputs.map(a => a % 42)
    // console.log(newArr)
    let set = new Set(newArr)
    // console.log(set) // set is not array. its collection of objects.
    newArr = [...set]
    // console.log(newArr) // make set list into array.
    console.log(newArr.length) // print answer.
}
solution(inputs)



// BOJ 1546 평균
const inputs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

function solution(inputs){
    let n = Number(inputs[0])
    let scores = inputs[1].split(' ').map(Number)
    scores.sort((a,b)=> b-a)
    let maxNum = scores[0]
    let newScores = scores.map(a=>a/maxNum*100)
    let sum = 0;
    for (let i = 0; i < n; i++){
        sum += newScores[i]
    }
    let avg = sum/n
    console.log(avg)
}
solution(inputs)



// BOJ 8958 Score
const inputs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

function solution(inputs){
    let t = Number(inputs[0])
    let result = '';
    for (let i = 1; i <= t; i++){
        let count = 0;
        let score = 0;
        for (let j = 0; j < inputs[i].length; j++) {
            if (inputs[i][j] == "O") {
                count ++;
                score += count;
            } else {
                count = 0;
            }
        }
        result += score + '\n'
    }
    console.log(result)
}
solution(inputs)



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