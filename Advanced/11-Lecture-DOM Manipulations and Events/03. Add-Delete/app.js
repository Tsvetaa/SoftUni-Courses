function addItem() {
    //select input field and read value
    const input = document.getElementById('newItemText');

    //create li element
    const liElement = document.createElement('li');
    liElement.textContent = input.value;

    // creste delete button
    let deleteBtn = document.createElement('a');
    deleteBtn.textContent = '[Delete]';
    deleteBtn.href = '#';
    liElement.appendChild(deleteBtn);
    deleteBtn.addEventListener('click', onDelete);

    //select ul and add new element
    document.getElementById('items').appendChild(liElement);

    //clear content 
    input.value = '';


    function onDelete() {
        deleteBtn.parentElement.remove();
    }

}



