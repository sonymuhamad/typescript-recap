export function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    const nums = [...nums1, ...nums2]

    nums.sort((a,b)=>{
        return a - b
    })

    // middle of the array
    if (nums.length % 2 === 0){
        const num1 = nums[(nums.length / 2) - 1]
        const num2 = nums[(nums.length / 2)]

        return (num1! + num2!) / 2
    }else{
        return nums[(nums.length / 2) - 0.5]!
    }
};