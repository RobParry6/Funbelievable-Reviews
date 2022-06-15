import { useState, useEffect } from "react";
import { getReviews, getCategories } from "../Utils/Api-Calls";
import styles from "../Stylesheets/Review-List.module.css";
import GridLoader from "react-spinners/GridLoader";
import ReviewCard from "./Review-Card";
import FilterBar from "./Filter-Bar";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([
    {
      description: "Players attempt to uncover each other's hidden role",
      slug: "Social deduction",
    },
  ]);
  const [category, setCategory] = useState("");

  useEffect(() => {
    getReviews(category).then((reviewData) => {
      setReviews(reviewData);
      setLoading(false);
    });
  }, [category]);

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
  return (
    <>
      <FilterBar categories={categories} setCategory={setCategory}></FilterBar>
      <ul id={styles.review__list}>
        {reviews.map((review) => {
          return <ReviewCard key={review.title} review={review}></ReviewCard>;
        })}
      </ul>
    </>
  );
};

export default Reviews;
