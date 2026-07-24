/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    nums.sort((a,b) => a-b);
    const set = [...new Set(nums)];
    if(set.length < nums.length){
        return true; 
    }
    else{
        return false ; 
    }
};