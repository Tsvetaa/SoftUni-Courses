function townsJSON(arr) {
    const headings = arr.shift();

    for ( let element of arr) {
        const [town, lat, lon] = element.split(" | ");
        console.log(town);
        console.log(lat);
        console.log(lon);
    }

}

townsJSON(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']);

townsJSON(['| Town | Latitude | Longitude |',
'| Veliko Turnovo | 43.0757 | 25.6172 |',
'| Monatevideo | 34.50 | 56.11 |']);