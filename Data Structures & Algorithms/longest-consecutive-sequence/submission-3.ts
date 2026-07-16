class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        nums.sort((a, b) => a - b);
        console.log(nums);
        let count = 1;
        let longest = 1;
        if (nums.length === 0) {
            return (count = 0);
        }
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] === nums[i + 1]) continue;
            else if (nums[i] + 1 === nums[i + 1]) {
                count++;
                longest = Math.max(longest, count);
            } else {
                count = 1;
            }
        }
        return longest;
    }
}
