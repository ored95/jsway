// Show the "Wonders from Antiquity" h2 element
// console.log(document.body.childNodes[5].childNodes[1]);

// Get all h2 elements into an array
// const titleElements = document.getElementsByTagName("h2");
// console.log(titleElements[0]); // Show the first h2
// console.log(titleElements.length); // 3 (total number of h2 elements in the page)
// Show all h2 elements
// Why do not use forEach? Explanation here :https://stackoverflow.com/questions/22754315/for-loop-for-htmlcollection-elements
// for (const title of titleElements) {
//     console.log(title);
// }

// Show all elements that have the class "exists"
// // const existingElements = Array.from(document.getElementsByClassName("exists"));  // work at all
// const existingElements = document.getElementsByClassName("exists");
// for (let e of existingElements) {
//     console.log(e.textContent);
// }

// Show element with the ID "new"
// console.log(document.getElementById("new"));

// All "ancient" wonders that still exist
// Array.from(document.getElementById("ancient").getElementsByClassName("exists")).forEach(item => {
//     console.log(item);
// });

// // All paragraphs
// console.log(document.querySelectorAll("p").length); // 3
// // All paragraphs inside the "content" ID block
// console.log(document.querySelectorAll("#content p").length); // 2
// // All elements with the "exists" class
// console.log(document.querySelectorAll(".exists").length); // 8
// // All "ancient" wonders that still exist
// console.log(document.querySelectorAll("#ancient > .exists").length); // 1

// // Show the first paragraph
// console.log(document.querySelector("p"));

// The HTML content of the DOM element with ID "content"
// console.log(document.getElementById("content").innerHTML);

// The textual content of the DOM element with ID "content"
// console.log(document.getElementById("content").textContent);

// // Show href attribute of the links
// document.querySelectorAll("a").forEach(e => {
//     console.log(e.getAttribute("href"));
// });

// if (document.querySelector("a").hasAttribute("target")) {
//     console.log("The first link has a target attribute.");
// } else {
//     console.log("The first link does not have a target attribute."); // Will be shown
// }

// List of classes of the element identified by "ancient"
// const classes = document.getElementById("ancient").classList;
// console.log(classes.length); // 1 (since the element only has one class)
// console.log(classes[0]); // "wonders"

// Show all id of list of class "wonders"
// const classes = Array.from(document.getElementsByClassName("wonders"));
// classes.forEach(c => {
//     console.log(c.getAttribute("id"));
// });

// if (document.getElementById("ancient").classList.contains("wonders")) {
//     console.log("The element with ID 'ancient' has the class 'wonders'."); // Will be shown
// } else {
//     console.log("The element with ID 'ancient' does not have the class 'wonders'.");
// }


// GET ALL CLASS NAMEs in HTML/DOM
const allClasses = Array.from(document.querySelectorAll('[class]')).flatMap(e => e.className.toString().split(/\s+/))
const classes = new Set();
allClasses.forEach(c => classes.add(c));
console.log(classes)