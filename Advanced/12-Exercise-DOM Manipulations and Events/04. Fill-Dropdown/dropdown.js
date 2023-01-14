function addItem() {
    let textItem = document.getElementById('newItemText').value;
    let valueItem = document.getElementById('newItemValue').value;
    let menu = document.getElementById('menu');

    let option = document.createElement('option');
    
    option.value = valueItem;
    option.textContent = textItem;

    console.log(option);

    menu.appendChild(option);

    document.getElementById('newItemText').value = '';
    document.getElementById('newItemValue').value = ''
}