function maxProfit(prices: number[]): number {
    let maxProfit = 0;
    let buyPrice = prices[0];
    for (let i = 0; i < prices.length; i++) {
        maxProfit = Math.max(maxProfit, prices[i] - buyPrice);
        buyPrice = Math.min(buyPrice, prices[i]);
    }
    return maxProfit;
};