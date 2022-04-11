// // JavaScript code goes here
// const h = document.head;
// if (h.nodeType === document.ELEMENT_NODE) {
//     console.log(h.ATTRIBUTE_NODE);
// } else {
//     console.log("It's a textual node");
// }

// // Browse the body node's children using a for loop@
// for (let i = 0; i < document.body.childNodes.length; i++) {
//     console.log(document.body.childNodes[i]);
// }
// // Browse the body node's children using the forEach() method
// const b = document.body.childNodes;
// b.forEach(node => {
//     console.log(node);
// });
// // Browse the body node's children using a for-of loop
// for (const node of document.body.childNodes) {
//     console.log(node);
// }

// const h1 = document.body.childNodes[1];
// console.log(h1.parentNode); // Show the body node
// console.log(document.parentNode); // Will show null, since body has no parent node

// Show a DOM object's child node
// "node" is the DOM object
// "index" is the index of the child node
const showChild = (node, index) => {
    if (node.hasChildNodes()) {
        if (0 <= index && index < node.childNodes.length) {
            console.log(node.childNodes[index]);
        } else {
            console.error("Incorrect index");
        }
    } else {
        console.error("Wrong node type");
    }
};
// Should show the h1 node
showChild(document.body, 1);
// Should show "Incorrect index"
showChild(document.body, -1);
// Should show "Incorrect index"
showChild(document.body, 8);
// Should show "Wrong node type"
showChild(document.body.childNodes[0], 0);
