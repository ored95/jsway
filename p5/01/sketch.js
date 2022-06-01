let width = 1920, height = 1080;
let cx = width / 2;
let cy = height / 2;

function setup() {
    createCanvas(width, height);
    background(220);
}

let angle = 0;
let i = 0;

function draw() {
    let r = 300;
    let x = cx + r * cos(angle);
    let y = cy + r * sin(angle);
    if (angle > 2 * Math.PI) {
        angle = 0;
        i += 2
        if (i >= 255)
            i = 0;
        stroke(255, i, i);
    }
    line(cx, cy, x, y);
    ellipse(x, y, 10);
    angle += Math.PI / 40;
}
