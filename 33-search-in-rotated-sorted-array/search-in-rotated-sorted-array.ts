function search(nums: number[], target: number): number {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {        
        const mid = Math.floor((left + right) / 2);

        if (target === nums[mid]) {
            return mid;
        }

        // Check if the Left portion is sorted
        if (nums[left] <= nums[mid]) {
            // If target is within the bounds of the sorted left portion
            if (target >= nums[left] && target < nums[mid]) {
                right = mid - 1; // Target is in the left
            } else {
                left = mid + 1;  // Target is in the right
            }
        }
        // Otherwise, the Right portion must be sorted
        else {
            // If target is within the bounds of the sorted right portion
            if (target > nums[mid] && target <= nums[right]) {
                left = mid + 1;  // Target is in the right
            } else {
                right = mid - 1; // Target is in the left
            }
        }
    }

    return -1;
};