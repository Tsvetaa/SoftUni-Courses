function calorieObject(arr) {

    let result = {}
    for (let i = 0; i < arr.length; i += 2) {
        const product = arr[i]
        const calories = Number(arr[i + 1]);

        result[product] = calories;
    }

    console.log(result);

}

calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);