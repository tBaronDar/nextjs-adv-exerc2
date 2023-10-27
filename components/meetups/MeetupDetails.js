import styles from "./MeetupDetails.module.css";

function MeetupDetails(props) {
  return (
    <section className={styles.detail}>
      <img
        src="https://www.currencies4you.com/wp-content/uploads/2018/09/AdobeStock_33823355.jpg"
        alt="Image holder"
      />
      <h1>{props.title}</h1>
      <address>{props.address}</address>
      <p>{props.description}</p>
    </section>
  );
}

export default MeetupDetails;
