import styles from "../../Stylesheets/Comments.module.css";
import { useState, useEffect } from "react";
import { getComments } from "../../Utils/Api-Calls";
import timeConv from "../../Utils/Time-Conversion";
import PostComment from "./Post-Comment";
import DeleteComment from "./Delete-Comment";

const Comments = ({ review_id }) => {
  const [comments, setComments] = useState([]);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    getComments(review_id).then((commentData) => {
      setComments(commentData);
    });
  }, [review_id, sent]);

  if (comments.length === 0)
    return (
      <>
        <PostComment
          sent={sent}
          setSent={setSent}
          review_id={review_id}
        ></PostComment>
        <p className={styles.no__comments}>There are no comments as of yet.</p>
      </>
    );

  return (
    <ul className={styles.comment__list}>
      <PostComment
        className={styles.comment__list__item}
        sent={sent}
        setSent={setSent}
        review_id={review_id}
      ></PostComment>
      {comments.map((comment) => {
        return (
          <li
            className={styles.comment__list__item}
            key={comment.comment_id + comment.author}
          >
            <h4>{comment.body}</h4>
            <p>Comment made by: {comment.author}</p>
            <p>Created at: {timeConv(comment.created_at)}</p>
            <DeleteComment
              owner={comment.author}
              comment_id={comment.comment_id}
              sent={sent}
              setSent={setSent}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default Comments;
