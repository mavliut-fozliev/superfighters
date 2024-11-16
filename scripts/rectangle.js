const coordinates = {
  blueRectX: 50,
  blueRectY: 50,
  redRectX: 900,
  redRectY: 400,
  greenRectX: 400,
  greenRectY: 200,
};
const coordinateNames = {
  blueRectX: "blueRectX",
  blueRectY: "blueRectY",
  redRectX: "redRectX",
  redRectY: "redRectY",
  greenRectX: "greenRectX",
  greenRectY: "greenRectY",
};
const blueRectSpeed = 6;
const redRectSpeed = 5;
const greenRectSpeed = 4;
const rectWidth = 200;
const rectHeight = 100;

export function addRectXY(coordinate, value) {
  coordinates[coordinate] += value;
}

export function setRectXY(coordinate, value) {
  coordinates[coordinate] = value;
}

function preventOutOfBounds(rectX, rectY) {
  if (rectX < 0) rectX = 0;
  if (rectY < 0) rectY = 0;
  if (rectX + rectWidth > window.innerWidth) rectX = window.innerWidth - rectWidth;
  if (rectY + rectHeight > window.innerHeight) rectY = window.innerHeight - rectHeight;
  return { rectX, rectY };
}

export function moveRectangle(keys) {
  if (keys["ArrowRight"]) addRectXY(coordinateNames.blueRectX, blueRectSpeed);
  if (keys["ArrowLeft"]) addRectXY(coordinateNames.blueRectX, -blueRectSpeed);
  if (keys["ArrowUp"]) addRectXY(coordinateNames.blueRectY, -blueRectSpeed);
  if (keys["ArrowDown"]) addRectXY(coordinateNames.blueRectY, blueRectSpeed);
  if (keys["d"]) addRectXY(coordinateNames.redRectX, redRectSpeed);
  if (keys["a"]) addRectXY(coordinateNames.redRectX, -redRectSpeed);
  if (keys["w"]) addRectXY(coordinateNames.redRectY, -redRectSpeed);
  if (keys["s"]) addRectXY(coordinateNames.redRectY, redRectSpeed);
  if (keys["l"]) addRectXY(coordinateNames.greenRectX, greenRectSpeed);
  if (keys["j"]) addRectXY(coordinateNames.greenRectX, -greenRectSpeed);
  if (keys["i"]) addRectXY(coordinateNames.greenRectY, -greenRectSpeed);
  if (keys["k"]) addRectXY(coordinateNames.greenRectY, greenRectSpeed);

  const blueRect = preventOutOfBounds(coordinates.blueRectX, coordinates.blueRectY);
  setRectXY(coordinateNames.blueRectX, blueRect.rectX);
  setRectXY(coordinateNames.blueRectY, blueRect.rectY);

  const redRect = preventOutOfBounds(coordinates.redRectX, coordinates.redRectY);
  setRectXY(coordinateNames.redRectX, redRect.rectX);
  setRectXY(coordinateNames.redRectY, redRect.rectY);

  const greenRect = preventOutOfBounds(coordinates.greenRectX, coordinates.greenRectY);
  setRectXY(coordinateNames.greenRectX, greenRect.rectX);
  setRectXY(coordinateNames.greenRectY, greenRect.rectY);
}

export function drawBlueRect(ctx) {
  ctx.fillStyle = "blue";
  ctx.fillRect(coordinates.blueRectX, coordinates.blueRectY, rectWidth, rectHeight);
}

export function drawRedRect(ctx) {
  ctx.fillStyle = "red";
  ctx.fillRect(coordinates.redRectX, coordinates.redRectY, rectWidth, rectHeight);
}

export function drawGreenRect(ctx) {
  ctx.fillStyle = "green";
  ctx.fillRect(coordinates.greenRectX, coordinates.greenRectY, rectWidth, rectHeight);
}
