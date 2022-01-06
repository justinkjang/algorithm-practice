// 1-1 Plus Minus
function plusMinus(arr) {
    let positive = (arr.filter(num => num > 0).length / arr.length).toFixed(6)
    let negative = (arr.filter(num => num < 0).length / arr.length).toFixed(6)
    let zero = (arr.filter(num => num == 0).length / arr.length).toFixed(6)
    
    console.log(positive + '\n' + negative + '\n' + zero)
}