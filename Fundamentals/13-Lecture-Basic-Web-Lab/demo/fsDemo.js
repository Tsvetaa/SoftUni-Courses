let fs = require('fs');

fs.writeFileSync('./13-Lecture-Basic-Web-Lab/demo/test.txt', "Crating my file with build in function" );

let data = fs.readFileSync('./test.txt');
console.log(data.toString());

let myData = [10, 20, 30]; 

fs.writeFileSync('./13-Lecture-Basic-Web-Lab/demo/data.json', JSON.stringify(myData));