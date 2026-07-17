class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        const str: string = s.toLowerCase().replace(/[^a-z0-9]/g, "");
        let left = 0;
        let right = str.length - 1
        while(left <= right){
            if(str.charAt(left) !== str.charAt(right)){
                return false
            }
            left++
            right--
        }
        return true
    }
}
