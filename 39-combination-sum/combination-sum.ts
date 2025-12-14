function combinationSum(candidates: number[], target: number): number[][] {
    const results: number[][] = [];

    /**
     * @param index The starting index to consider in the candidates array.
     * @param currentCombination The combination built so far (list of numbers).
     * @param currentSum The sum of numbers in the currentCombination.
     */
    function backtrack(index: number, currentCombination: number[], currentSum: number): void {
        // --- Base Case 1: Solution Found ---
        if (currentSum === target) {
            // Found a valid combination. Push a *copy* of the combination to results.
            results.push([...currentCombination]);
            return;
        }

        // --- Base Case 2: Pruning (Exceeds Target or Used All Candidates) ---
        if (currentSum > target || index >= candidates.length) {
            return;
        }

        // --- Recursive Step: Include candidates[index] ---

        // 1. Choose (Include candidates[index] in the current combination)
        const candidate = candidates[index];
        currentCombination.push(candidate);

        // 2. Explore (Recurse: Keep the index the same, as we can use the *same* number again)
        backtrack(index, currentCombination, currentSum + candidate);

        // 3. Unchoose (Backtrack: Remove candidates[index] to prepare for the next branch)
        currentCombination.pop();


        // --- Recursive Step: Exclude candidates[index] ---

        // Explore (Recurse: Move to the *next* candidate, index + 1)
        // This ensures we don't generate duplicate combinations that differ only by the order of elements.
        backtrack(index + 1, currentCombination, currentSum);
    }

    // Start the DFS from the first candidate (index 0) with an empty combination and a sum of 0.
    backtrack(0, [], 0);

    return results;
}