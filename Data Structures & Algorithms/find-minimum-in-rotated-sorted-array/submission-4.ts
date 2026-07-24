class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums: number[]): number {
        let left = 0
        let right = nums.length - 1
        if (nums.length === 1) {
            return nums[0]
        }
        while (left < right) {
            const mid = left + Math.floor((right - left) / 2)
            let res = nums[mid]

            if (res > nums[right]) {
                left = mid + 1
            }
            else {
                right = mid
            }
        }
        return nums[left]
    }
}
