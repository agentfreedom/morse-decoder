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

function decode(expr) {
    let valueArray = [];
    for (let i = 0; i < expr.length; i += 10) {
      const startsWithOne = expr.slice(i, i + 10);
      const part = startsWithOne.slice(startsWithOne.indexOf("1"));
      let res = "";
      for (let i = 0; i < part.length; i += 2) {
          const a = part.slice(i, i + 2);
          switch (a) {
              case "10":
                  res += ".";
                  break;
              case "11":
                  res += "-";
                  break;
              case "*":
                  res += " ";
                  break;
          }
      }
      valueArray.push(res);
    }

    return valueArray
      .map((item) => (item === " " ? " " : MORSE_TABLE[item]))
      .join("");
    
}

module.exports = {
    decode
}