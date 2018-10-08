let can1;
let can2;
let ctx1;
let ctx2;
let lastTime;
let duration;
let imgPic;
let canWidth;
let canHeight;
var ane;

document.body.onload = function () {
    init();
}

function init() {
    can1 = document.getElementById("canvas1");//上层 1 鱼
    can2 = document.getElementById("canvas2");//下层 0 背景
    ctx1 = can1.getContext('2d');
    ctx2 = can2.getContext('2d');

    imgPic = new Image();
    imgPic.src = "./src/background.jpg";

    canWidth = can2.width;
    canHeight = can2.height;

    duration = 0;
    lastTime = new Date().getTime();

    ane = new aneObj();
    ane.init();

    gameLoop();
}

function gameLoop() {
    window.requestAnimFrame(gameLoop);

    const now = new Date().getTime();
    duration = now - lastTime;
    lastTime = now;

    drawBg();
    ane.draw();
}