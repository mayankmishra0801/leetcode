function finalPrices(prices: number[]): number[] {
    // Initialize the length of the prices array to avoid recomputation.
    const lengthOfPrices = prices.length;

    // Initialize the result array to store the final discounted prices.
    const discountedPrices = new Array(lengthOfPrices);

    // Initialize a stack to keep track of prices from the end to start.
    const priceStack: number[] = [];

    // Iterate over the prices array from the end to the beginning.
    for (let i = lengthOfPrices - 1; i >= 0; i--) {
        // Store the current price for readability.
        const currentPrice = prices[i];

        // Check prices in the stack; if any price is greater than the current price,
        // it cannot be a discount for the current price, so remove it.
        while (priceStack.length !== 0 && priceStack[priceStack.length - 1] > currentPrice) {
            priceStack.pop();
        }

        // Calculate the discounted price for the current item.
        // If the stack is empty, no discount is applied (hence the nullish coalescing operator ?? is used).
        discountedPrices[i] = currentPrice - (priceStack[priceStack.length - 1] ?? 0);

        // Add the current price to the stack for possible future discounts.
        priceStack.push(currentPrice);
    }

    // Return the array of discounted prices.
    return discountedPrices;
}
