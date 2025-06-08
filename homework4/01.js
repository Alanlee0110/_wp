function countLetters(str) {
    let letterMap = new Map();

    for (let char of str) {
        if (char.match(/[a-zA-Z]/)) { 
            char = char.toLowerCase();
            letterMap.set(char, (letterMap.get(char) || 0) + 1);
        }
    }

    return letterMap;
}


let result = countLetters("Hello World!");
console.log(result);
