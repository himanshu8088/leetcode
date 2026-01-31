function getRow(rowIndex: number): number[] {
    const m: number[][] = [];
    for(let i=0; i<=rowIndex; i++){
        m[i] = [];
        for(let j=0; j<=i; j++){
            if(i===j || j===0){
                m[i][j] = 1;
            }else{
                m[i][j] = m[i-1][j-1] + m[i-1][j];
            }
        }
    }

    return m[rowIndex];
};