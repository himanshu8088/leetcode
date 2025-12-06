function search(nums: number[], target: number): number {
    let left = 0;
    let right = nums.length-1;
    while(left<=right){
        const mid = Math.floor((left + right) / 2);
        if(target==nums[mid]){
            return mid;
        }

        // Left sorted portion
        if(nums[left]<=nums[mid]){
            if(target>nums[mid] || target<nums[left]){
                // Search on right array
                left = mid+1;
            }else{
                // Search on left array
                right = mid-1;
            }
        }
        // Right sorted portion
        else{
            if(target<nums[mid] || target>nums[right]){
                // Search on left array
                right = mid-1;
            }else{
                // Search on right array
                left = mid+1;
            }
        }
    }
    return -1;
};