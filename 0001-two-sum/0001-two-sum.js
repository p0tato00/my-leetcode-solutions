/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let hashmap = []
    for (i in nums) {
        complement = target - nums[i]
        if (complement in hashmap) {
            return [hashmap[complement], i]
        }
        hashmap[nums[i]] = i
    }
    return hashmap
};