import axios from "axios";

const apiCall = axios.create({
  baseURL: "https://funbelivable-reviews.herokuapp.com/api/",
});

const getReviews = () => {
  return apiCall.get("reviews").then(({ data: { reviews } }) => {
    return reviews;
  });
};

export default getReviews;
