function passGen(input) {
    let line = input[0].concat(input[1]);
    let thirdString = input[2];
    let pass = "";
    let vowels = ["a", "e", "i", "o", "u"];
    let vowelIndex = 0; 


    for (let i = 0; i < line.length; i++) {
        if (vowels.includes(line[i])) {            
            let indexOfChar = vowelIndex % thirdString.length;
            vowelIndex++;
            let currentChar = thirdString.charAt(indexOfChar);
            pass += currentChar.toUpperCase();
        } else {
            pass += (line[i]);
        }
    }
    console.log("Your generated password is " + pass.split("").reverse().join(""));
}

passGen([
    'easymoneyeazylife', 'atleasttencharacters', 'absolute'
    ]    
)