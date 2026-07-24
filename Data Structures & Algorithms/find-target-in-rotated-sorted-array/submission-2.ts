class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums: number[], target: number): number {
        let left = 0
        let right = nums.length - 1
        while (left <= right) {
            const mid = left + Math.floor((right - left) / 2)
            let res = nums[mid]
            if (res === target) {
                return mid
            }
            if (nums[left] <= res) {
                if (nums[left] <= target && target < res) {
                    right = mid - 1
                } else {
                    left = mid + 1
                }
            }
            else {
                if (res < target && target <= nums[right]) {
                    left = mid + 1
                } else {
                    right = mid - 1
                }
            }
        }
        return -1
    }
}