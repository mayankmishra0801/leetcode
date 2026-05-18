/**
 * @param {number[]} arr
 * @return {number}
 */
var minJumps = function(arr) {

    let n = arr.length;

    if (n === 1) return 0;

    let mp = new Map();

    // Store all indices for same values
    for (let i = 0; i < n; i++) {

        if (!mp.has(arr[i])) {
            mp.set(arr[i], []);
        }

        mp.get(arr[i]).push(i);
    }

    let visited = new Array(n).fill(false);

    let queue = [0];
    visited[0] = true;

    let steps = 0;

    while (queue.length > 0) {

        let size = queue.length;

        while (size--) {

            let curr = queue.shift();

            // Reached end
            if (curr === n - 1) {
                return steps;
            }

            let left = curr - 1;
            let right = curr + 1;

            // Left jump
            if (left >= 0 && !visited[left]) {
                visited[left] = true;
                queue.push(left);
            }

            // Right jump
            if (right < n && !visited[right]) {
                visited[right] = true;
                queue.push(right);
            }

            // Same value jumps
            if (mp.has(arr[curr])) {

                for (let idx of mp.get(arr[curr])) {

                    if (!visited[idx]) {
                        visited[idx] = true;
                        queue.push(idx);
                    }
                }

                // Remove to prevent reprocessing
                mp.delete(arr[curr]);
            }
        }

        steps++;
    }

    return -1;
};