/**
 * @param {number[]} nums
 * @return {boolean}
 */

let nums = [1,2,3,1]

var containsDuplicate = function(nums) {
    //create a hashmap to store the values and the frequency
    let hash = {}
    //loop through the array
    for( let i = 0; i < nums.length; i++) {
        //check if the hash[nums[i]] exists. initialize with one if exists else add one to the frequency
        hash[nums[i]] ===undefined ? hash[nums[i]] = 1 : hash[nums[i]] +=1
        //if the frequency is greater or equal with 2 return true
        if(hash[nums[i]] >= 2) return true
    }
    return false
};