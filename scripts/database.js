import * as Bucket from "@spica-devkit/bucket";
import { coordinateNames, updateCoordinates } from "./rectangle";

const apikey = "465e18lyoj8x26";
const publicUrl = "https://mava-test-79ed5.hq.spicaengine.com/api";

export function initializeDB() {
  Bucket.initialize({ apikey, publicUrl });
}

const bucketId = "6696887f13d82e002ccb8aa6";

export function listenForChanges(req, res) {
  initializeDB();

  const subscription = Bucket.data.realtime.getAll(bucketId).subscribe(
    (data) => {
      console.log("Data updated:", data);
      data.forEach((item) => {
        updateCoordinates(item.key, item.value);
      });
    },
    (error) => {
      console.error("Error with real-time subscription:", error);
      res.status(500).send("Error establishing real-time updates.");
    }
  );

  setTimeout(() => subscription.unsubscribe(), 600000); // 600,000 ms = 10 minutes
}

export function updateBucket() {
  initializeDB();
  const connection = Bucket.data.realtime.getAll(bucketId);
  connection.subscribe();
  return connection;
}
