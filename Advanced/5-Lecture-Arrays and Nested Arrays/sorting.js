const arr = [1, 7, 2, 13, 5];

arr.sort((a, b) => b - a);

const list = ["George", "ann", "Bob"]
list.sort((a, b) => a.localeCompare(b));

console.log(arr);
console.log(list);