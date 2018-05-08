var c = document.getElementById('myCanvas');
var ctx = c.getContext('2d');

c.width = 1000;
c.height = window.innerHeight * window.devicePixelRatio;

var X = c.width / 2;
var Y = c.height / 2;

const getRadians = degrees => {
    return (degrees - 90) * (Math.PI / 180);
};

function drawNumbers() {
    ctx.beginPath();
    ctx.font = '60px Comic Sans';
    ctx.fillText('12', X - 25, Y - 300);
    ctx.fillText('3', X + 300, Y + 25);
    ctx.fillText('6', X - 15, Y + 325);
    ctx.fillText('9', X - 325, Y + 25);
    ctx.arc(X, Y, 270, 0, 6.28319);
    ctx.lineWidth = 5;
    ctx.stroke();
    ctx.closePath();
}

function drawHours(hours) {
    ctx.beginPath();
    if (hours > 12) {
        hour = hours - 12;
    }
    ctx.arc(X, Y, 200, getRadians(0), getRadians(hour * 30));
    ctx.lineWidth = 50;
    ctx.stroke();
    ctx.closePath();
}

function drawMinutes(minutes) {
    ctx.beginPath();
    ctx.arc(X, Y, 140, getRadians(0), getRadians(minutes * 6));
    ctx.lineWidth = 50;
    ctx.stroke();
    ctx.closePath();
}

function drawSeconds(seconds) {
    ctx.beginPath();
    ctx.arc(X, Y, 70, getRadians(0), getRadians(seconds * 6));
    ctx.lineWidth = 50;
    ctx.stroke();
    ctx.closePath();
}

function draw() {
    var today = new Date();
    var hours = today.getHours();
    var minutes = today.getMinutes();
    var seconds = today.getSeconds();

    ctx.clearRect(0, 0, c.width, c.height);

    drawNumbers();
    drawHours(hours);
    drawMinutes(minutes);
    drawSeconds(seconds);
}

setInterval(draw, 1000);
