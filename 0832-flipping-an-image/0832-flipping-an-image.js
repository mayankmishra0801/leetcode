/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function(image) {
    const n = image.length;


    for(let row of image){
        let left = 0;
        let right = n-1;

        while(left <= right){
            const temp = row[left] ^ 1;
            row[left] = row[right] ^ 1;
            row[right] = temp;

            left++;
            right--;
        }
    }


    return image;
};