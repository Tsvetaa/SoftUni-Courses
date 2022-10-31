function softUniBar(input) {
    let sum = 0;

    for (let line of input) {
        if (line == 'end of shift') {
            console.log(`Total income: ${sum.toFixed(2)}`);
        }
        let regex = /%(?<customer>[A-Z][a-z]+)%[^|$%.]*<(?<product>\w+)>[^|$%.]*\|(?<quantity>\d+)\|[^|$%.]*?(?<price>[-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?)\$/gm
        let result = regex.exec(line);
        if (result) {
            let totalPrice = +result.groups.quantity * +result.groups.price;
            console.log(`${result.groups.customer}: ${result.groups.product} - ${totalPrice.toFixed(2)}`)
            sum += totalPrice;
        }
    }
}

softUniBar(['%George%<Croissant>|2|10.3$',
'%Peter%<Gum>|1|1.3$',
'%Maria%<Cola>|1|2.4$',
'end of shift']
);

softUniBar(['%InvalidName%<Croissant>|2|10.3$',
'%Peter%<Gum>1.3$',
'%Maria%<Cola>|1|2.4',
'%Valid%<Valid>valid|10|valid20$',
'end of shift']

);














