/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    
    let result = []
    
    for(let i=0; i<n; i++){
        
        let num = i+1
        
        if(num%3 === 0 && num%5===0) {
            result[i] = 'FizzBuzz'
        } else if(num%3 === 0){
            result[i] = 'Fizz'
        } else if(num%5 === 0){
            result[i] = 'Buzz'
        } else {
            result[i] = num.toString()
        }
    }
    
    return result
};