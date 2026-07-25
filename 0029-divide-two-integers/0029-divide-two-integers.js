/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    const MAX = 2147483647;
    const MIN = -2147483648;
    if(dividend === MIN && divisor === -1){
        return MAX; 
    }
    return Math.trunc(dividend/divisor);
};