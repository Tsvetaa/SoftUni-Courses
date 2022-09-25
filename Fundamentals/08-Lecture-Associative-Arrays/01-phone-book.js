function phonebook(input) {
    let result = {};
    
    for (let line of input) {
        let tokens = line.split(" ");
        let name = tokens[0];
        let phone = tokens[1];

        result[name] = phone; 
    }

    for (let name in result) {
        console.log(`${name} -> ${result[name]}`);
    }
}

phonebook(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344']
);

function phonebookMap(input) {
    let result = new Map();

    for (let line of input) {
        let [name, phone] = line.split(" ");
        result.set(name, phone);
    }

    /*
    for (let key of result.keys()) {
        console.log(key, "->", result.get(key));
    }
    */ 

    /*
    for (let [name, phone] of result.entries()) {
        console.log(name, "->", phone);
    }
    */

    for (let [name, phone] of result) {
        console.log(name, "->", phone);
    }
}


phonebookMap(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344']
);






