function incrementV(value) {
    value += 1;
}

let num = 10; 
incrementV(num);
console.log(num);


function incrementR(ref) {
    ref.number += 1; 
}

let myObj = {
    number: 5
};

incrementR(myObj); 
console.log(myObj);