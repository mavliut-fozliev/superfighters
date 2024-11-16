import * as Bucket from "@spica-devkit/bucket";

const apikey = "465e18lyoj8x26";
const publicUrl = "https://mava-test-79ed5.hq.spicaengine.com/api";

export function initializeDB() {
  Bucket.initialize({ apikey, publicUrl });
}

export function getData(req, res) {
  Bucket.initialize({ apikey, publicUrl });
  return Bucket.data.realtime.getAll("6696887f13d82e002ccb8aa6");
}
