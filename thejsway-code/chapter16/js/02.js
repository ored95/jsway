document.addEventListener("keypress", e => {
    switch (String.fromCharCode(e.charCode).toUpperCase()) {
        case "R":
            document.querySelectorAll("div").forEach(div => {
                div.style.backgroundColor = "red";
            }); break;
        case "G":
            document.querySelectorAll("div").forEach(div => {
                div.style.backgroundColor = "green";
            }); break;
        case "B":
            document.querySelectorAll("div").forEach(div => {
                div.style.backgroundColor = "blue";
            }); break;
        case "Y":
            document.querySelectorAll("div").forEach(div => {
                div.style.backgroundColor = "yellow";
            }); break;
        default:
            document.querySelectorAll("div").forEach(div => {
                div.style.backgroundColor = "transparent";
            });
    }
});