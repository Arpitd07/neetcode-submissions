class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const res = [];
        const count = new Map<number, number>();
        // nums.sort((a, b) => a - b);
        for (const num of nums) {
            count.set(num, (count.get(num) || 0) + 1);
        }
        const arr = Array.from(count);
        arr.sort((a, b) => b[1] - a[1]);
        for(let i = 0; i < k; i++){
            res.push(arr[i][0])
        }
        return res;
    }
}
