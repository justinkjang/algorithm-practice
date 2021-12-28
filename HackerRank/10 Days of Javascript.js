// HR Regular Expressions I
function regexVar() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match a string that starts and ends with the same vowel (i.e., {a, e, i, o, u})
     */
    let re = new RegExp(/^([a|e|i|o|u]).*\1$/);    

    return re;
}