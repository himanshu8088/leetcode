function climbStairs(n: number): number {
    const dp = [];
    for(let i=0; i<n; i++){
        dp[i] = -1;
    }
    return climb(0, n, dp);
};

function climb(stair: number, n: number, dp: number[]){
    if(stair === n) {
        return 1;
    }
    if(stair > n){
        return 0;
    }  
    if(dp[stair] !== -1){
        return dp[stair];
    }
    
    dp[stair] = climb(stair+1, n, dp) + climb(stair+2, n, dp);
    return dp[stair];
}