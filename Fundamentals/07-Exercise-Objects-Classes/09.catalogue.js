/*
function catalogue(input) {
    input.sort();

    let lettersNeeded = [];

    for (let element of input) {
        if (!lettersNeeded.includes(element.charAt(0))) {
            lettersNeeded.push(element.charAt(0));
        }
    }

    for (let letter of lettersNeeded) {
        let section = [];
        while (input[0].includes(letter)) {
            let str = input.shift().split(" :")
            let line = str[0] + (":") + str[1];
            section.push(line);
            
            if (input.length == 0) {
                break;
            }
        }
        console.log(letter);
        console.log(`  ${section.join("\n  ")}`);
    }
}

catalogue([
    'Omlet : 5.4',
    'Shirt : 15',
    'Cake : 59'
]
);
*/

function catalogueTask(input) {
    class Catalouge { 
        constructor(name, price) {
            this.name = name; 
            this.price = price; 
        }
    }

    let productList = [];
    for (let product of input) {
        let [name, price] = product.split(" : ")
        productList.push([name, price]);
        console.log(productList.join(" "));
    
    }

    


}

catalogueTask([
    'Omlet : 5.4',
    'Shirt : 15',
    'Cake : 59'
]
);

