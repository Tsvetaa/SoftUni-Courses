function addItem() {
    //select input field and read value
    const content = document.getElementById('newItemText').value;
    //create li element
    const liElement = document.createElement('li');
    //assign input value to to the li element
    liElement.textContent = content;
    //select ul and add ne element
    const ulElement = document.getElementById('items');
    ulElement.appendChild(liElement);
    //clear content 
    document.getElementById('newItemText').value = '';
}