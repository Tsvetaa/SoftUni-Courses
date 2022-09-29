function wordTraker(input) {
    let result = {};

    let whatWeSearch = input.shift().split(" ");
    for (let word of whatWeSearch) {
        result[word] = 0;
    }
   
    for (let wordTwo of input) {
        if (result.hasOwnProperty(wordTwo)) {
            result[wordTwo]++;
        }
    }

    let sorted = Object.entries(result);
    sorted.sort((a, b) => b[1] - a[1]);
    for (let [word, count] of sorted) {
        console.log(word, "-", count);
    }

}

wordTraker([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurances', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
]);
console.log("---------------");
wordTraker([
    'is the',
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence']
);