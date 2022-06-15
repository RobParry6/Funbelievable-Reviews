import styles from "../Stylesheets/Individual-Review.module.css";
import { useState, useEffect } from "react";
import { getIndividualReview } from "../Utils/Api-Calls";
import { useParams } from "react-router-dom";
import timeConv from "../Utils/Time-Conversion";

const Review = () => {
  const [review, setReview] = useState({
    title: "Ultimate Werewolf",
    designer: "Akihisa Okui",
    owner: "bainesface",
    review_img_url:
      "https://www.golenbock.com/wp-content/uploads/2015/01/placeholder-user.png",
    review_body: "We couldn't find the werewolf!",
    category: "social deduction,",
    created_at: "2021-01-18T10:01:41.251Z",
    votes: 5,
  });
  const { review_id } = useParams();
  const timeStamp = timeConv(review.created_at);

  useEffect(() => {
    getIndividualReview(review_id).then((reviewData) => {
      setReview(reviewData);
    });
  }, [review_id]);

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
