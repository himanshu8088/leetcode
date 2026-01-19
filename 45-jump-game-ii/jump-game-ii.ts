function jump(nums: number[]): number {
    const n = nums.length;
    if (n <= 1) return 0;

    let left = 0;
    let right = 0;
    let jumps = 0;

    // We continue as long as the current window doesn't reach the last index
    while (right < n - 1) {
        let farthest = 0;

        // Explore the current window [left, right] to find the next level's boundary
        for (let i = left; i <= right; i++) {
            farthest = Math.max(farthest, i + nums[i]);
        }

        // Transition: The new window starts after the old one 
        // and ends at the farthest point we found.
        left = right + 1;
        right = farthest;
        jumps++;
    }

    return jumps;
}