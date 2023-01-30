let canvas;
let pos;
var button = document.getElementById("myButton");

function setup() {
  let canvasHolder = document.getElementById("sketch-holder");
  canvas = createCanvas(canvasHolder.clientWidth, canvasHolder.clientWidth);
  canvas.parent("sketch-holder");
  start();
}

function draw() {
  for (let i = 0; i < 100; i++) {
    pos.add(p5.Vector.random2D());
    pos.x = constrain(pos.x, 0, width);
    pos.y = constrain(pos.y, 0, height);
    point(pos.x, pos.y);
  }
}

window.onresize = function () {
  let canvasHolder = document.getElementById("sketch-holder");
  resizeCanvas(canvasHolder.clientWidth, canvasHolder.clientWidth);
  createRects();
}

document.getElementById("myButton").onclick = function(){
    start();
}

function start() {
  background(255);
  pos = createVector(random(0, width), random(0, height));
}