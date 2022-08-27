function printAndSum(start,end) {
    let sum = 0;
    let hold = 0; 
     
    while (start <= end) {
        let hold 
        hold += start + " ";
        console.log(hold); 
        sum += start;
        start++;
    }
    console.log(`Sum: ${sum}`);
}

printAndSum(5,10);