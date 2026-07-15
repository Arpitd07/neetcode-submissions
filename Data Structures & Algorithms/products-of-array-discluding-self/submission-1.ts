class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        const output: number[] = [];
        let l: number = 1;
        let r: number = 1;
        output.push(1);
        for (let i = 1; i < nums.length; i++) {
            l *= nums[i - 1];
            output.push(l);
        }
        for (let j = nums.length - 2; j >= 0; j--) {
            r *= nums[j + 1];
            output[j] *= r;
        }
        return output;
    }
}
