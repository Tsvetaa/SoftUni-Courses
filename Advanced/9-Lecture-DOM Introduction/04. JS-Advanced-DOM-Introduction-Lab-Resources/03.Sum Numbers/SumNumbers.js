function calc() {
    const n1 = document.getElementById('num1').value;
    const n2 = document.getElementById('num2').value;
    const result = Number(n1) + Number(n2);

    if (Number.isNaN(result)) {
        alert("Please, enter number values!")
    } else {
        document.getElementById('sum').value = result;
    }

}
