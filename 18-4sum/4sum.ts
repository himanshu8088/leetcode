function fourSum(nums: number[], target: number): number[][] {
    nums.sort((a, b) => a-b);
    const result: number[][] = []
    for(let i=0; i<nums.length; i++){
        if(i>0 && nums[i] === nums[i-1]){
            continue;
        }
        for(let j=i+1; j<nums.length; j++){
            if(j>i+1 && nums[j]===nums[j-1]){
                continue;
            }

            let l = j+1;
            let r = nums.length-1;
            while(l<r){
                const sum = nums[i]+nums[j]+nums[l]+nums[r];
                if(sum === target){
                    result.push([nums[i], nums[j], nums[l], nums[r]]);
                    while(l < r && nums[l] === nums[l+1]){
                        l++;
                    }
                    while(l < r && nums[r] === nums[r-1]){
                        r--;
                    }
                    l++;
                    r--;
                }else if(sum > target){
                    r--;
                }else{
                    l++;
                }
            }
        }              
    }
    return result;

    /* Brute Force - O(n3)

    const result = new Set<string>();
    nums.sort((a, b) => a-b);
    for(let i=0; i<nums.length; i++){
        for(let j=i+1; j<nums.length; j++){
            for(let k=j+1; k<nums.length; k++){
                for(let m=k+1; m<nums.length; m++){
                    const sum = nums[i]+nums[j]+nums[k]+nums[m];
                    if(sum===target){
                        const quad = [nums[i], nums[j], nums[k], nums[m]]
                        result.add(quad.join(","));
                    }
                }
            }
        }
    }
    return [...result].map(item => item.split(",").map( x => Number(x)));
    */
};