function dark(arr) {
    let rooms = arr[0].split("|");
    let health = 100;
    let budget = 0;
    let isOver = true;

    for (let i = 0; i < rooms.length; i++) {
        let room = rooms[i].split(" ");

        if (room[0] == "potion") {
            let cure = Number(room[1]);
            if (health < 100) {
                if (health + cure <= 100) {
                    health += cure;
                    console.log(`You healed for ${cure} hp.`);
                    console.log(`Current health: ${health} hp.`);
                } else if (health + cure > 100) {
                    console.log(`You healed for ${100 - health} hp.`);
                    health = 100
                    console.log(`Current health: ${health} hp.`);
                }
            }
        }

        else if (room[0] == "chest") {
            let coins = Number(room[1]);
            budget += coins;
            console.log(`You found ${coins} coins.`);
        } else {
            let monster = room[0];
            let attack = Number(room[1]);
            health -= attack;
            if (health > 0) {
                console.log(`You slayed ${monster}.`);
            } else {
                console.log(`You died! Killed by ${monster}.`);
                console.log(`Best room: ${i + 1}`);
                isOver = false;
                break;
            }

        }

    }

    if (isOver) {
        console.log("You've made it!");
        console.log(`Coins: ${budget}`);
        console.log(`Health: ${health}`);

    }

}

dark(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);
console.log("-----");
dark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);