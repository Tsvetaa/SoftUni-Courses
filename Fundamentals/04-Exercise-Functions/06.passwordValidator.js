function passValidator(pass) {

    function lengthPass(pass) {
        return pass.length >= 6 && pass.length <= 10 ? true : false;
    }

    function lettersDigitsPass(pass) {
        for (let currentChar of pass) {
            let currentCharCode = currentChar.charCodeAt(0);
            if (!(currentCharCode >= 65 && currentCharCode <= 90)
                && !(currentCharCode >= 97 && currentCharCode <= 122)
                && !(currentCharCode >= 48 && currentCharCode <= 57)) {
                return false;
            }
        }
        return true;
    }


    function minDigitPass(pass) {
        let count = 0;
        for (let currentChar of pass) {
            if (currentChar.charCodeAt(0) >= 48 && currentChar.charCodeAt(0) <= 57) {
                count++;
            }
        }
        return count >= 2 ? true : false;
    }

    let lengthCheck = lengthPass(pass);
    let lettersDigitsCheck = lettersDigitsPass(pass);
    let minDigitCheck = minDigitPass(pass);

    if (lengthCheck && lettersDigitsCheck && minDigitCheck) {
        console.log("Password is valid");
    }
    if (!lengthCheck) {
        console.log("Password must be between 6 and 10 characters");
    }
    if (!lettersDigitsCheck) {
        console.log("Password must consist only of letters and digits");
    }
    if (!minDigitCheck) {
        console.log("Password must have at least 2 digits");
    }

}

passValidator('logIn');
passValidator('MyPass123');
passValidator('Pa$s$s');