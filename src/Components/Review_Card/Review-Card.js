import styles from "../../Stylesheets/Review-Card.module.css";
import timeConv from "../../Utils/Time-Conversion";
import ReviewCardTitle from "./Review-Card-Title";
import Endorsements from "../Endorsements";
import Comments from "../Comments/Comments";
import { useState } from "react";

const ReviewCard = ({ review }) => {
  const [clicked, setClicked] = useState(false);
  const timeStamp = timeConv(review.created_at);

  return (
    <li id={styles.review__list__item} key={review.title}>
      <ReviewCardTitle review={review}></ReviewCardTitle>
      <section className={styles.review__card__text}>
        <section id={styles.info__box}>
          <p>
            Review by: <b>{review.owner}</b>
          </p>
          <p>
            Created at: {timeStamp[0]} on {timeStamp[1]}
          </p>
          <Endorsements
            review_id={review.review_id}
            endorsements={review.votes}
            owner={review.owner}
          ></Endorsements>
        </section>
        {/* 
        <button
          onClick={() => {
            setClicked(true);
          }}
        >
          See Comments
        </button> */}
        <Comments review_id={review.review_id}></Comments>
      </section>
    </li>
  );
};

export default ReviewCard;
