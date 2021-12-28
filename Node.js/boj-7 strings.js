// BOJ 11654 아스키 코드
const input = require('fs').readFileSync('/dev/stdin').toString().trim()

function solution(input) {
    console.log(input.charCodeAt(0))
}
solution(input)



// BOJ 11720 숫자의 합
const inputs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

function solution(inputs) {
    let nums = inputs[1].split('').map(Number)
    let sum = 0;
    for (let i = 0; i < inputs[0]; i++) {
        sum += nums[i]
    }
    console.log(sum)
}
solution(inputs)



// BOJ 10809 알파벳 찾기
const input = require('fs').readFileSync('/dev/stdin').toString().trim()

function solution(input) {
    let result = [];

    for (let i = 97; i <= 122; i++) {
        result.push(input.indexOf(String.fromCharCode(i)));
    }
    console.log(result.join(' '))
}
solution(input)



// BOJ 2675 Repeating Characters
const inputs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

function solution(inputs) {
    let n = Number(inputs[0])
    for (let i = 1; i <= n; i++) {
        let data = inputs[i].split(' ')
        let r = Number(data[0])
        let s = data[1]
        let string = ''
        for (let j = 0; j < s.length; j++){
            for(let k = 0; k < r; k++){
                string += s[j]
            }
        }
        console.log(string)
    }
}
solution(inputs)



// BOJ 1157 단어 공부
const input = require('fs').readFileSync('/dev/stdin').toString().trim().toLowerCase()

function solution(input) {
    let alphArr = new Array(26).fill(0)

    console.log(alphArr)

    for (let i = 0; i < input.length; i++) {
        alphArr[input.charCodeAt(i) - 97] ++
    }
    
    console.log(alphArr)

    let max = Math.max(...alphArr)

    console.log(max)

    let index = alphArr.indexOf(max)

    console.log(index)

    let isSame = false

    for (let j = 0; j < 26; j++){
        if (alphArr[j] == max && j != index) {
            isSame = true
            break;
        }
    }

    console.log(isSame ? "?" : String.fromCharCode(index + 65))


}
solution(input)



// BOJ 1152 단어의 개수
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ')

function solution(input) {
    console.log([input] == '' ? 0 : input.length)
}
solution(input)



// BOJ 2908 FILIP
const inputs = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ')

function solution(inputs) {
    // let a = inputs[0]
    // let b = inputs[1]

    // let newA = Number(a[2]) * 100 + Number(a[1]) * 10 + Number(a[0])
    // let newB = Number(b[2]) * 100 + Number(b[1]) * 10 + Number(b[0])

    // console.log(newA < newB ? newB : newA)

    let [a,b] = inputs.map(v=>[...v].reverse().join(''))

    console.log(a > b ? a : b)
}
solution(inputs)



// BOJ 5622 BAKA
const input = require('fs').readFileSync('/dev/stdin').toString().trim()

function solution(input) {
    let alphArr = ['ABC', 'DEF','GHI','JKL','MNO','PQRS','TUV','WXYZ']
    let count = 0

    for (let k = 0; k < input.length; k++) {
        // console.log(input[k])

        for (let i = 0; i < alphArr.length; i++) {
            // console.log(alphArr[i])
            
            for (let j = 0; j < alphArr[i].length; j++) {
                // console.log(alphArr[i][j])

                if (input[k] == alphArr[i][j]) {
                    count += i + 3
                }

            }
        }
    }

    console.log(count)

}
solution(input)



// BOJ 2941 LJESNJAK
const input = require('fs').readFileSync('/dev/stdin').toString().trim()

function solution(input) {
    let regex = /c\=|c-|dz\=|d\-|lj|nj|s\=|z\=/g
    let result = input.replace(regex, 'X')
    console.log(result.length)
}
solution(input)



// BOJ 1316 그룹 단어 체커
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

function solution(input) {
    let n = Number(input[0])
    let count = 0;

    for (let i = 1; i <= n; i++) {
        let word = input[i]
        let error = 0

        for (let j = 0; j < word.length; j++) {
            if (word[j] != word[j+1]) {
                let newWord = word.slice(j+1)
                if (newWord.includes(word[j])) {
                    error++
                }
            }
        }
        if (error == 0) {
            count++
        }
    }
    console.log(count)
}
solution(input)
