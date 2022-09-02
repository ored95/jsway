// JavaScript code goes here
const counterElement = document.getElementById("counter");
const intervalId = setInterval(() => {
    // Count down the counter until 0
    const counter = Number(counterElement.textContent);
    if (counter > 1) {
        counterElement.textContent = counter - 1;
    } else {
        // Cancel the repeated action
        clearInterval(intervalId);

        // Modify the title after 2 seconds
        setTimeout(() => {
            const titleElement = document.getElementById("title");
            titleElement.textContent = "BOOM!!";
        }, 2000);
    }
}, 500);    // ms


// Move the block to the right, all the way to the end of the frame
const moveBlock = () => {
    // Convert the left position of the block (value of the form "XXpx") to a number
    const xBlock = parseFloat(getComputedStyle(blockElement).left);
    // Convert the width of the frame (value of the form "XXpx") to a number
    const xMax = parseFloat(getComputedStyle(frame).width);
    // If the block isn't already to the end of the frame
    if (xBlock + blockWidth <= xMax) {
        // Block movement
        blockElement.style.left = (xBlock + movement) + "px";
        animationId = requestAnimationFrame(moveBlock);
    }
    else {
        // Cancel the animation
        cancelAnimationFrame(animationId);
        var textNode = document.createElement("div");
        //frame.removeChild(blockElement);
        textNode.id = "block-new";
        textNode.innerHTML = "You're hacked!";
        frame.appendChild(textNode);
    }
};

//const frame = document.getElementById("frame");
const blockElement = document.getElementById("block");
// Convert the block width (value of the form "XXpx") to a number
const blockWidth = parseFloat(getComputedStyle(block).width);

// Movement value in pixels
const movement = 2;

// Start the animation
let animationId = requestAnimationFrame(moveBlock);

