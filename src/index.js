const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};


      
function decode(cipher) {
    let cipherLength = cipher.length;
    let dot = '.';
    let dash = '-';
    let space = ' ';
    let finalResult = '';

    for (let i = 0; i < cipherLength; i += 10) {
        let result = '';
        let tenLetter = cipher.slice(i, i + 10);

        if (tenLetter === '**********') {
            result += space;
        } else {

            for (let j = 0; j < tenLetter.length; j += 2) {
                let twoLetter = tenLetter[j] + tenLetter[j + 1];
                if (twoLetter === '00') {
                    result = result;
                }
                else if (twoLetter === '10') {
                    result = `${result}${dot}`;
                }
                else if (twoLetter === '11')  {
                    result = `${result}${dash}`;
                }
            }
        }
        if (result === ' ') {
            finalResult += ' '
        } else {
            finalResult += MORSE_TABLE[result];
        }
    }
    return finalResult 
}

module.exports = {
    decode
}