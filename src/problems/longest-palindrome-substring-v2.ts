export function longestPalindromeV2(s: string): string {
    if (s.length < 2){
        return s
    }

    let start = 0;
    let end = 0

    for (let i = 0; i < s.length; i++){
        // odd length palindrome, eg: aba
        const [len1,left1,right1] = expandFromCenter(s,i,i)

        // even length palindrome, eg bb
        const [len2,left2,right2] = expandFromCenter(s,i,i+1)

        if (len1 > (end - start + 1) || len2 > (end - start + 1)){
            if (len1 > len2){
                start = left1
                end = right1
            }else{
                start = left2
                end = right2
            }
        }
    }

    return s.substring(start,end + 1)
};

function expandFromCenter(s:string,left :number,right:number):[number ,number,number]{
    let loop = 0

    while(left >=0 && right < s.length && s[left] === s[right]){
        left--
        right++

        if (loop === 0){
            loop = 1
        }
    }

    const length = right - left - 1

    return [length,left + loop,right - loop]
}