import MeetupDetails from "@/components/meetups/MeetupDetails";

import { MongoClient, ObjectId } from "mongodb";

//The folder is dynamically named.
function DetailsPage(props) {
  return (
    <MeetupDetails
      image={props.meetupData.image}
      title={props.meetupData.title}
      address={props.meetupData.address}
      description={props.meetupData.description}
    />
  );
}

export async function getStaticPaths() {
  //Fetch from api.
  //connect to mongodb
  const client = await MongoClient.connect(
    "mongodb+srv://thebaron:RourouHboubou@themis.mdjsoz3.mongodb.net/meetups?retryWrites=true&w=majority"
  );

  //get the db
  const db = client.db();

  //get the collection named meetups. if it doesn't exist it will be created.
  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();

  client.close();

  return {
    fallback: "blocking",
    paths: meetups.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })),
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  console.log(meetupId);
  //Fetch from api.
  //connect to mongodb
  const client = await MongoClient.connect(
    "mongodb+srv://thebaron:RourouHboubou@themis.mdjsoz3.mongodb.net/meetups?retryWrites=true&w=majority"
  );

  //get the db
  const db = client.db();

  //get the collection named meetups. if it doesn't exist it will be created.
  const meetupsCollection = db.collection("meetups");

  const selectedMeetup = await meetupsCollection.findOne({
    _id: new ObjectId(meetupId),
  });

  client.close();

  return {
    props: {
      meetupData: {
        title: selectedMeetup.title,
        image: selectedMeetup.image,
        address: selectedMeetup.address,
        description: selectedMeetup.description,
        id: selectedMeetup._id.toString(),
      },
    },
  };
}

export default DetailsPage;
