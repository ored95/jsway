// Write a JavaScript program containing a linkInfo() function that shows:
// • The total number of links.
// • The target of the first and last links.

function linkInfo() {
    const links = [];
    document.querySelectorAll("a").forEach(link => {
        links.push(link.getAttribute("href"));
    });
    console.log(links.length);
    console.log(links[0]);
    console.log(links[links.length-1]);
}

linkInfo();

// Improve the previous program to add a has() function that tests if an element designated by its
// ID has a class. The function shows true, false or an error message if the element can’t be found
const has = (_id, _class) => {
    console.error(document.getElementById(_id).classList.contains(_class));
};

has("saxophone", "woodwind"); // Should show true
has("saxophone", "brass"); // Should show false
has("trumpet", "brass"); // Should show true
has("contrabass", "chordophone"); // Should show an error message
