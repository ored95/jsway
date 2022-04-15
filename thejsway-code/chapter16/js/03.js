const addDessert = e => {
    const dessert = document.createElement("li");
    dessert.innerText = prompt("Name a dessert:");
    dessert.id = dessert.innerText;
    document.getElementById("desserts").appendChild(dessert);
};

document.getElementById("addButton").addEventListener("click", addDessert);
document.addEventListener("keypress", e => {
    if (e.keyCode === 13)   // Enter key
        addDessert();
});

document.addEventListener("click", e => {
    if (e.target.tagName === "LI") {
        document.getElementById(e.target.id).innerText = prompt("Rename that dessert by:");
    }
});

document.addEventListener("contextmenu", e => {
    if (e.target.tagName === "LI") {
        document.getElementById("desserts").removeChild(e.target);
    }
});