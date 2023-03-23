/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */

let intervals = [[1, 3], [6, 9]], newInterval = [2, 5]

var insert = function (intervals, newInterval) {
    //set teh start and end variables
    const start = 0;
    const end = 1;
    //set the pointers for the new interval values
    let s = newInterval[start]
    let e = newInterval[end]

    //initialize tqo arrays to keep track of the intervals
    let left = []
    let right = []

    for (let curent of intervals) {
        //if the current interval's end is greater than the new interval start
        //we will push the interval to the left
        if (curent[end] < s) {
            left.push(curent)
        } else if (curent[start] > e) {
            //if the current interval's start is greater than the new interval end
            //we will push the interval to the right
            right.push(curent)
        } else {
            //else the start of the new interval will be the minimum value between the current start and new interval start
            s = Math.min(s, curent[start])
            //and the end of the new interval will be the maximum value between the current end and new interval end
            e = Math.max(e, curent[end])
        }
    }

    //concatenate the arrays
    return [...left, [s, e], ...right]

};