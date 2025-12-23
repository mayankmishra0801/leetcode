/**
 * @param {number[][]} events
 * @return {number}
 */
var maxTwoEvents = function(events) {
      events.sort((a, b) => a[0] - b[0]);

    const eventCount = events.length;

    const suffixMax = Array(eventCount + 1).fill(0);

    for (let i = eventCount - 1; i >= 0; i--) {
        suffixMax[i] = Math.max(suffixMax[i + 1], events[i][2]);
    }

    let maxSum = 0;

    for (const [startTime, endTime, value] of events) {
   
        let left = 0;
        let right = eventCount - 1;
        let firstTrueIndex = -1;

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (events[mid][0] > endTime) {
                firstTrueIndex = mid;
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }

        const maxValueAfter = firstTrueIndex !== -1 ? suffixMax[firstTrueIndex] : 0;

        maxSum = Math.max(maxSum, maxValueAfter + value);
    }

    return maxSum;
};