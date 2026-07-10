class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        let ans = [];
        for(let i: number = 0; i < nums.length; i++){
            for(let j: number = i+1; j <= nums.length; j++){
                const sum = nums[i] + nums[j]
                if(sum === target){
                    ans.push(i,j)
                    break;
                }
            }
        }
        return ans
    }
}
