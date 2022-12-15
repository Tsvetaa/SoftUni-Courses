function generateReport() {
    let checkBoxs = document.getElementsByTagName('input');

    let checkBoxsOn = [];
    for (let i = 0; i < checkBoxs.length; i++) {
        if (checkBoxs[i].checked) {
            checkBoxsOn.push(i)
        }
    }

    let finalResult = [];

    let arrTable = document.getElementsByTagName('tr');
    for (let i = 1; i < arrTable.length; i++) {
        let currentRow = arrTable[i].children;
        let obj = {}
        for (let j = 0; j < currentRow.length; j++) {
            if (checkBoxsOn.includes(j)) {
                obj[checkBoxs[j].name] = currentRow[j].textContent;

            }
        }

        console.log(obj);
        finalResult.push(obj);
    }
    document.getElementById('output').value = JSON.stringify(finalResult);
}



