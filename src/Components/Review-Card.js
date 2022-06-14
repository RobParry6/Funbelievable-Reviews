import styles from "../Stylesheets/Review-Card.module.css";
import timeConv from "../Utils/Time-Conversion";

const ReviewCard = ({ review }) => {
  const timeStamp = timeConv(review.created_at);

  return (
    <li id={styles.review__list__item} key={review.title}>
      <h3>{review.title}</h3>
      <img
        className={styles.review__list__img}
        src={review.review_img_url}
        alt={review.title}
      ></img>
      <p>
        Review by: <b>{review.owner}</b>
      </p>
      <p>
        Created at: {timeStamp[0]} on {timeStamp[1]}
      </p>
      <p>
        Endorsements: <b>{review.votes}</b>
      </p>
    </li>
  );
};

export default ReviewCard;
