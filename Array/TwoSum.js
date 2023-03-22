/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

//method 1
var twoSum = function(nums, target) {
    //create a hash to store the values
    let hash = {}
    //loop through the array
    for(let i = 0; i< nums.length; i++) {
        //find the difference we need
        let difference = target - nums[i];
        //check if the difference exists already in the hashmap and return indexes
        if (hash[difference] !== undefined){
            return[i, hash[difference]]
        }
        //else add the element to the hashmap
        hash[nums[i]] = i
    };
};

//method 2
var twoSum = function(nums, target) {
    //loop through the array
    for(let i = 0; i < nums.length; i++){
        //find the difference we need
        let difference = target - nums[i]
        //loop throigh the remaining array
        for(let j = 1;  j < nums.length; j++ ){
            //if the element is equal with difference return indexes
            if (nums[j] === difference){
                return [i, j]
            }
        }
    }
};

