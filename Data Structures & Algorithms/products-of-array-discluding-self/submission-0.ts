class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        const output: number[] = [];
        const left: number[] = [];
        const right: number[] = [];
        let l: number = 1;
        let r: number = 1;
        left.push(1);
        right[nums.length - 1] = 1;
        for (let i = 1; i < nums.length; i++) {
            l *= nums[i - 1];
            left.push(l);
        }
        for (let j = nums.length - 2; j >= 0; j--) {
            r *= nums[j + 1];
            right[j] = r;
        }
        for (let i = 0; i < nums.length; i++) {
            output[i] = left[i] * right[i];
        }
        return output
    }
}
