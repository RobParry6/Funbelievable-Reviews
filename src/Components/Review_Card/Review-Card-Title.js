import { Link } from "react-router-dom";
import styles from "../../Stylesheets/Review-Card.module.css";

const ReviewCardTitle = ({ review }) => {
  return (
    <>
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
    </>
  );
};

export default ReviewCardTitle;
