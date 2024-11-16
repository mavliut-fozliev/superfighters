import { drawBlueRect, drawRedRect, drawGreenRect, moveRectangle } from "./rectangle.js";

const keys = {};

function draw(canvas, ctx) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBlueRect(ctx);
  drawRedRect(ctx);
  drawGreenRect(ctx);
  moveRectangle(keys);
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

main();
