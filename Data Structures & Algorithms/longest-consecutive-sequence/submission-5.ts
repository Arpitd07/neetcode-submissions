class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        const n = new Set<number>(nums);
        // console.log(n)
        let largest = 1;
        if(nums.length === 0){
            largest = 0
        }
        for (const num of nums) {
            if (!n.has(num - 1)) {
                let start = num;
                let len = 1;
                while (n.has(start + 1)) {
                    len++;
                    start++;
                }
                largest = Math.max(largest, len);
            }
        }
        return largest;
    }
}
