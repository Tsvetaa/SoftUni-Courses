let myMap = new Map();

myMap.set("a5", 15);
myMap.set("b8", 13);
myMap.set("b10", 5);


console.log(myMap);
console.log(myMap.size);


console.log(myMap.get("b8"));
console.log(myMap.has("b8"));


myMap.delete("b8");
console.log(myMap.get("b8"));
console.log(myMap.has("b8"));


console.log(myMap.entries());


let keys = myMap.keys();
for (let key of keys) {
    console.log(key);
}
