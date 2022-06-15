import styles from "../Stylesheets/Individual-Review.module.css";
import { useState, useEffect } from "react";
import { getIndividualReview } from "../Utils/Api-Calls";
import { useParams } from "react-router-dom";
import timeConv from "../Utils/Time-Conversion";
import GridLoader from "react-spinners/GridLoader";

const Review = () => {
  const [review, setReview] = useState({
    created_at: "2021-01-18T10:01:41.251Z",
  });
  const [loading, setLoading] = useState(true);
  const { review_id } = useParams();
  const timeStamp = timeConv(review.created_at);

  useEffect(() => {
    getIndividualReview(review_id).then((reviewData) => {
      setReview(reviewData);
      setLoading(false);
    });
  }, [review_id]);

  if (loading) {
    return (
      <div className={styles.loading__spinner}>
        <GridLoader color="teal" size={25} />
        <p>Please Wait</p>
      </div>
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
        <p>
          Endorsements: <b>{review.votes}</b>
        </p>
      </section>
    </main>
  );
};

export default Review;