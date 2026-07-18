class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        let res = 0;
        for(let i = 0; i < heights.length; i++){
            for(let j = i+1; j < heights.length; j++){
                let amt = (j-i)*Math.min(heights[i],heights[j])
                res = Math.max(res, amt)
            }
        }
        return res        
    }
}
