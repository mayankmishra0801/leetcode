/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */
var replaceWords = function(dictionary, sentence) {
          const rootSet = new Set(dictionary);
          const words = sentence.split(" ");

          for(let i = 0;i<words.length;i++){
            for(let j = 1;j<=words[i].length;j++){
                const prefix = words[i].substring(0,j);
                if(rootSet.has(prefix)){
                    words[i] = prefix;
                    break;
                }
            }
          } 

          return words.join(" ");
};