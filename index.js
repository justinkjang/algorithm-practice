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