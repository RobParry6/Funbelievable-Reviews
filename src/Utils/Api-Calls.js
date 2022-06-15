import axios from "axios";

const apiCall = axios.create({
  baseURL: "https://funbelivable-reviews.herokuapp.com/api/",
});

export const getReviews = (category) => {
  return apiCall
    .get("reviews", { params: { category } })
    .then(({ data: { reviews } }) => {
      return reviews;
    });
};

export const getCategories = () => {
  return apiCall.get("categories").then(({ data }) => {
    return data.categories;
  });
};

export const getIndividualReview = (review_id) => {
  return apiCall.get(`reviews/${review_id}`).then(({ data: { review } }) => {
    return review;
  });
};
