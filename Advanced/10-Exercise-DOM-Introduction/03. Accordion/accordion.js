function toggle() {
    const textElement = document.getElementById('extra');
    const buttonElement = document.getElementsByClassName('button')[0];


    if (buttonElement.textContent == 'More') {
        buttonElement.textContent = 'Less';
        textElement.style.display = 'block';

    } else if (buttonElement.textContent == 'Less') {
        buttonElement.textContent = 'More';
        textElement.style.display = 'none';
    };

}