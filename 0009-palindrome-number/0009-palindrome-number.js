/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let temp = String(x);
    let check = temp.split('').reverse().join('');
    check = Number(check);
    if(check == temp){
        return true;
    }
    else{
        return false;
    }
};