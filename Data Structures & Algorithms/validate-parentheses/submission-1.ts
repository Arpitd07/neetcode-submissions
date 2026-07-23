class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        //"([{}])"
        const stack: string[] = []
        const pair = new Map<string, string>
        pair.set(')', '(')
        pair.set('}', '{')
        pair.set(']', '[')
        for (let ch of s) {
            if (ch === '{' || ch === '(' || ch === '[') {
                stack.push(ch)
            }
            else if (stack.length === 0) {
                return false
            }
            else {
                if (stack.pop() !== pair.get(ch)) {
                    return false
                }
            }
        }
        return stack.length === 0
    }
}
