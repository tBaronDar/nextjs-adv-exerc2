import MeetupList from "@/components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    image:
      "https://www.currencies4you.com/wp-content/uploads/2018/09/AdobeStock_33823355.jpg",
    title: "A first meetup in Lisbon",
    address: "main boulevard 24",
    description: "A meet up for poups",
  },
  {
    id: "m2",
    image: "https://epicbeatmag.com/wp-content/uploads/2020/12/alexandria.png",
    title: "A meetup in Alexandria",
    address: "main Street 108",
    description: "A meet up for poups",
  },
  {
    id: "m3",
    image:
      "https://th.bing.com/th/id/OIP.mYivwY6ApScubMIyM8wHuQHaE8?pid=ImgDet&rs=1",
    title: "A romantic meetup in Copenhagen.",
    address: "Jansen Str 55",
    description: "A meet up for trouts",
  },
  {
    id: "m4",
    image:
      "https://th.bing.com/th/id/OIP.pdYPN_0CZPp7z8Jn_wDeZQHaEr?pid=ImgDet&rs=1",
    title: "A meetup in Prague",
    address: "Corvinus Str 24",
    description: "A meet up for absinth",
  },
  {
    id: "m5",
    image:
      "https://th.bing.com/th/id/R.8eebb426358ecf3ffbf550abd7222314?rik=a8uHBLRNaxkNsw&pid=ImgRaw&r=0",
    title: "A meetup in Thessaloniki.",
    address: "Nikis bd 2",
    description: "A meet up for poups",
  },
];

function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

// export async function getServerSideProps(context){
//   const req = context.req;
//   const res = context.res;

//   //Fetch stuff from API.

//   return {
//     props:{meetups:DUMMY_MEETUPS}
//   }
// }

export async function getStaticProps() {
  //Fetch from api.

  return {
    props: { meetups: DUMMY_MEETUPS },
    revalidate: 100,
  };
}

export default HomePage;
