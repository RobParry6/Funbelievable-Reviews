import styles from "../Stylesheets/Individual-Review.module.css";
import { useState, useEffect } from "react";
import { getIndividualReview } from "../Utils/Api-Calls";
import { useParams } from "react-router-dom";
import timeConv from "../Utils/Time-Conversion";
import Endorsements from "./Endorsements";
import GridLoader from "react-spinners/GridLoader";

const Review = () => {
  const [review, setReview] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [timeStamp, setTimeStamp] = useState([]);
  const { review_id } = useParams();

  useEffect(() => {
    getIndividualReview(review_id)
      .then((reviewData) => {
        setReview(reviewData);
        setLoading(false);
        setTimeStamp(timeConv(reviewData.created_at));
      })
      .catch((err) => {
        if (err) {
          setError(true);
          setLoading(false);
        }
      });
  }, [review_id, setError]);

  if (loading) {
    return (
      <div id={styles.individual__review} className={styles.loading__spinner}>
        <GridLoader color="teal" size={25} />
        <p>Please Wait</p>
      </div>
    );
  }
  if (error) {
    return (
      <p id={styles.individual__review}>
        The review does not exist in the data base.
      </p>
    );
  }
  return (
    <main id={styles.individual__review}>
      <h3
        id={styles.individual__card__title}
        className={
          review.votes >= 25
            ? styles.title__gold
            : review.votes >= 10
            ? styles.title__silver
            : review.votes >= 5
            ? styles.title__bronze
            : styles.title__regular
        }
      >
        {" "}
        {review.title}
      </h3>
      <section>
        <p>
          Review created by: <b>{review.owner}</b>
        </p>
        <img
          className={styles.review__list__img}
          src={review.review_img_url}
          alt={review.title}
        ></img>
        <p>
          Game designer for {review.title} is: {review.designer}
        </p>
        <p>
          {review.title} is a game of {review.category}
        </p>
        <p>
          Created at: {timeStamp[0]} on {timeStamp[1]}
        </p>
        <Endorsements
          review_id={review.review_id}
          endorsements={review.votes}
        ></Endorsements>
      </section>
    </main>
  );
};

export default Review;
