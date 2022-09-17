function buildWall(arr) {
    let nums = arr.map(Number);

    let daysToWork = 30 - (Math.min(...nums));
    let totalConcrete = 0;
    let finalCost = 0;
    let concreteArr = [];


    for (let day = 1; day <= daysToWork; day++) {
        let concreteCount = 0;
        for (let i = 0; i < nums.length; i++) {
            let crewWork = nums[i];
            if (crewWork < 30) {
                concreteCount++;
                nums.splice(i, 1, crewWork + 1);
            }
        }
        let concreteAmountPerDay = 195 * concreteCount;
        concreteArr.push(concreteAmountPerDay);
        totalConcrete += concreteAmountPerDay;
    }

    finalCost = totalConcrete * 1900;
    console.log(concreteArr.join(", "))
    console.log(`${finalCost} pesos`);
    
}

buildWall([21, 25, 28]);
buildWall([17]);
buildWall([17, 22, 17, 19, 17]);