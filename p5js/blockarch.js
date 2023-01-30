let canvas;
var button = document.getElementById("myButton");


function setup() {
  let canvasHolder = document.getElementById("sketch-holder");
  canvas = createCanvas(canvasHolder.clientWidth, canvasHolder.clientWidth);
  canvas.parent("sketch-holder");

  //Rect Options
  rectMode(CORNERS);
  fill(255);
  stroke(0);
  strokeWeight(1);
  createRects();

}

function draw() {}

window.onresize = function () {
  let canvasHolder = document.getElementById("sketch-holder");
  resizeCanvas(canvasHolder.clientWidth, canvasHolder.clientWidth);
  createRects();
}

document.getElementById("myButton").onclick = function(){
    createRects();
}

function createRects() {
  let nMain = random(5, 30);
  let nSub = random(500,1000);
  background(255);
  //Main Rects
  for (let i = 0; i < nMain; i++) {
    //Random Points on Canvas
    let a = createVector(random(0, width), random(0, height));
    let b = createVector(random(0, width), random(0, height));

    //Check Positions
    let aTemp = createVector(a.x, a.y);
    let bTemp = createVector(b.x, b.y);

    //Adjust Positions
    if (a.x >= b.x && a.y <= b.y) {
      aTemp = createVector(b.x, a.y);
      bTemp = createVector(a.x, b.y);
    } else if (a.x >= b.x && a.y >= b.y) {
      aTemp = createVector(b.x, b.y);
      bTemp = createVector(a.x, a.y);
    } else if (a.x <= b.x && a.y >= b.y) {
      aTemp = createVector(a.x, b.y);
      bTemp = createVector(b.x, a.y);
    }
    //Final mainRect
    a = createVector(aTemp.x, aTemp.y);
    b = createVector(bTemp.x, bTemp.y);
    rect(a.x, a.y, b.x, b.y);

    //Sub Rects
    for (let j = 0; j < nSub; j++) {
      let aSub = createVector(random(a.x, b.x), random(a.y, b.y));
      let bSub = createVector(random(a.x, b.x), random(a.y, b.y));
      rect(aSub.x, aSub.y, bSub.x, bSub.y);
    }
  }
}
