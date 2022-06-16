import styles from "../Stylesheets/Comments.module.css";
import { useState, useEffect } from "react";
import { getComments } from "../Utils/Api-Calls";
import timeConv from "../Utils/Time-Conversion";

const Comments = ({ review_id }) => {
  const [comments, setComments] = useState([
    {
      body: "I didn't know dogs could play games",
      votes: 10,
      author: "philippaclaire9",
      review_id: 3,
      created_at: "2021-01-18T10:01:41.251Z",
    },
  ]);

  useEffect(() => {
    getComments(review_id).then((commentData) => {
      setComments(commentData);
    });
  }, [review_id]);

  return (
    <ul className={styles.comment__list}>
      {comments.map((comment) => {
        return (
          <li
            className={styles.comment__list__item}
            key={comment.comment_id + comment.author}
          >
            <h4>{comment.body}</h4>
            <p>Comment made by: {comment.author}</p>
            <p>Created at: {timeConv(comment.created_at)}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default Comments;
