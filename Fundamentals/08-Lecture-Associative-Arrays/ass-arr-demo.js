let myKey = "delta-delta";

let myAssocArr = {
    aplha: 1,
    beta: 2,
    gamma: 3,
    [myKey]: 10
}

console.log(myAssocArr.aplha);
console.log(myAssocArr[myKey]);

for (let key in myAssocArr) {
    console.log(key, myAssocArr[key]);
}

for(let key of Object.keys(myAssocArr)) {
    console.log(key);
}


console.log(myAssocArr.hasOwnProperty(myKey));
console.log(myAssocArr[myKey]);
delete myAssocArr[myKey];
console.log(myAssocArr.hasOwnProperty(myKey));
console.log(myAssocArr[myKey]);

for (let [key, value] of Object.entries(myAssocArr)) {
    console.log(key, value);
}