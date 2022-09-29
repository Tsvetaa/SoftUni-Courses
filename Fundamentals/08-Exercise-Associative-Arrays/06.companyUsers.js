function companyUsers(input) {
    let companies = {};


    for (let line of input) {
        let [name, id] = line.split(" -> ");
        if (companies.hasOwnProperty(name) == false) {
            companies[name] = new Set();
        }
        companies[name].add(id);
    }

    let sorted = Object.entries(companies);
    sorted.sort();

    for (let [name, obj] of sorted) {
        console.log(name);
        for (let element of obj) {
            console.log("-- " + element);
        }
    }
}

companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
]);
console.log("-------------------")
companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'
]);