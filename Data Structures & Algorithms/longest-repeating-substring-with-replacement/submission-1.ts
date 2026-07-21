class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s: string, k: number): number {
        let left = 0;
        let res = 0;
        let freq = new Map<string, number>();
        let maxFreq = 0
        for (let right = 0; right < s.length; right++) {
            const ch = s[right]
            freq.set(ch, (freq.get(ch) || 0) + 1)
            maxFreq = Math.max(maxFreq, freq.get(ch)!)
            while ((right - left + 1) - maxFreq > k) {
                freq.set(s[left], freq.get(s[left])! - 1);
                left++;
            }
            res = Math.max(res, right - left + 1);
        }
        return res
    }
}
