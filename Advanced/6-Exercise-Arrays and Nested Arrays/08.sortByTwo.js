function sortByTwo(arr) {
    arr.sort(byTwo);
    return arr.join("\n");

    function byTwo(a, b) {
        if (a.length == b.length) {
            return a.localeCompare(b);
        }
        return a.length - b.length;
    }

}

console.log(sortByTwo(['Isacc',
    'Theodor',
    'Jack',
    'Harrison',
    'George']
));