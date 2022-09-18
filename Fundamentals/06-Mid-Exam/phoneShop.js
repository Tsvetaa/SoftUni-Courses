function phoneShop(input) {
    let storage = input.shift().split(", ");

    while (input[0] != "End") {
        let tokens = input.shift().split(",");
        let commandLine = tokens.shift().split(" - ");
        let command = commandLine[0];

        if (command == "Add") {
            let phone = commandLine[1];

            if (storage.indexOf(phone) == -1) {
                storage.push(phone);

            }
        } else if (command == "Remove") {
            let phone = commandLine[1];
            let index = storage.indexOf(phone);
            if (index != -1) {
                storage.splice(index, 1);

            }

        } else if (command == "Bonus phone") {
            let phones = commandLine[1].split(":");
            let oldPhone = phones[0];
            let newPhone = phones[1];

            let index = storage.indexOf(oldPhone);
            if (index != -1) {
                storage.splice(index + 1, 0, newPhone);
            }

        } else if (command == "Last") {
            let phone = commandLine[1];
            let index = storage.indexOf(phone);
            if (index != -1) {
                storage.splice(index, 1);
                storage.push(phone);
            }

        }

    }

    console.log(storage.join(", "));

}




phoneShop(["SamsungA50, MotorolaG5, IphoneSE",
    "Add - Iphone10",
    "Remove - IphoneSE",
    "End"])
phoneShop(["HuaweiP20, XiaomiNote",
    "Remove - Samsung",
    "Bonus phone - XiaomiNote:Iphone5",
    "End"])

phoneShop(["SamsungA50, MotorolaG5, HuaweiP10",
    "Last - SamsungA50",
    "Add - MotorolaG5",
    "End"])