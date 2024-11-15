let blueRectX = 50;
let blueRectY = 50;
let redRectX = 900;
let redRectY = 400;
const blueRectSpeed = 6;
const redRectSpeed = 5;
const rectWidth = 200;
const rectHeight = 100;

const keys = {};

function preventOutOfBounds(rectX, rectY) {
  if (rectX < 0) rectX = 0;
  if (rectY < 0) rectY = 0;
  if (rectX + rectWidth > window.innerWidth) rectX = window.innerWidth - rectWidth;
  if (rectY + rectHeight > window.innerHeight) rectY = window.innerHeight - rectHeight;
  return { rectX, rectY };
}

function moveRectangle() {
  if (keys["ArrowRight"]) blueRectX += blueRectSpeed;
  if (keys["ArrowLeft"]) blueRectX -= blueRectSpeed;
  if (keys["ArrowUp"]) blueRectY -= blueRectSpeed;
  if (keys["ArrowDown"]) blueRectY += blueRectSpeed;
  if (keys["d"]) redRectX += redRectSpeed;
  if (keys["a"]) redRectX -= redRectSpeed;
  if (keys["w"]) redRectY -= redRectSpeed;
  if (keys["s"]) redRectY += redRectSpeed;

  const blueRect = preventOutOfBounds(blueRectX, blueRectY);
  blueRectX = blueRect.rectX;
  blueRectY = blueRect.rectY;

  const redRect = preventOutOfBounds(redRectX, redRectY);
  redRectX = redRect.rectX;
  redRectY = redRect.rectY;
}

function draw(canvas, ctx) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "blue";
  ctx.fillRect(blueRectX, blueRectY, rectWidth, rectHeight);
  ctx.fillStyle = "red";
  ctx.fillRect(redRectX, redRectY, rectWidth, rectHeight);
  moveRectangle();
}

function resizeCanvas(canvas, ctx) {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  draw(canvas, ctx);
}

function addResizeEventListener(canvas, ctx) {
  window.addEventListener("resize", () => resizeCanvas(canvas, ctx));
}

function addKeyboardEventListeners() {
  window.addEventListener("keydown", (event) => {
    keys[event.key] = true;
    console.log(event.key);
  });

  window.addEventListener("keyup", (event) => {
    keys[event.key] = false;
  });
}

function animate(canvas, ctx) {
  draw(canvas, ctx);
  requestAnimationFrame(() => animate(canvas, ctx));
}

function main() {
  console.log("Game Start!");

  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");

  resizeCanvas(canvas, ctx);
  addResizeEventListener(canvas, ctx);
  addKeyboardEventListeners();

  animate(canvas, ctx);
}
