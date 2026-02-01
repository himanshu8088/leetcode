function getRow(rowIndex: number): number[] {
    // Single row can hold value for each rowIndex
    const row = new Array(rowIndex+1).fill(1);
    // Iterating over each row
    for(let i=2; i<=rowIndex; i++){
        // Overwriting values from backward in each row
        for(let j=i-1; j>0; j--){            
            row[j] = row[j]+row[j-1];
        }
    }
    return row;
}