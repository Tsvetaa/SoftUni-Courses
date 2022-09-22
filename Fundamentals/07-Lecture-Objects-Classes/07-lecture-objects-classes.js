
function cityInfo(city) {
    let properties = Object.keys(city);

    for (let property of properties) {
        console.log(`${property} -> ${city[property]}`);
    }

}

cityInfo({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
}
);


function jsonToObject(jsonString) {
    let obj = JSON.parse(jsonString);

    for (let key of Object.keys(obj)) {
        console.log(`${key}: ${obj[key]}`);
    }

}

jsonToObject('{"name": "George", "age": 40, "town": "Sofia"}');


function objectToJson (name, lastName, hairColor) {
    let obj = {
        name, 
        lastName,
        hairColor
    };

    let result = JSON.stringify(obj);
    console.log(result);

}

objectToJson('George', 'Jones', 'Brown');


function cats(catsAsString) {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    let catsArr = [];

    for (let catAsString of catsAsString) {
        let tokens = catAsString.split(' ');
        let cat = new Cat(tokens[0], Number(tokens[1]));
        catsArr.push(cat);
    }

    for(let cat of catsArr) {
        cat.meow();
    }
}

cats(['Mellow 2', 'Tom 5']);

/*
function songTask (songsAsArr) {
    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name; 
            this.time = time; 
        }

    }

    let songList = [];

    let numberOfTracks = songsAsArr.shift();
    let typeSong = songsAsArr.pop();

    for (let i = 0; i < numberOfTracks; i++) {
        let [typeList, name, time] = songsAsArr[i].split('_');
        let songInfo = new Song(typeList, name, time);
        songList.push(songInfo);
    }

    if (typeSong == "all") {
        songList.forEach((i) => console.log(i.name));
    } else {
        let filter = songList.filter((i) => i.typeList == typeSong);
        filter.forEach((i) => console.log(i.name));
    }

}

songTask([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']
    );
*/