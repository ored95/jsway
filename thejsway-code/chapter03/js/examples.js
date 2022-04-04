// JavaScript code goes here
// if - else if - else statement
// const number = Number(prompt("Enter a number:"));
// if (number > 0) {
//     console.log(`${number} is positive`);
// } else {
//     console.log(`${number} is not positive`)
// }

// Switch-case statement
// const weather = prompt("What's the weather like?");
// switch (weather) {
//     case "sunny":
//         console.log("T-shirt time!");
//         break;
//     case "windy":
//         console.log("Windbreaker life.");
//         break;
//     case "rainy":
//         console.log("Bring that umbrella!");
//         break;
//     case "snowy":
//         console.log("Winter is coming! Just stay inside!");
//         break;
//     default:
//         console.log("Not a valid weather type");
// }

const x = "abc";
switch (x) {
    case "abc":
        console.log("x = abc");
        // break omitted: the next block is also run!
    case "def":
        console.log("x = def");
        break;
}

/**
 * Long comment statement
 * Comparison operators:
 * Equal (===)
 * Not equal (!==)
 * Not (!)
 * Greater/Less (>, <)
 * Greater/Less than or equal (>=, <=)
 */

// Following day
// const day = prompt("Please enter a day name:")
// wkdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
// switch (day) {
//     case wkdays[0]:
//         console.log("The following day is " + wkdays[1]);
//         break;
//     case wkdays[1]:
//         console.log("The following day is " + wkdays[2]);
//         break;
//     case wkdays[2]:
//         console.log("The following day is " + wkdays[3]);
//         break;
//     case wkdays[3]:
//         console.log("The following day is " + wkdays[4]);
//         break;
//     case wkdays[4]:
//         console.log("The following day is " + wkdays[5]);
//         break;
//     case wkdays[5]:
//         console.log("The following day is " + wkdays[6]);
//         break;
//     case wkdays[6]:
//         console.log("The following day is " + wkdays[7]);
//         break;
//     case wkdays[7]:
//         console.log("The following day is " + wkdays[0]);
//         break;
//     default:
//         console.log("Undefined day");
// }

// Number comparison
// let a = Number(prompt("Enter 1st number:"));
// let b = Number(prompt("Enter 2nd number:"));
// if (a < b) {
//     console.log(`${a} < ${b}`);
// } else if (a > b) {
//     console.log(`${a} > ${b}`);
// } else {
//     console.log(`${a} = ${b}`);
// }

// Final values
// let nb1 = Number(prompt("Enter nb1:"));
// let nb2 = Number(prompt("Enter nb2:"));
// let nb3 = Number(prompt("Enter nb3:"));
// if (nb1 > nb2) {
//     nb1 = nb3 * 2;
// } else {
//     nb1++;
//     if (nb2 > nb3) {
//         nb1 += nb3 * 3;
//     } else {
//         nb1 = 0;
//         nb3 = nb3 * 2 + nb2;
//     }
// }
// console.log(nb1, nb2, nb3);

// Number of days in a month
// let m = Number(prompt("Enter month [1..12]:"));
// switch (m)
// {
//     case 1:
//     case 3:
//     case 5:
//     case 7:
//     case 8:
//     case 10:
//     case 12:
//         console.log("31 days");
//         break;
//     case 4:
//     case 6:
//     case 9:
//     case 11:
//         console.log("30 days");
//         break;
//     default:
//         console.log("Usually 28 days, but 29 days in leap year");
// }

// Following second
let ntime = prompt("Enter time value in format <hh:mm:ss>:")
console.log("Current second is", ntime);
function nxtSec(value) {
    let h = Number(value.substr(0, 2)),
        m = Number(value.substr(3, 2)),
        s = Number(value.substr(6, 2));
    
    if ((0 <= h) && (h < 24) && (0 <= m) && (m < 60) && (0 <= s) && (s < 60)) {
        if (s === 59) {
            s = 0;
            if (m === 59) {
                m = 0;
                if (h === 23) {
                    h = 0;
                } else {
                    h++;
                }
            } else {
                m++;
            }
        } else {
            s++;
        }
        
        function format(n) {
            if (n < 10)
                return "0" + n;
            return n; 
        }
        return format(h) + ":" + format(m) + ":" + format(s);
    }
    return false;
}

ntime = nxtSec(ntime);
if (ntime)
    console.log("Next second is", ntime);
else
    console.log("Error 404. Invalid input format");
