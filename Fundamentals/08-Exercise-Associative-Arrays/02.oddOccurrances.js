 function oddOccurrances(input) {
    let words = input.split(" ");
    let result = {};

    for (let word of words) {
        word = word.toLocaleLowerCase();
        if(result.hasOwnProperty(word)) {
            result[word]++;
        } else { 
            result[word] = 1; 
        }
    }
    let filtered = Object.entries(result).filter(([word,count]) => {
        if (count % 2 == 1) {
            return true; 
        } else {
            return false;
        }
    });

    console.log(filtered.map(entry => entry[0]).join(" "));
}

oddOccurrances('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');

function oddOccurrancesTwo(input) {
    let words = input.split(" ");
    let result = {};

    for (let word of words) {
        word = word.toLocaleLowerCase();
        if(result.hasOwnProperty(word)) {
            result[word]++;
        } else { 
            result[word] = 1; 
        }
    }
    let filtered = Object
        .entries(result)
        .filter(([word,count]) => count % 2 == 1)
        .map(entry => entry[0])
        .join(" ");

    console.log(filtered);
}

oddOccurrancesTwo('Cake IS SWEET is Soft CAKE sweet Food');


function oddOccurrancesThree(input) {
    let words = input.split(" ");
    let result = {};

    for (let word of words) {
        word = word.toLocaleLowerCase();
        if(result.hasOwnProperty(word)) {
            result[word]++;
        } else { 
            result[word] = 1; 
        }
    }
    let output = [];

    for (let word in result) {
        if(result[word] % 2 == 1) {
            output.push(word);
        }
    }

    console.log(output.join(" "));
}

oddOccurrancesTwo('Cake IS SWEET is Soft CAKE sweet Food');