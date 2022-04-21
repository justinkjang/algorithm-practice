/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function(arr) {
    
    arr.sort((a,b)=> a-b)
    
    let result = []
    let minNum = Infinity
    
    for(let i = 0; i < arr.length - 1; i++){
        let diff = arr[i+1] - arr[i]
        minNum = Math.min(diff, minNum)
    }
    
    for(let i = 0; i < arr.length - 1; i++){
        let diff = arr[i+1] - arr[i]
        if(diff === minNum){
            result.push([arr[i], arr[i+1]])
        }
    }
    return result
};

// optimize: remember to sort array will really optimize approach
// t: log n, s: n