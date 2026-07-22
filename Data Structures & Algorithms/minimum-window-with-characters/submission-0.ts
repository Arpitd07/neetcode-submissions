class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s: string, t: string): string {
        const need = new Map<string, number>()
        const window = new Map<string, number>()
        let left = 0
        let have = 0;
        for (let th of t) {
            need.set(th, (need.get(th) || 0) + 1)
        }
        let needCount = need.size

        let minLength = Infinity
        let startIndex = 0
        for (let right = 0; right < s.length; right++) {
            const ch = s[right]
            window.set(ch, (window.get(ch) || 0) + 1)
            if(need.has(ch) && window.get(ch) === need.get(ch)) {
                have++
            }
            while (have === needCount) {
                if(right - left + 1 < minLength){
                    minLength = right - left + 1
                    startIndex = left
                }
                const leftChar = s[left]
                window.set(leftChar, window.get(leftChar)! - 1);
                if (need.has(leftChar) && window.get(leftChar)! < need.get(leftChar)!) {
                    have--;
                }
                left++;
            }
        }
        return minLength === Infinity ? '' : s.substring(startIndex, startIndex + minLength)
    }
}

