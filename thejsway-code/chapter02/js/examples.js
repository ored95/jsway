// JavaScript code goes here
let a = 3.14, b;
{
    b = a;
    a *= 2;
}
console.log("a: " + a + "\tb: " + b);
// test type conversations: Number(), String()
let x = "five";
let y = Number(x);
console.log(x, y);      // by default, if x can not be converted to a number then return NaN (Not-a-Number)

// entering information
// let firstName = prompt("Enter your first name:");
// let lastName = prompt("Enter your last name:");
// alert(`Hello, ${firstName} ${lastName}`);

// Final values
a = 2;
a -= 1;
a++;
b = 8;
b += 2;
const c = a + b * b;
const d = a * b + b;
const e = a * (b + b);
const f = a * b / a;
const g = b / a * a;
console.log(a, b, c, d, e, f, g);

// VAT calculation
// const rate = 1.206
// let rawPrice = prompt("Please enter the raw price:")
// alert(`Final price is ${rawPrice * rate}`)

// From Celsius to Fahrenheit degrees
// let dgCelsius = prompt("Please enter the temperature in Celsius:")
// function cvtCelsiusToFahrenheit(x){
//     return x * 9 / 5 + 32;
// }
// alert(`In Fahrenheit it is ${cvtCelsiusToFahrenheit(dgCelsius)}`)

// Variable swapping
let v1 = 5, v2 = 3;
console.log(v1, v2);
a = v1;
v1 = v2;
v2 = a;
console.log(v1, v2)
