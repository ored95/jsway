// ====== Input text events: focus, blur ======
const fields = ["username", "password"];
const elements = fields.map(field => document.getElementById(field));
const helpElements = fields.map(field => document.getElementById(field + "Help"));
const events = [
    "focus", // Show a tip associated with a selected text area
    "blur"   // Hide the advice when the user moves onto a different field 
];   

const setTextStyle = (item, color) => {
    item.style.color = color;   // password box
    item.style.textDecorationColor = color; // text bix
}

const help = (idx, event) => {
    let helpContent = "";
    let condition = true;
    switch (idx) {
        case 0:     // username
            helpContent = "(*) Username must be unique!";
            condition = elements[idx].value !== "" && elements[idx].value !== "username";
            break;
        case 1:     // password
            helpContent = "(*) Password must have more than 6 characters, combining by letter, number and at least 1 special character!";
            condition = elements[idx].value.length > 6;
            break;
    }
    //console.log(`${elements[idx].value}, ${condition}`);
    if (!condition) {
        setTextStyle(elements[idx], "red");
        if (event !== "blur") return helpContent;
    } else {
        setTextStyle(elements[idx], "#53f02d");     // light green
    }
    return "";
}

for (let idx = 0; idx < fields.length; idx++) {
    events.forEach(event => elements[idx].addEventListener(event, () => {
        helpElements[idx].textContent = help(idx, event);
    }));
}

// Give default focus to the "username" input field
elements[0].focus();

// ====== Checkboxes & Radio button & Dropdown lists event: CHANGE ======
// Checkbox: Show if the email confirmation checkbox is checked
document.getElementById("confirmation").addEventListener("change", e => {
    console.log(`Email confirmation requested: ${e.target.checked}`);
});

// Radio buttons
const subscriptionElements = Array.from(document.getElementsByName("subscription"));
subscriptionElements.forEach(element => {
    element.addEventListener("change", e => {
        console.log(`Selected subscription: ${e.target.id}`);
    });
});

// By default no subscriptions
document.getElementById("no").checked = true;

// Dropdown lists change event
document.getElementById("nationality").addEventListener("change", e => {
    console.log(`Nationality chosen: ${e.target.value}`);
});

// Change default nationality
document.getElementById("nationality").value = "XX";