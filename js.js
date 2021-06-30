console.log('Sequence:');

// with array
function geometricalSequence(){
    // let output = [];
    for (let i=0, output = []; i<9; i++){
        output.push(Math.pow(2, i));
        if(i == 8) return output.join(' ');
    }
    // return output.join(' ');
}

// with string
function geometricalSequence2(){
    for (let i=0, output = ''; i<9; i++){
        output += `${Math.pow(2, i)} `;
        if(i == 8) return output;
    }
}

// call
console.log(geometricalSequence());
console.log(geometricalSequence2());

// result
//1 2 4 8 16 32 64 128 256


console.log('Problem Solving:');

// with indexOf
function vowelCount(str) {
    let counter = 0;
    let array = str.split('');  // array = ['h', 'e', 'l', 'l', 'o'];
    for (let char of array) {
        if ('aeoui'.indexOf(char) !== -1) {
            counter++;
        }
    }
    return counter;
}

// with switch
function vowelCount2(word) {
    let lowerWord = word.toLowerCase();
    let vowels = 0;
    
    for (let i = 0; i < word.length; i++) {
        switch (lowerWord[i]) {
        case "a":
        case "e":
        case "i":
        case "o":
        case "u":
        vowels++;
        }
    }
    return vowels;
}

// with includes
function vowelCount3(str){
    let vowels = ['a', 'e', 'i', 'o', 'u'];
        counter = 0;

    for(let i=0; i<str.length; i++){
        if(vowels.includes(str[i].toLowerCase())){
            counter++;
        }
    }
    return counter;
}

console.log(vowelCount("hello"));
console.log(vowelCount2("hello"));
console.log(vowelCount3("hello"));