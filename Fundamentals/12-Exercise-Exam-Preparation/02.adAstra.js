function adAstra(input) {
    let text = input[0];
    let pattern = /(\||#)(?<name>[A-Za-z\s]+)\1(?<date>\d{2}\/\d{2}\/\d{2})\1(?<cal>\d+)\1/g;
    let match = pattern.exec(text);
    let list = [];
    let totalCal = 0;

    while (match != null) {
        totalCal += Number(match.groups.cal);
        let product = new Object();
        product.name = match.groups.name;
        product.date = match.groups.date;
        product.cal = match.groups.cal;
        list.push(product);

        match = pattern.exec(text);
    }
    let days = Math.floor(totalCal / 2000);
    console.log(`You have food to last you for: ${days} days!`);

    for (let element of list) {
        console.log(`Item: ${element.name}, Best before: ${element.date}, Nutrition: ${element.cal}`);
    }
}

adAstra([
    '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'
]);
console.log("--------------");
adAstra(['$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|']);
console.log("--------------");
adAstra(['Hello|#Invalid food#19/03/20#450|$5*(@']);