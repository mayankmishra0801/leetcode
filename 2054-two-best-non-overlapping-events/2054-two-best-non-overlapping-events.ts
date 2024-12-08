function maxTwoEvents(events: number[][]): number {
    // Sort events based on their starting time
    events.sort((a, b) => a[0] - b[0]);

    // Number of events
    const n: number = events.length;

    // Future max value array: stores the max value for events from index i to n
    const futureMax: number[] = new Array(n + 1).fill(0);

    // Build futureMax array from the end towards the start (in reverse direction)
    for (let i = n - 1; i >= 0; --i) {
        futureMax[i] = Math.max(futureMax[i + 1], events[i][2]);
    }

    // Initialize the answer to zero
    let answer: number = 0;

    // Iterate over all events
    events.forEach((event) => {
        // Value of the current event
        let value = event[2];

        // Binary search boundaries
        let left: number = 0, right: number = n;

        // Perform a binary search to find the smallest index of an event that starts
        // after the current event ends
        while (left < right) {
            let mid = Math.floor((left + right) / 2);
            if (events[mid][0] > event[1]) { // event[mid] start time is after the current event's end time
                right = mid; // Search in the left half
            } else {
                left = mid + 1; // Search in the right half
            }
        }

        // If there is a future event that does not overlap with the current event
        if (left < n) {
            value += futureMax[left]; // Add max future event value to the current event's value
        }

        // Update the maximum value answer with the max value of a single event or
        // the current event paired with a max future event
        answer = Math.max(answer, value);
    });

    // Return the maximum value obtainable by attending at most two non-overlapping events
    return answer;
}