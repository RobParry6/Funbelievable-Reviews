import axios from "axios";

const apiCall = axios.create({
  baseURL: "https://funbelivable-reviews.herokuapp.com/api",
});

export const getReviews = (category, sort_by, order) => {
  return apiCall
    .get("/reviews", { params: { category, sort_by, order } })
    .then(({ data: { reviews } }) => {
      return reviews;
    });
};

export const getCategories = () => {
  return apiCall.get("/categories").then(({ data }) => {
    return data.categories;
  });
};

export const getIndividualReview = (review_id) => {
  return apiCall.get(`/reviews/${review_id}`).then(({ data: { review } }) => {
    return review;
  });
};

export const patchEndorsements = (review_id, numberToIncrement) => {
  return apiCall.patch(`/reviews/${review_id}`, {
    inc_votes: numberToIncrement,
  });
};

export const getComments = (review_id) => {
  return apiCall.get(`/reviews/${review_id}/comments`).then(({ data }) => {
    return data.comments;
  });
};

export const postComment = (review_id, user_name, body) => {
  return apiCall.post(`/reviews/${review_id}/comments`, { user_name, body });
};

export const deleteComment = (comment_id) => {
  return apiCall.delete(`/comments/${comment_id}`);
};
