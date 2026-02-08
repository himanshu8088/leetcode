// Space Complexity - O(n)
function minPathSum(grid: number[][]): number {
    const sum: number[] = [];
    const rows = grid.length;
    const cols = grid[0].length;
    sum[0] = grid[0][0];
    for(let j=1; j<cols; j++){
        sum[j] = grid[0][j] + sum[j-1];
    }

    for(let i=1; i<rows; i++){
        sum[0] = grid[i][0] + sum[0];
        for(let j=1; j<cols; j++){
            sum[j] = grid[i][j] + Math.min(sum[j], sum[j-1]);
        }
    }

    return sum[cols-1];
}

/*
// Top down - Space Complexity - O(n*m)
function minPathSum(grid: number[][]): number {
    const sum: number[][] = [];
    const rows = grid.length;
    const cols = grid[0].length;
    for(let i=0; i<rows; i++){
        sum[i] = [];                
    }

    sum[0][0] = grid[0][0];

    for(let j=1; j<cols; j++){
        sum[0][j] = grid[0][j]+sum[0][j-1];
    }

    for(let i=1; i<rows; i++){
        sum[i][0] = grid[i][0]+sum[i-1][0];
    }
    
    for(let i=1; i<rows; i++){
        for(let j=1; j<cols; j++){
            sum[i][j] = grid[i][j] + Math.min(sum[i][j-1], sum[i-1][j]);
        }
    }

    return sum[rows-1][cols-1];
}
*/

/* Bottop Up
function minPathSum(grid: number[][]): number {
   const pathSum: number[][] = [];
   const rows = grid.length;
   const cols = grid[0].length;

   // 1. Initialize the 2D array with an extra row and column for padding
   // We use rows + 1 and cols + 1 to prevent "undefined" errors during the min check
   for (let i = 0; i <= rows; i++) {
        pathSum[i] = [];
        for (let j = 0; j <= cols; j++) {
            pathSum[i][j] = Infinity; 
        }
   }

   // 2. The "Entry Point" 
   // We set the cell directly below the bottom-right destination to 0
   pathSum[rows][cols - 1] = 0;

   // 3. The DP Calculation (Backwards from bottom-right)
   for (let i = rows - 1; i >= 0; i--) {
        for (let j = cols - 1; j >= 0; j--) {
            // Correct logic: current cost + min of path to the right or path below
            pathSum[i][j] = grid[i][j] + Math.min(pathSum[i + 1][j], pathSum[i][j + 1]);
        }
   }

   return pathSum[0][0];
}

*/