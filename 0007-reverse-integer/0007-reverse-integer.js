/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
        let reversed= 0;
    let num= Math.abs(x);
    while(num > 0){
        const lastDigit = num % 10;
        reversed = (reversed*10) + lastDigit;
        num = Math.floor(num/10);
        if(reversed.length >7){
        return 0;
    }
    }
    if(x<0){
        reversed = reversed * -1;
    }
    if (reversed < -(2 ** 31) || reversed > 2 ** 31 - 1 ){
        return 0;
    }
    
    return reversed;
};