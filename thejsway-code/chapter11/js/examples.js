// JavaScript code goes here
menuBox = "Choose command below to start\n\
1. Show the list of links\n\
2. Add a new link.\n\
3. Remove an existing link.\n\
0. Quit the program"

class Link {
    constructor(title, url, author) {
        this.title = title;
        this.url = url;
        this.author = author;
    }
    describe() {
        return this.title + "(" + this.url + "). Author: " + this.author;
    }
}

class Links {
    constructor() {
        this.links = [];    // save the links
    }
    add(link) {
        if (!(link.url.startsWith("http://") || link.url.startsWith("https://"))) {
            this.links.unshift(link);       // add an element to the beginning of array
        } else {
            this.links.push(link);          // add an element to the end of array
        }
    }
    remove(id) {
        if (1 <= id && id <= this.links.length) {
            this.links.splice(id-1, 1);     // remove an element from array by index
            return `Link with {id: ${id}} is removed successfully.`;
        }
        return `Error 404. Link with {id: ${id}} does not exist.`;
    }
    describe() {
        if (this.links.length === 0)
            return "List links is empty.";

        const strLinks = this.links.map(link => link.describe());
        let s = "";
        for (let i = 0; i < strLinks.length; i++) {
            s += `${i+1}: ${strLinks[i]}\n`;
        }
        return s;
    }
}

const addBox = () => {
    const title = prompt("New link title:");
    const url = prompt("New link URL:");
    const author = prompt("New link author:");
    return new Link(title, url, author);
}

const removeBox = () => {
    const id = Number(prompt("Enter link ID to be removed:"));
    return id;
}


const lst = new Links();
let choice = prompt(menuBox);
while (choice !== "0") {
    switch(choice) {
        case "1":
            alert(lst.describe());
            break;
        case "2":
            lst.add(addBox());
            break;
        case "3":
            alert(lst.remove(removeBox()));
            break;
    }
    choice = prompt(menuBox);
}

alert("Thank for your attention. Good bye!")
console.log("User quit!")