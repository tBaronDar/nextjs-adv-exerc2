import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    //connect to mongodb
    const client = await MongoClient.connect(
      "mongodb+srv://thebaron:RourouHboubou@themis.mdjsoz3.mongodb.net/meetups?retryWrites=true&w=majority"
    );

    //get the db
    const db = client.db();

    //get the collection named meetups. if it doesn't exist it will be created.
    const meetupsCollection = db.collection("meetups");

    //Insert document(=js object) in the collection
    const result = await meetupsCollection.insertOne(data);

    console.log(result);

    client.close();

    res.status(201).json({ message: "Meetup added to db." });
  }
}

export default handler;
