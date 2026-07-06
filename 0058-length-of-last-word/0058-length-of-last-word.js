/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let splitedWords = s.trim().split(' ');
    let res =splitedWords[splitedWords.length-1].length
    return res;
};