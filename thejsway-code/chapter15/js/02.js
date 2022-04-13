const words = [{
    term: "Procrastination",
    definition: "Avoidance of doing a task that needs to be accomplished"
}, {
    term: "Tautology",
    definition: "logical argument constructed in such a way that it is logically irrefutable"
}, {
    term: "Oxymoron",
    definition: "figure of speech that juxtaposes elements that appear to be contradictory"
}];

document.querySelector("h3").style.fontWeight = "bold";
document.querySelector("h3").style.fontSize = "50px";

// DL tag: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dl
const dlNode = document.createElement("dl");
words.forEach(w => {
    const dtNode = document.createElement("dt");
    dtNode.innerText = w.term;
    dtNode.style.fontWeight = "bold";
    dlNode.appendChild(dtNode);
    
    const ddNode = document.createElement("dd");
    ddNode.innerText = w.definition;
    dlNode.appendChild(ddNode);
});

document.getElementById("content").appendChild(dlNode);