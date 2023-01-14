function deleteByEmail() {
    //select input field and read value
    const value = document.querySelector('input[name = "email"]').value;
    console.log('deleting', value)
    //select all elements from the table
    const rows = Array.from(document.querySelectorAll('tbody tr'));
    let found = false;
    for (let row of rows) {
        if (row.children[1].textContent == value) {
            const parent = row.parentElement;
            parent.removeChild(row);
            found = true;
        }

    }

    if (found) {
        document.getElementById('result').textContent = "Deleted."
    } else {
        document.getElementById('result').textContent = "Not found."
    }

}