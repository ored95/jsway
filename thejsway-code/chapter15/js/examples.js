// Modifying an HTML element: adding an <li>
document.getElementById("languages").innerHTML += '<li id="python">Python</li>';

// Delete the HTML content of the list, replacing it with nothing
// document.getElementById("languages").innerHTML = "";

// Modify the title's text content
document.querySelector("h3").textContent += " for programming";

// Define the id attribute of the first title
document.querySelector("h3").id = "title";
document.getElementById("java").id = "stupid";

document.getElementById("stupid").setAttribute("template", "test");

// Method 1: You can use the classList property to add or remove classes from a DOM element!
const titleElement = document.querySelector("h3"); // Grab the first h3
titleElement.classList.remove("beginning"); // Remove the class "beginning"
titleElement.classList.add("newtitle"); // Add a class called "title" 
console.log(titleElement);
// Method 2: Using setAttribute()
document.querySelector("h3").setAttribute("class", "newTitle2");

// Add a new element
const newEl = document.createElement("ol");
newEl.id = "ol-element";
newEl.class = "ol-class";
const e1 = document.createElement("li");
e1.textContent = "sample 1";
const e2 = document.createElement("li");
e2.textContent = "sample 2";
newEl.appendChild(e1);
newEl.appendChild(e2);
document.getElementById("stupid").appendChild(newEl);

// Insert an element before another one
const perlNode = document.createElement("li");
perlNode.id = "perl";
perlNode.textContent = "Perl";
document.getElementById("languages").insertBefore(perlNode, document.querySelector("csharp"));
// Add an element to the beginning of a list
document.getElementById("languages").insertAdjacentHTML("afterbegin", '<li id="lisp">Lisp</li>');

// Replace a node
const lispNode = document.createElement("li");
lispNode.id = "lisp";
lispNode.textContent = "Common Lisp";
lispNode.style.color = "green";
lispNode.style.opacity = "30%";
lispNode.style.backgroundColor = "black";
document.getElementById("languages").replaceChild(lispNode, document.getElementById("stupid"));

// Remove a node
document.getElementById("languages").removeChild(document.getElementById("lisp"));

// The limits of the style property
const liElements = document.getElementsByTagName("li");
for (const e of liElements) {
    console.log(e.style.color);
}

// Access the element style
for (const e of document.getElementsByTagName("li")) {
    const _liElements = getComputedStyle(e);
    console.log(_liElements.color);
}

// Adding a paragraph
document.getElementById("content").innerHTML += 'Here is a more complete <a href="https://en.wikipedia.org/wiki/List_of_programming_languages">list</a> of languages.';
