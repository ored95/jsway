// Newspaper list
const newspapers = ["https://www.nytimes.com", "https://www.washingtonpost.com", "http://www.economist.com"];

newspapers.forEach(e => {
    const aNode = document.createElement("li");
    aNode.innerHTML = `<a href="${e}">${e}</a>`;
    document.getElementById("content").appendChild(aNode);
});