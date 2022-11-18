function heros(arr) {

    let result = [];
    for (const element of arr) {
        let [name, level, items] = element.split(" / ");
        level = Number(level);
        items = items ? items.split(", ") : [];

        const hero = {
            name,
            level,
            items
        };

        result.push(hero);
    }
    
    console.log(JSON.stringify(result));
}

heros(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']);
heros(['Jake / 1000 / Gauss, HolidayGrenade']);