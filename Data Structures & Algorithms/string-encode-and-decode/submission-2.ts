class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        let enc: string = "";
        for (const word of strs) {
            enc += word.length + "#" + word;
        }
        return enc;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        const res: string[] = [];
        let i: number = 0;
        while (i < str.length) {
            let j: number = str.indexOf("#", i);
            let length: number = Number(str.substring(i, j));
            let start: number = j + 1;
            let end: number = start + length;
            res.push(str.substring(start, end));
            i = end;
        }
        return res
    }
}
