class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let res: number = 0
        let minPrice: number = prices[0]
        let maxProfit: number = 0
        for(let i = 0; i < prices.length; i++){
            if(prices[i] <= minPrice){
                minPrice = prices[i]
            }
            maxProfit = prices[i] - minPrice
            res = Math.max(res, maxProfit)
        }
        return res
    }
}
