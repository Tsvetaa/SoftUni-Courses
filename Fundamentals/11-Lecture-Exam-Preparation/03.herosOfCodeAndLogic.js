function heros(input) {
    let commands = {
        CastSpell,
        TakeDamage,
        Recharge,
        Heal
    };

    let countHeros = Number(input.shift());
    let heros = {}

    for (let i = 0; i < countHeros; i++) {
        let tokens = input.shift().split(" ");
        let name = tokens[0];
        let hpHero = Number(tokens[1]);
        let mpHero = Number(tokens[2]);
       
        heros[name] = {
            hpHero,
            mpHero
        };
    }

    while (input[0] != "End") {
        let tokens = input.shift().split(" - ");
        let command = tokens[0];
        let name = tokens[1];
        let p1 = Number(tokens[2]);
        let p2 = tokens[3];

        let hero = heros[name];
        commands[command](hero, p1, name, p2);
    }

    function CastSpell(hero, p1, name, p2) {
        if (hero.mpHero >= p1) {
            hero.mpHero -= p1;
            console.log(`${name} has successfully cast ${p2} and now has ${hero.mpHero} MP!`)
        } else {
            console.log(`${name} does not have enough MP to cast ${p2}!`);
        }
    }

    function TakeDamage(hero, p1, name, p2) {
        hero.hpHero -= p1;
        if (hero.hpHero <= 0) {
            delete heros[name];
            console.log(`${name} has been killed by ${p2}!`);
        } else {
            console.log(`${name} was hit for ${p1} HP by ${p2} and now has ${hero.hpHero} HP left!`);
        }
    }

    function Recharge(hero, p1, name) {
        let mp = Math.min((200 - hero.mpHero), p1);
        hero.mpHero += mp;
        console.log(`${name} recharged for ${mp} MP!`)
    }

    function Heal(hero, p1, name) {
        let hp = Math.min((100 - hero.hpHero), p1);
        hero.hpHero += hp;
        console.log(`${name} healed for ${hp} HP!`)
    }

    for (let heroData of Object.entries(heros)) {
        let name = heroData[0];
        let hero = heroData[1];
        console.log(name);
        console.log(`  HP: ${hero.hpHero}`);
        console.log(`  MP: ${hero.mpHero}`);
    }

}

heros([
    "4",
    "Adela 90 150",
    "SirMullich 70 40",
    "Ivor 1 111",
    "Tyris 94 61",
    "Heal - SirMullich - 50",
    "Recharge - Adela - 100",
    "CastSpell - Tyris - 1000 - Fireball",
    "TakeDamage - Tyris - 99 - Fireball",
    "TakeDamage - Ivor - 3 - Mosquito",
    "End"]);