// Complete the following program to write the countElements() function, that takes a CSS selector
// as a parameter and returns the number of corresponding elements

const countElements = (selector) => {
    return document.querySelectorAll(selector).length;
};

console.log(countElements("p")); // Should show 4
console.log(countElements(".adjective")); // Should show 3
console.log(countElements("p .adjective")); // Should show 3
console.log(countElements("p > .adjective")); // Should show 2
