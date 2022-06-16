import styles from "../Stylesheets/Comments.module.css";
import { useState, useEffect } from "react";
import { getComments } from "../Utils/Api-Calls";
import timeConv from "../Utils/Time-Conversion";

const Comments = ({ review_id }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments(review_id).then((commentData) => {
      setComments(commentData);
    });
  }, [review_id]);

  if (comments.length === 0)
    return (
      <p className={styles.no__comments}>There are no comments as of yet.</p>
    );

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
