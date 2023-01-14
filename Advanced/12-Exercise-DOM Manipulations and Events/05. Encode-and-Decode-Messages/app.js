function encodeAndDecodeMessages() {
    let input = document.querySelectorAll('textarea')[0];

    let output = document.querySelectorAll('textarea')[1];
    let buttons = document.querySelectorAll('button');


    buttons[0].addEventListener('click', encode);

    function encode() {
        let encodedString = '';
        let inputValue = input.value

        for (let letter of inputValue) {
            let asciiCode = letter.charCodeAt(0) + 1;
            encodedString += String.fromCharCode(asciiCode);
        }

        output.value = encodedString;
        input.value = '';
    }

    buttons[1].addEventListener('click', decode);


    function decode() {
        let decodedString = '';
        let encodedArr = output.value
        for (let letter of encodedArr) {
            let asciiCode = letter.charCodeAt(0) - 1;
            decodedString += String.fromCharCode(asciiCode)
        }
        output.value = decodedString;
    }
}