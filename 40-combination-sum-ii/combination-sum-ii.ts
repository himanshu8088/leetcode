function combinationSum2(candidates: number[], target: number): number[][] {
    const result: Set<number[]> = new Set<number[]>;
    candidates.sort();
    function dfs(curr: number, combinations: number[], total: number){
        if(target===total){            
            result.add([...combinations]);
            return;
        }
        if(curr==candidates.length || target<total){
            return;
        }
        combinations.push(candidates[curr]);
        dfs(curr+1, combinations, total+candidates[curr]);
        combinations.pop();
        let next = curr+1;
        while(next<candidates.length && candidates[curr]===candidates[next]){
            next++;
        }        
        dfs(next, combinations, total);
    }

    dfs(0, [], 0);
    return [...result];
};