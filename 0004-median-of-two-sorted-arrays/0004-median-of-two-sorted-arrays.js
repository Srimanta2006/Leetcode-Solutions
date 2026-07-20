/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    let nums3 = nums1.concat(nums2).sort((a,b) => a-b);
    let mid = Math.floor(nums3.length / 2);
    if(nums3.length % 2 == 0){
        return (nums3[mid-1] + nums3[mid]) / 2;
    }
    return nums3[mid];
};