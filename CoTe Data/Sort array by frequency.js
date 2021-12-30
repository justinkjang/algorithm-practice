// Amazon OA sample
// Sort array by frequency

let input = [2,2,2,3,3,3,1,4,4,5,5,5,5]

let cnt = input.reduce((obj, val) => {
    obj[val] = (obj[val] || 0) +1
    return obj
}, {})

console.log(cnt)

let cntArr = Object.entries(cnt)
console.log(cntArr)

for(let i=0; i<cntArr.length;i++){
    cntArr[i][0] = Number(cntArr[i][0])
}

console.log(cntArr)


cntArr.sort((a,b)=> {
    if (a[1] === b[1]) {
        return a[0] - b[0]
    } else {
        return b[1]-a[1]
    }
})

ans = '';

for (let j=0; j < cntArr.length; j++) {
    ans += cntArr[j].join(' ') + '\n'
}

console.log(ans)
// 5,4 2,3 3,3 4,2 1,1