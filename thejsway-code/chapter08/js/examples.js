// JavaScript code goes here
// const originalWord = "Bora-Bora";
// const lowercaseWord = originalWord.toLowerCase();
// console.log(lowercaseWord); // "bora-bora"
// const uppercaseWord = originalWord.toUpperCase();
// console.log(uppercaseWord); // "BORA-BORA"
// console.log(originalWord.length)

// const word = "koala";
// console.log(word === "koala"); // true
// console.log(word === "kangaroo"); // false

// const sport = "basketball";
// console.log(sport[0]); // first "b"
// console.log(sport[6]); // second "b"
// console.log(sport[sport.length]); // undefined: last character is at index 9

// const song = "Honky Tonk Women";
// console.log(song.indexOf("onk")); // 1
// console.log(song.indexOf("Onk")); // -1 because of case mismatch

// console.log(song.startsWith("Honk")); // true
// console.log(song.startsWith("honk")); // false
// console.log(song.startsWith("Tonk")); // false

// console.log(song.endsWith("men"));   // true
// console.log(song.endsWith("Men"));   // false
// console.log(song.endsWith("Tonk"));  // false

// const monthList = "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec";
// const months = monthList.split(",");
// console.log(months[0]);     // "Jan"
// console.log(months[months.length-1]);    // "Dec"

// ******* Word info + Vowel count *******
// let word = prompt("Enter a word:");
// const vowels = 'aeiou';
// function vowelCount(word) {
//     let n = 0;
//     for (const letter of word.toLowerCase()) {
//         if (vowels.indexOf(letter) != -1)
//             n++;
//     }
//     return n;
// }
// console.log(`Word: "${word}" with length: ${word.length}, lowercase: ${word.toLowerCase()}, \
// upper case: ${word.toUpperCase()}, vowel counts: ${vowelCount(word)}`);

// ******* Backwards word *******
let word = prompt("Enter a word:");
const backward = (word) => {
    return Array.from(word).reverse().join('');
}
console.log(backward(word));

// ******* Palindrome *******

'First method'
if (word.toLowerCase() === backward(word.toLowerCase()))
    console.log(`${word} is a palindrome`)
else
    console.log(`${word} is NOT a palindrome`);

'Second method'
const isPalindrome = (word) => {
    word = word.toLowerCase();
    for (let i = 0; i < word.length / 2; i++) {
        if (word[i] !== word[word.length-1-i])
            return false;
    }
    return true;
}

if (isPalindrome(word))
    console.log(`${word} is a palindrome`)
else
    console.log(`${word} is NOT a palindrome`);