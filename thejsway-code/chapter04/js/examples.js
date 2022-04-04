// JavaScript code goes here
// let i = 1;
// while (i <= 5) {
//     console.log(i);
//     i++;
// }

// for (let number = 1; number < 10; number += 2) {
//     console.log(number);
// }

// let letter = "";
// while (letter !== "X") {
//     letter = prompt("Type a letter or X to exit:");
// }

// Input validation
// let number = 0;
// while (number <= 100) {
//     number = prompt("Type a number less than or equal to 100:");
//     console.log(number);
//     if (number >= 50 && number <= 100)
//         break;
// }

// Multiplication table
// let number = 0;
// while (!(number >= 2 && number <= 9)) {
//     number = Number(prompt("Type a number:"));
// }

// for (let i = 1; i <= 10; i++) {
//     console.log(`${number} x ${i} = ${number * i}`);
// }

// FizzBuzz
for (let n = 1; n <= 100; n++) {
    let s = "";
    if (n % 3 === 0) {
        s = "Fizz";
    }
    if (n % 5 === 0) {
        s += "Buzz";
    }
    if (s === "") s = n;
    console.log(s);
}