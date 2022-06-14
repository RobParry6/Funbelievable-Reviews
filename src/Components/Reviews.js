import { useState, useEffect } from "react";
import getReviews from "../Utils/Api-Calls";
import styles from "../Stylesheets/Review-List.module.css";
import GridLoader from "react-spinners/GridLoader";
import ReviewCard from "./Review-Card";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getReviews().then((reviewData) => {
      setReviews(reviewData);
      setLoading(false);
    });
  }, [setReviews]);

  if (loading) {
    return (
      <div className={styles.loading__spinner}>
        <GridLoader color="teal" size={25} />
      </div>
    );
  }
  return (
    <ul id={styles.review__list}>
      {reviews.map((review) => {
        return <ReviewCard review={review}></ReviewCard>;
      })}
    </ul>
  );
};

export default Reviews;
