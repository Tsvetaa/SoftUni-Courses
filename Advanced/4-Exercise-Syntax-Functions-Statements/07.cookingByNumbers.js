/*
function cooking(num, commad1, command2, command3, command4, command5) {
    num = Number(num);

    let commandList = [commad1, command2, command3, command4, command5];
    let chop = x => x / 2;
    let dice = x => Math.sqrt(x);
    let spice = x => x + 1;
    let bake = x => x * 3;
    let fillet = x => 0.8 * x;

    for (let i = 0; i < commandList.length; i++) {
        switch (commandList[i]) {
            case "chop": num = chop(num);    
                break;
            case "dice": num = dice(num);
                break;
            case "spice": num = spice(num);
                break;
            case "bake": num = bake(num);
                break;
            case "fillet": num = fillet(num);
                break;
        }
        console.log(num);
    }

}
*/


function cookingTwo(num, ...params) {
    num = Number(num);

    let chop = x => x / 2;
    let dice = x => Math.sqrt(x);
    let spice = x => x + 1;
    let bake = x => x * 3;
    let fillet = x => 0.8 * x;

    for (let i = 0; i < params.length; i++) {
        switch (params[i]) {
            case "chop": num = chop(num);    
                break;
            case "dice": num = dice(num);
                break;
            case "spice": num = spice(num);
                break;
            case "bake": num = bake(num);
                break;
            case "fillet": num = fillet(num);
                break;
        }
        console.log(num);
    }

}

cookingTwo('32', 'chop', 'chop', 'chop', 'chop', 'chop');
cookingTwo('9', 'dice', 'spice', 'chop', 'bake', 'fillet');