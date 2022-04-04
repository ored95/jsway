// JavaScript code goes here
// Improved hello
// function sayHello(firstName, lastName) {
//     const message = `Hello, ${firstName} ${lastName}!`;
//     return message;
// }

// let firstName = prompt("Enter your first name: ");
// let lastName = prompt("Enter your last name: ");
// alert(sayHello(firstName, lastName));

// Number squaring
// // Square the given number x
// function square1(x) {
//     return Math.pow(x, 2);
// }
// // Square the given number x
// const square2 = x => Math.pow(x, 2);
// let s1 = s2 = "";
// for (let i = 0; i <= 10 ; i++) {
//     s1 += String(square1(i)) + " ";
//     s2 += String(square2(i)) + " ";
// }
// console.log(s1);
// console.log(s2);

// Minimum of two numbers
// const min = (a, b)  => {
//     if (a < b)
//         return a;
//     return b;
// }

// Calculator
// function calculate(a, b, c) {
//     switch (b) {
//         case "-":
//             a -= c; break;
//         case "*":
//             a *= c; break;
//         case "/":
//             a /= c; break; 
//         default: // case "+":
//             a += c;
//     }
//     return a;
// }

// console.log(calculate(4, "+", 6)); // Must show 10
// console.log(calculate(4, "-", 6)); // Must show -2
// console.log(calculate(2, "*", 0)); // Must show 0
// console.log(calculate(12, "/", 0)); // Must show Infinity

// Circumference and area of a circle
const circleArea = (r) => Math.PI * r ** 2;
console.log(circleArea(2));
