class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let res: number = 0
        for(let i = 0; i < prices.length; i++){
            for(let j = i+1; j < prices.length; j++){
                if(prices[i] < prices[j]){
                    let profit = prices[j] - prices[i]
                    res = Math.max(res, profit)
                }
            }
        }
        return res
    }
}
