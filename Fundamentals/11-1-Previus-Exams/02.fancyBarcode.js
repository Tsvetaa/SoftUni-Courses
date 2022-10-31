function fancyBarcode(input) {
    let count = input.shift();
    let pattern = /@#+(?<product>[A-Z][A-Za-z0-9]{4,}[A-Z])@#+/;
    let groupPattern = /\d/g;
    let validMatch;
    let groupMatch

    for (let barcode of input) {
        if (validMatch = pattern.exec(barcode)) {
            groupMatch = barcode.match(groupPattern);
            if (groupMatch == null) {
                console.log("Product group: 00");
            } else {
                console.log(`Product group: ${groupMatch.join("")}`);
            }
        } else {
            console.log("Invalid barcode");
        }

    }

}

fancyBarcode(["3",
    "@#FreshFisH@#",
    "@###Brea0D@###",
    "@##Che4s6E@##"])

console.log("===========");

fancyBarcode(["6",
    "@###Val1d1teM@###",
    "@#ValidIteM@#",
    "##InvaliDiteM##",
    "@InvalidIteM@",
    "@#Invalid_IteM@#",
    "@#ValiditeM@#"])
