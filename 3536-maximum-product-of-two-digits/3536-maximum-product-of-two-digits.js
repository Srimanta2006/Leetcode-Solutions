/**
 * @param {number} n
 * @return {number}
 */
var maxProduct = function(n) {
    let number = n.toString().split('').sort();
    return number[number.length-1] * number[number.length-2];
};