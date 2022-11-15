function sumFirstLast (numsAsString) {
    const first = numsAsString.shift();
    const last = numsAsString.pop();

    const result = Number(first) + Number(last);
    console.log(result);

}
sumFirstLast(['20', '30', '40']);