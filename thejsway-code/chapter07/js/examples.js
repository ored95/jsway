// JavaScript code goes here
// const movies = ["The Wolf of Wall Street", "Zootopia", "Babysitting"];
// movies.forEach((m) => {
//     console.log(m);
// });
// movies.unshift("Pacific Rim");
// movies.splice(2, 3);
// for (const m of movies) {
//     console.log(m);
// }

// ******* Musketeers *******
// musketeers = ["Athos", "Porthos", "Aramis"];
// for (let i = 0; i < musketeers.length; i++) {
//     console.log(musketeers[i]);
// }
// musketeers.push("D'Artagnan")
// musketeers.forEach(m => {
//     console.log(m);
// });
// musketeers.splice(2, 1);
// for (let m of musketeers) {
//     console.log(m);
// }

// ******* Sum of values *******
// const sum = (values) => {
//     let s = 0;
//     for (let v of values)
//         s += v;
//     return s;
// }
// console.log(sum([3, 11, 7, 2, 9, 10]));

// ******* List of words *******
// let w = undefined;
// let words = [];
// while (true) {
//     let w = prompt("Enter a word:");
//     if (w === "stop")
//         break;
//     words.push(w);
// }
// words.forEach((w) => {
//     console.log(w);
// });

// ******* Array maximum *******
function maxArray(array) {
    let imax = 0;
    for (let i = 1; i < array.length; i++)
        if (array[i] > array[imax])
            imax = i;
    return array[imax];
}
console.log(maxArray([3, 11, 7, 2, 9, 10]));