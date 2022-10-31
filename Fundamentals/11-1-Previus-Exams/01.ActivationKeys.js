function activationKey(input) {

    let commands = {
        Contains,
        Flip,
        Slice
    }

    let rawKey = input.shift();

    while (input[0] != "Generate") {
        let tokens = input.shift().split(">>>");
        let commandName = tokens[0];
        let p1 = tokens[1];
        let p2 = tokens[2];
        let p3 = tokens[3];

        let command = commands[commandName];
        rawKey = command(rawKey, p1, p2, p3);
    }

    if (input[0] == "Generate") {
        console.log("Your activation key is: " + rawKey);
    }

    function Contains(rawKey, substring) {
        let result = rawKey.includes(substring);
        if (result) {
            console.log(`${rawKey} contains ${substring}`);
        } else {
            console.log("Substring not found!");
        }
        return rawKey;
    }

    function Flip(rawKey, p1, startIndex, endIndex) {
        let leftPart = rawKey.substring(0, startIndex);
        let str = rawKey.substring(startIndex, endIndex);
        let rightPart = rawKey.substring(endIndex);

        if (p1 == "Upper") {
            str = str.toUpperCase();
        } else {
            str = str.toLowerCase();
        }
        rawKey = leftPart + str + rightPart;
        console.log(rawKey);
        return rawKey;
    }

    function Slice(rawKey, startIndex, endIndex) {
        let leftPart = rawKey.substring(0, startIndex);
        let rightPart = rawKey.substring(endIndex);

        rawKey = leftPart + rightPart;
        console.log(rawKey);
        return rawKey;
    }

}

activationKey(["abcdefghijklmnopqrstuvwxyz",
    "Slice>>>2>>>6",
    "Flip>>>Upper>>>3>>>14",
    "Flip>>>Lower>>>5>>>7",
    "Contains>>>def",
    "Contains>>>deF",
    "Generate"])

console.log("================="); 

activationKey(["134softsf5ftuni2020rockz42",
"Slice>>>3>>>7",
"Contains>>>-rock",
"Contains>>>-uni-",
"Contains>>>-rocks",
"Flip>>>Upper>>>2>>>8",
"Flip>>>Lower>>>5>>>11",
"Generate"])
