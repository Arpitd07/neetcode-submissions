class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums: number[], target: number): number[][] {
        let ans: number[][] = []
        function backTrack(startIndex: number, remaining: number, current: number[]) {
            if (remaining === 0) {
                ans.push([...current])
                return 
            }
            if (remaining < 0) {
                return 
            }
            for (let i = startIndex; i < nums.length; i++) {
                current.push(nums[i])
                backTrack(i, remaining - nums[i], current)
                current.pop()

            }
            return ans
        }
        backTrack(0, target, [])
        return ans
    }
}
