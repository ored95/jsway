const infoNode = document.getElementById("infos");
infoNode.style.float = "left";
// infoNode.style.fontSize = "20px";
document.body.insertBefore(infoNode, document.getElementById("content"));

document.getElementById("infos").insertAdjacentHTML("afterbegin", "<p>Information about the element</p>");
document.getElementById("infos").insertAdjacentElement("beforeend", document.createElement("ul"));

const contentStyle = getComputedStyle(document.getElementById("content"));
const heightNode = document.createElement("li");
heightNode.textContent = `Height: ${contentStyle.height}`;
document.querySelector("ul").appendChild(heightNode);

const widthNode = document.createElement("li");
widthNode.textContent = `Width: ${contentStyle.width}`;
document.querySelector("ul").appendChild(widthNode);
