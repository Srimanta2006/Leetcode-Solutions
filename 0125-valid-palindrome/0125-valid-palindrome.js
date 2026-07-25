/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let res = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

    return res === res.split("").reverse().join("");
};