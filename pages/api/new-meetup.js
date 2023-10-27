import { MongoClient } from "mongodb";

function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const { title, image, address, description } = data;

    MongoClient.connect(
      "mongodb+srv://thebaron:iBrBGm3U4RF9O4Fy@themis.mdjsoz3.mongodb.net/meetups?retryWrites=true&w=majority"
    );
  }
}

export default handler;
