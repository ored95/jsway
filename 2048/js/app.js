var colors = [
    "#FFFFFF",  // 0
    "#F6CED8",  // 1
    "#F7BE81",  // 2
    "#F3F781",  // 3
    "#BEF781",  // 4
    "#81F7D8",  // 5
    "#58D3F7",  // 6
    "#FA58F4",  // 7
    "#A901DB",  // 8
    "#01DF3A",  // 9
    "#D7DF01",  // 10
    "#D7DF01"   // 11
]

function colorize(x) {
    let x2 = Math.log2(x);
    return (1 <= x2 && x2 <= 11) ? colors[x2] : colors[0];
}

function draw() {
    var canvas = document.getElementById('canvas');
    if (canvas.getContext) {
        ctx = canvas.getContext('2d');

        let w = (canvas.width / 2) >> 0;
        let h = (canvas.height / 2) >> 0;
        let d = 400;
        ctx.fillStyle = colorize(16);
        ctx.fillRect(w - d/2, h - d/2, d, d);
    } else {
        console.log('Error 300: Canvas does not supported in this browser.');
    }
}

draw();