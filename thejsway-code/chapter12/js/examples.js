document.querySelector('img[src]').addEventListener('click', () => {
    alert('Ouch! Stop poking me!');
});

let flag = true;
const myHeading = document.querySelector('h1');
myHeading.addEventListener('click', () => {
    if (flag) {
        myHeading.innerHTML = "Hello from Mozilla!";
    } else {
        myHeading.innerHTML = "Mozilla is cool";
    }
    flag = !flag;
});

// Same as: const myTestIDTag = document.querySelector('#testID');
const myTestIDTag = document.getElementById('testID');
// Same as: const myTestClassTag = document.querySelector('.testClass');
const myTestClassTag = document.getElementsByClassName('testClass');
// console.log(myTestIDTag);
// console.log(myTestClassTag);
let rem = false;
myTestIDTag.addEventListener('click', () => {
    if (!rem) {
        console.log(`${myTestClassTag} is removed!`);
        // Query "getElementsByClassName" return a HTML collection
        // To use remove() function, we should apply for specific index
        // See other solution here: https://ru.stackoverflow.com/questions/543392/%d0%9f%d0%be%d1%87%d0%b5%d0%bc%d1%83-%d0%b8%d0%b4%d0%b5%d1%82-%d0%be%d1%88%d0%b8%d0%b1%d0%ba%d0%b0-like-addeventlistener-is-not-a-function
        myTestClassTag[0].remove();
        rem = true;
    } else {
        console.log('OK');
    }
});
