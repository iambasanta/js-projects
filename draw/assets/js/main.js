const clear = document.querySelector(".clear");
const stroke_weight = document.querySelector(".stroke-weight");
const stroke_color = document.querySelector(".color-picker");

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

let isDrawing = false;

canvas.addEventListener("mousedown", start);
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", stop);

clear.addEventListener("click", clearCanvas);

function start(e) {
    isDrawing = true;
    draw(e);
}
function draw(e) {
    var x = e.clientX;
    var y = e.clientY;
    if (!isDrawing) return;
    ctx.lineWidth = stroke_weight.value;
    ctx.lineCap = "round";
    ctx.strokeStyle = stroke_color.value;

    ctx.lineTo(x, y);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x, y);
}
function stop() {
    isDrawing = false;
    ctx.beginPath();
}

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

window.addEventListener("resize", resizeCanvas);

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

resizeCanvas();
