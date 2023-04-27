
const arr = ["a","quick","brown","fox"]

const nums = [2,3,4];
const nums2 = [1,12,34,55,56]
const localArr = nums.slice()
 nums2.splice(1,0,...nums)
// console.log(nums2 ,localArr)