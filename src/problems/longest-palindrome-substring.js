export function longestPalindrome(s) {
    const arrStr = new Array(s.length).fill("");
    for (let i = 0; i < s.length; i++) {
        let str = "";
        let palindrome = "";
        for (let j = i; j < s.length; j++) {
            str += s[j];
            if (palindrome.length > 0 && str.length < palindrome.length) {
                continue;
            }
            if (isPalindrome(str)) {
                if (str.length > palindrome.length) {
                    palindrome = str;
                }
            }
        }
        arrStr[i] = palindrome;
    }
    let res = "";
    arrStr.forEach((str) => {
        if (str.length > res.length) {
            res = str;
        }
    });
    return res;
}
;
export function isPalindrome(s) {
    let i = 0;
    let j = s.length - 1;
    while (true) {
        if (i >= j) {
            break;
        }
        const currentI = s[i];
        const currentJ = s[j];
        if (currentI != currentJ) {
            return false;
        }
        i++;
        j--;
    }
    return true;
}
//# sourceMappingURL=longest-palindrome-substring.js.map