/**
 * @param {number[]} nums
 * @return {number}
 */

let nums = [3,2,3];

var majorityElement = function(nums) {
    //create a hashmap
    let hash = {}
    //calculate half of the elements
    let half = nums.length /2
    for( let i =0; i < nums.length; i++){
        //if the element doesnt exist in the map. add and increase the frequency to 1
        if(hash[nums[i]] === undefined) {
            hash[nums[i]] = 1
        } else {
            //if the element its already in the map, increase the frequency
            hash[nums[i]] +=1
        }
        //if the frequency is greater than the half of the elements return the the value
        if(hash[nums[i]] > half) return nums[i]
    }
};