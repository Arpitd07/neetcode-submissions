class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        let left = 0
        let res = 0;
        let window = new Map<string, number>() 
        for(let right = 0; right < s.length; right++){
            let ch = s[right]
            if(window.has(ch)){
                left = Math.max(left, window.get(ch)!+1)
            }
            window.set(ch, right)
            let len = right - left + 1
            res = Math.max(res, len)
        }
        return res
    }
}
