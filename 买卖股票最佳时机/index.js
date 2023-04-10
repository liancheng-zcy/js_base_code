/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let total = 0;
    for (let i = 0; i < prices.length - 1; i++) {
        if (prices[i+1]>prices[i]) {
            total+=prices[i+1]-prices[i];
        }
    }
    return total;
  
};