function gladiatorInventory(input) {
    let inventory = input.shift().split(" ");


    for (let currentLine of input) {
        let commandLine = currentLine.split(" ");
        let command = commandLine[0];
        let equipment = commandLine[1];

        if (command == "Buy") {
            let index = (inventory.indexOf(equipment));
            if (index == -1) {
                inventory.push(equipment);
            }

        } else if (command == "Trash") {
            let index = (inventory.indexOf(equipment));
            if (index != -1) {
                inventory.splice(index, 1);
            }
        } else if (command == "Repair") {
            let index = (inventory.indexOf(equipment));
            if (index != -1) {
                inventory.splice(index, 1);
                inventory.push(equipment);
            }
        } else if (command == "Upgrade") {
            let upgradeSplit = equipment.split("-");
            let object = upgradeSplit[0];
            let index = (inventory.indexOf(object));
            let upgrade = upgradeSplit[1];
            if (index != -1) {
                inventory.splice(index + 1, 0, `${object}:${upgrade}`);
            }
        }
    }
    console.log(inventory.join(" "));
}

gladiatorInventory(['SWORD Shield Spear',
'Trash Bow',
'Repair Shield',
'Upgrade Helmet-V']
);