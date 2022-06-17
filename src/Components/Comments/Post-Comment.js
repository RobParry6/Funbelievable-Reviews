import styles from "../../Stylesheets/Comments.module.css";
import { useState, useContext } from "react";
import { UserContext } from "../../Contexts/UserContext";
import { postComment } from "../../Utils/Api-Calls";

const PostComment = ({ review_id, sent, setSent }) => {
  const { loggedInuser } = useContext(UserContext);
  const [body, setBody] = useState("");
  const [error, setError] = useState(false);

  const handleChange = (event) => {
    setBody(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (body) {
      postComment(review_id, loggedInuser.username, body)
        .then(() => {
          setBody("");
          sent === true ? setSent(false) : setSent(true);
        })
        .catch(() => {
          setError(true);
        });
    }
  };

  if (error) return <p>User Not logged in</p>;
  if (loggedInuser.username !== "Not Logged In") {
    return (
      <li className={styles.comment__list__item}>
        <form onSubmit={handleSubmit}>
          <input id={styles.input} onChange={handleChange} value={body}></input>
          <button id={styles.add__comment__button}>Add Comment</button>
        </form>
      </li>
    );
  }
};

export default PostComment;
