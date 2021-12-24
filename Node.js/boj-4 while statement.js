// BOJ 10952 A+B -5
const inputs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

function solution(inputs){
    let result = '';
    let i = 0;
    while (true) {
        let nums = inputs[i].split(' ').map(Number);
        if(nums[0] == 0 && nums[1] == 0){
            break;
        } else {
            result += nums[0]+nums[1] + '\n';
            i++;
        }       
    }
    console.log(result)
};
solution(inputs);



// BOJ 10951 A+B -4
const inputs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

function solution(inputs){
    let result = '';
    let i = 0;
    while (i < inputs.length) {
        let nums = inputs[i].split(' ').map(Number);
        result += nums[0]+nums[1] + '\n';
        i++; 
    }
    console.log(result)
};
solution(inputs);



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