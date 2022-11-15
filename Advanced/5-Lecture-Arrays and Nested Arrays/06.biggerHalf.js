function biggerHalf(nums) {
    nums.sort((a, b) => a - b);
    const result = [];

    for (let i = Math.floor(nums.length / 2); i < nums.length; i++) {
        result.push(nums[i])
    }

    return result;
}

biggerHalf([4, 7, 2, 5]);
biggerHalf([3, 19, 14, 7, 2, 19, 6]);
