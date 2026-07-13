class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const res = [];
        const count = new Map<number, number>();
        for (const num of nums) {
            count.set(num, (count.get(num) || 0) + 1);
        }
        let bucket: Array<Array<number>> = Array.from({ length: nums.length + 1 }, () => []);
        for (const [num, freq] of count) {
            bucket[freq].push(num);
        }
        for (let i = bucket.length - 1; i >= 0; i--) {
            for (const num of bucket[i]) {
                res.push(num);
                if (res.length === k) {
                    return res;
                }
            }
        }
        return res;
    }
}
