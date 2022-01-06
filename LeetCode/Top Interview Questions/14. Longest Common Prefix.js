/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    
    let prefix = ''
    
    if (!strs.length) return prefix
    
    for (let i = 0; i < strs[0].length; i++){
        
        let char = strs[0][i]
                
        for( let word = 1; word < strs.length; word++){
            if (strs[word][i] !== char) {
                return prefix
            }
        }
        
        prefix += char
    }
    
};