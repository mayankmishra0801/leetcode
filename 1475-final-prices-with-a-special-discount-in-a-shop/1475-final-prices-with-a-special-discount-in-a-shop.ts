function finalPrices(prices: number[]): number[] {
    const lengthOfPrices = prices.length;

    const discountedPrices = new Array(lengthOfPrices);

    const priceStack: number[] = [];

    for (let i = lengthOfPrices - 1; i >= 0; i--) {
        const currentPrice = prices[i];

        while (priceStack.length !== 0 && priceStack[priceStack.length - 1] > currentPrice) {
            priceStack.pop();
        }

        discountedPrices[i] = currentPrice - (priceStack[priceStack.length - 1] ?? 0);

        priceStack.push(currentPrice);
    }

    return discountedPrices;
}
