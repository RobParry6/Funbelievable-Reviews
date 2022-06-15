import styles from "../Stylesheets/Review-Card.module.css";
import timeConv from "../Utils/Time-Conversion";
import { Link } from "react-router-dom";

const ReviewCard = ({ review }) => {
  const timeStamp = timeConv(review.created_at);

  return (
    <li id={styles.review__list__item} key={review.title}>
      <Link to={`/reviews/${review.review_id}`}>
        <h3
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
          {review.title}
        </h3>
      </Link>
      <img
        className={styles.review__list__img}
        src={review.review_img_url}
        alt={review.title}
      ></img>
      <section className={styles.review__card__text}>
        <p>
          Review by: <b>{review.owner}</b>
        </p>
        <p>
          Created at: {timeStamp[0]} on {timeStamp[1]}
        </p>
        <p>
          Endorsements: <b>{review.votes}</b>
        </p>
      </section>
    </li>
  );
};

export default ReviewCard;
