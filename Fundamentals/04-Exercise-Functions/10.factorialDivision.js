function factorielDevision(firstNum, secondNum) {
    function factorielCalculator(number) {
        let result = 1; 
        while (number !== 1) {
            result *= number; 
            number -= 1; 
        }
        return result; 
    }
    let finalDivisionResult = factorielCalculator(firstNum) / factorielCalculator(secondNum)
    console.log(finalDivisionResult.toFixed(2));
}

factorielDevision(5,2)

