class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {
        const res: number[][] = [];
        nums.sort((a, b) => a - b);
        for (let i = 0; i < nums.length - 2; i++) {
            let left = i + 1,
                right = nums.length - 1;
            if (i > 0 && nums[i] === nums[i - 1]) {
                continue;
            }
            while (left < right) {
                if (nums[left] + nums[right] + nums[i] === 0) {
                    res.push([nums[i], nums[left], nums[right]]);
                    left++;
                    right--;
                    while (left < right && nums[left] === nums[left - 1]) {
                        left++;
                    }
                    while (left < right && nums[right] === nums[right + 1]) {
                        right--;
                    }
                } else if (nums[left] + nums[right] < -nums[i]) {
                    left++;
                } else {
                    right--;
                }
            }
        }
        return res
    }
}
