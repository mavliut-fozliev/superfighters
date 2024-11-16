import { initializeDB, listenForChanges, updateBucket } from "./database.js";
import { drawBlueRect, drawRedRect, drawGreenRect, moveRectangle } from "./rectangle.js";

const keys = {};

function draw(canvas, ctx, connection) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBlueRect(ctx);
  drawRedRect(ctx);
  drawGreenRect(ctx);
  moveRectangle(keys, connection);
}

function resizeCanvas(canvas, ctx, connection) {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  draw(canvas, ctx, connection);
}

function addResizeEventListener(canvas, ctx, connection) {
  window.addEventListener("resize", () => resizeCanvas(canvas, ctx, connection));
}

function addKeyboardEventListeners() {
  window.addEventListener("keydown", (event) => {
    keys[event.key] = true;
  });

  window.addEventListener("keyup", (event) => {
    keys[event.key] = false;
  });
}

function animate(canvas, ctx, connection) {
  draw(canvas, ctx, connection);
  requestAnimationFrame(() => animate(canvas, ctx, connection));
}

async function main() {
  console.log("Game Started!");
  initializeDB();
  listenForChanges();
  const connection = updateBucket();

  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");

  resizeCanvas(canvas, ctx, connection);
  addResizeEventListener(canvas, ctx, connection);
  addKeyboardEventListeners();

  animate(canvas, ctx, connection);
}

main();
