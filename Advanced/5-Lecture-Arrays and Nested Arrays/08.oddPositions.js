function processOddPositions(nums) {
    const odd = nums.filter((x, i) => i % 2);
    const doubled = odd.map(x => x * 2);
    doubled.reverse();

    console.log(doubled.join(" "));

}

processOddPositions([10, 15, 20, 25]);
processOddPositions([3, 0, 10, 4, 7, 3]);

function processOddPositionsTwo(nums) {
    
    console.log(nums
    .filter((x, i) => i % 2)
    .map(x => x * 2)
    .reverse()
    .join(" "));

}

processOddPositionsTwo([10, 15, 20, 25]);