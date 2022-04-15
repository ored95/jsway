const counting = () => {
    const counter = document.getElementById("clickCount");
    counter.innerText = Number(counter.innerText) + 1;    
}
document.getElementById("myButton").addEventListener("click", counting);

const btnDeactivate = document.getElementById("deactivate");
btnDeactivate.addEventListener("click", e => {
    if (btnDeactivate.innerText === "Activate counting") {
        document.getElementById("myButton").addEventListener("click", counting);
        btnDeactivate.innerText = "Desactivate counting";
        console.log("Counting activated.");
    } else {
        document.getElementById("myButton").removeEventListener("click", counting);
        btnDeactivate.innerText = "Activate counting";
        console.log("Counting deactivated.");
    }
});