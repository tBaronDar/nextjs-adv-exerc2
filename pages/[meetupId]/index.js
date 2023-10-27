import MeetupDetails from "@/components/meetups/MeetupDetails";

//The folder is dynamically named.
function DetailsPage(props) {
  return (
    <MeetupDetails
      image="https://www.currencies4you.com/wp-content/uploads/2018/09/AdobeStock_33823355.jpg"
      title="Some title"
      address="Some street 54, blaabla city"
      description="A very spacial meetup"
    />
  );
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [{ params: { meetupId: "m1" } }, { params: { meetupId: "m2" } }],
  };
}
export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  console.log(meetupId);

  return {
    props: {
      meetupData: {
        image:
          "https://www.currencies4you.com/wp-content/uploads/2018/09/AdobeStock_33823355.jpg",
        title: "Some title",
        address: "Some street 54, blaabla city",
        description: "A very spacial meetup",
      },
    },
  };
}

export default DetailsPage;
