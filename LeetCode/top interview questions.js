// 1. Two Sum

    // brute force
var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] == target) {
                return [i, j]
            }
        }
    }
};
    // Two-pass Hash Table (JS object)
var twoSum = function(nums, target) {
    let indices = {};
    
    nums.forEach((item, index)=> {
        indices[item] = index
    })
    
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        if (indices[complement] != undefined && indices[complement] != i) {
            return [i, indices[complement]]
        }
    }
};
    // One-pass Hash Table
var twoSum = function(nums, target) {
    const indices = new Map();

    for (let index = 0; index < nums.length; index++) {
        const complement = target - nums[index];

        if (indices.has(complement)) {
            return [indices.get(complement), index]
        }

        indices.set(nums[index], index)
    }
};