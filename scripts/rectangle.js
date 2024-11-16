const coordinates = {
  blueRectX: 0,
  blueRectY: 0,
  redRectX: 0,
  redRectY: 0,
  greenRectX: 0,
  greenRectY: 0,
};

export function updateCoordinates(coordinate, value) {
  coordinates[coordinate] = value;
}

export const coordinateNames = {
  blueRectX: "blueRectX",
  blueRectY: "blueRectY",
  redRectX: "redRectX",
  redRectY: "redRectY",
  greenRectX: "greenRectX",
  greenRectY: "greenRectY",
};

const coordinateIds = {
  blueRectX: "67387e8ec897d0002c0f69b8",
  blueRectY: "67387e97c897d0002c0f69bd",
  redRectX: "67387ea2c897d0002c0f69c2",
  redRectY: "67387eaac897d0002c0f69c7",
  greenRectX: "67387eb2c897d0002c0f69cc",
  greenRectY: "67387ebdc897d0002c0f69d1",
};

const blueRectSpeed = 6;
const redRectSpeed = 5;
const greenRectSpeed = 4;
const rectWidth = 200;
const rectHeight = 100;

export function addRectXY(coordinate, value, connection) {
  const newValue = coordinates[coordinate] + value;

  const document = {
    _id: coordinateIds[coordinate],
    value: newValue,
  };

  console.log("coordinates[coordinate]: ", coordinates[coordinate]);
  console.log("newValue: ", newValue);

  if (coordinates[coordinate] !== newValue) connection.patch(document);
}

export function setRectXY(coordinate, value, connection) {
  const document = {
    _id: coordinateIds[coordinate],
    value,
  };

  console.log(value);
  if (coordinates[coordinate] !== value) connection.patch(document);
}

function preventOutOfBounds(rectX, rectY) {
  if (rectX < 0) setRectXY(rectX, 0, connection);
  if (rectY < 0) setRectXY(rectY, 0, connection);
  if (rectX + rectWidth > window.innerWidth) setRectXY(rectX, window.innerWidth - rectWidth, connection);
  if (rectY + rectHeight > window.innerHeight) setRectXY(rectY, window.innerWidth - rectWidth, connection);
  return { rectX, rectY };
}

export function moveRectangle(keys, connection) {
  if (keys["ArrowRight"]) addRectXY(coordinateNames.blueRectX, blueRectSpeed, connection);
  if (keys["ArrowLeft"]) addRectXY(coordinateNames.blueRectX, -blueRectSpeed, connection);
  if (keys["ArrowUp"]) addRectXY(coordinateNames.blueRectY, -blueRectSpeed, connection);
  if (keys["ArrowDown"]) addRectXY(coordinateNames.blueRectY, blueRectSpeed, connection);
  if (keys["d"]) addRectXY(coordinateNames.redRectX, redRectSpeed, connection);
  if (keys["a"]) addRectXY(coordinateNames.redRectX, -redRectSpeed, connection);
  if (keys["w"]) addRectXY(coordinateNames.redRectY, -redRectSpeed, connection);
  if (keys["s"]) addRectXY(coordinateNames.redRectY, redRectSpeed, connection);
  if (keys["l"]) addRectXY(coordinateNames.greenRectX, greenRectSpeed, connection);
  if (keys["j"]) addRectXY(coordinateNames.greenRectX, -greenRectSpeed, connection);
  if (keys["i"]) addRectXY(coordinateNames.greenRectY, -greenRectSpeed, connection);
  if (keys["k"]) addRectXY(coordinateNames.greenRectY, greenRectSpeed, connection);

  preventOutOfBounds(coordinates.blueRectX, coordinates.blueRectY);
  preventOutOfBounds(coordinates.redRectX, coordinates.redRectY);
  preventOutOfBounds(coordinates.greenRectX, coordinates.greenRectY);
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
