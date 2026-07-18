class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let res: number = 0
        let minPrice: number = prices[0]
        for(let i = 0; i < prices.length; i++){
            if(prices[i] <= minPrice){
                minPrice = prices[i]
            }
            const profit = prices[i] - minPrice
            res = Math.max(res, profit)
        }
        return res
    }
}
