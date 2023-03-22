/**
 * @param {number[]} prices
 * @return {number}
 */
let prices = [ 7, 1, 5, 3, 6, 4]
        // 7       1     5     6   4
        // left  right
var maxProfit = function(prices) {
    let left = 0; //buy pointer
    let right = 1; // sell pointer
    let maxp = 0;//max profit
    while(right < prices.length) {
        //if the selling prices is greater than the buying prices means we have profit
        if(prices[right] > prices[left]){
            //calculate the actual profit
            let profit = prices[right] - prices[left]
            //compare the actual profit with the max profit and update the maxprofit
            maxp = Math.max(maxp, profit)
        } else {
            //if the selling prices is lower than the buying prices means we dont have profit
            //in this case we will move the left pointer(buy) to the right
            left = right
        }
        right++;
    }
    return maxp;
};
