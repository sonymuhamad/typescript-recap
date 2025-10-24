function twoSum(nums: number[], target: number): number[] {
    for(let i=0; i < nums.length; i++){
        for(let j=i; j<nums.length; j++){
            if (nums[i]!+nums[j]! == target){
                return [i,j]
            }
        }
    }

    return [0,0]
};

 export function twoSumOptimized(nums: number[], target: number): number[] {
    const map = new Map<number,number>()

    let res:Array<number> = [0,0]

    nums.forEach((num,index)=>{
        const sub = target - num

        if (map.has(sub)){
            const result = [map.get(sub)!,index]
        
            res = result

            return
        }

        map.set(num,index)
    })

    return res;
};