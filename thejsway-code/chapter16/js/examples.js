const showMsg = (name) => {
    if (name !== "")
        alert(`Hey ${name}!`);
}

const btnClick = document.getElementById("myButton");
btnClick.addEventListener("click", showMsg);
//btnClick.removeEventListener("click", showMsg);

const btnRemove = document.getElementById("btnRemove")
btnRemove.removeEventListener("click", () => {
    btnClick.removeEventListener("click", showMsg);
});

btnRemove.addEventListener("click", e => {
    console.log(`Type/: ${e.type}\tTarget/: ${e.target}`);
});

// Show the pressed character
// document.addEventListener("keypress", e => {
//     console.log(`You pressed the ${String.fromCharCode(e.charCode)} key`);
// });

// Show information on a keyboard event
const keyboardInfo = e => {
    console.log(`Keyboard event: ${e.type}, key code: ${e.keyCode}, key value: ${String.fromCharCode(e.keyCode)}`);
};

// Integrate this function into key press and release:
document.addEventListener("keydown", keyboardInfo);
document.addEventListener("keyup", keyboardInfo);

const getMouseButton = code => {
    let button = "unknown";
    switch (code) {
        case 0: // 0 is the code for the left mouse button 
            button = "left";
            break;
        case 1: // 1 is the code for the middle mouse button 
            button = "middle";
            break;
        case 2: // 2 is the code for the right button 
            button = "right";
            break;
    }
    return button;
};

// Show info about mouse event
const mouseInfo = (e) => { 
    console.log(
        `Mouse event: ${e.type}, button: ${getMouseButton(e.button)}, X: ${e.clientX}, Y: ${e.clientY},\
        PageX: ${e.pageX}, PageY: ${e.pageY}`
    );
};
// Add mouse click event listener
document.addEventListener("click", mouseInfo);

// Web page loading event
window.addEventListener("load", e => {
    console.log("The page has been loaded!");
});

// // Handle page closing event
// windows.addEventListener("beforeunload", () => {
//     let ans = prompt("Are you sure to close?");
//     if (ans.toUpperCase() === "YES") {
//         windows.close();
//     }
// });
// Handle page closing
window.addEventListener("beforeunload", e => {
    const message = "Should you stay or should you go?";
    // Standard way of showing a confirmation dialog 
    e.returnValue = message;
    // Browser-specific way of showing a confirmation dialog 
    return message;
});

// Handler button inside other tags
document.getElementById("para").addEventListener("click", e => {
    console.log(`Paragraph event/: ${e.type} type`);
});

document.getElementById('propa').addEventListener("click", e => {
    console.log("Button event");
    document.getElementById("propa").innerText = "OK";
    e.stopPropagation(); // Stop the event propagation
});

// Handling clicking on the forbidden link
document.getElementById("forbidden").addEventListener("click", e => {
    alert("Yes... But no.");
    e.preventDefault(); // Cancels the default behavior
});
