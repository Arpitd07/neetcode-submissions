class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        const str: string = s.toLowerCase().replace(/[^a-z0-9]/g, "");
        const reversed = Array.from(str).reverse().join("");
        console.log(reversed);
        if (str === reversed) {
            return true
        }
        return false
    }
}
