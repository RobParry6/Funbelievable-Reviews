import { useState, useEffect } from "react";
import { getReviews, getCategories } from "../Utils/Api-Calls";
import styles from "../Stylesheets/Review-List.module.css";
import GridLoader from "react-spinners/GridLoader";
import ReviewCard from "./Review_Card/Review-Card";
import FilterBar from "./Review_Card/Filter-Bar";
import { useSearchParams } from "react-router-dom";

const Reviews = () => {
  const [searchParams] = useSearchParams();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("");
  const [sortBy, setSortBy] = useState(
    searchParams.get("sort_by") || "created_at"
  );
  const [order, setOrder] = useState(searchParams.get("order") || "DESC");
  const [error, setError] = useState(false);

  useEffect(() => {
    getReviews(category, sortBy, order)
      .then((reviewData) => {
        setReviews(reviewData);
        setLoading(false);
      })
      .catch(() => {
        console.log("here");
        setError(true);
        setLoading(false);
      });
  }, [category, sortBy, order, error]);

  useEffect(() => {
    getCategories().then((categoryData) => {
      setCategories(categoryData);
    });
  }, []);

  if (loading) {
    return (
      <div className={styles.loading__spinner}>
        <GridLoader color="teal" size={25} />
      </div>
    );
  }
  if (error) {
    return (
      <p className={styles.error__message}>
        Search criteria is not supported, please try again.
      </p>
    );
  }
  return (
    <>
      <FilterBar
        categories={categories}
        setCategory={setCategory}
        setSortBy={setSortBy}
        setOrder={setOrder}
      ></FilterBar>
      <ul id={styles.review__list}>
        {reviews.map((review) => {
          return <ReviewCard key={review.title} review={review}></ReviewCard>;
        })}
      </ul>
    </>
  );
};

export default Reviews;
