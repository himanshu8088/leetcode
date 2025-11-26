function threeSum(nums: number[]): number[][] {
  nums.sort((a, b) => a - b);
  const result: number[][] = [];

  for(let i=0; i<nums.length; i++){
    if(i>0 && nums[i]===nums[i-1]){
        continue;
    }
    let l = i+1, r = nums.length-1;
    while(l<r){
        const threeSum = nums[i] + nums[l] + nums[r];
        if(threeSum > 0){
            r--;
        }else if(threeSum<0){
            l++;
        }else{
            result[result.length] = [nums[i], nums[l], nums[r]];
            l++;
            while(nums[l]===nums[l-1] && l<r){
                l++;
            }
        }
    }    
  }

  return result;
}
