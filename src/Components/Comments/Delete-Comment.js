import { useContext } from "react";
import { UserContext } from "../../Contexts/UserContext";
import { deleteComment } from "../../Utils/Api-Calls";

const DeleteComment = ({ comment_id, owner, sent, setSent }) => {
  const { loggedInuser } = useContext(UserContext);

  const handleClick = () => {
    return deleteComment(comment_id).then(() => {
      sent === true ? setSent(false) : setSent(true);
    });
  };

  if (
    owner === loggedInuser.username &&
    loggedInuser.username !== "Not Logged In"
  ) {
    return <button onClick={handleClick}>Delete Me!</button>;
  }
};

export default DeleteComment;
