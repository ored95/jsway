document.getElementById("addButton").addEventListener("click", e => {
    const dessert = document.createElement("li");
    dessert.textContent = prompt("Name a desert:");
    document.getElementById("desserts").appendChild(dessert);
});
