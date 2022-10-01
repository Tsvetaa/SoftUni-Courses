function countStringOccurrences(text, word) {
    let count = 0;
    let arr = text.split(" ");
    for(let element of arr) {
        if(element == word) {
            count++
        }
    }
    console.log(count);
}
countStringOccurrences('This is a word and it also is a sentence','is');


function countStringOccurrencesTwo(text, word) {
    
    let arr = text.split(" ");

    let count = arr.filter(x => x == word);
    console.log(count.length);
}
countStringOccurrencesTwo('This is a word and it also is a sentence','is');


