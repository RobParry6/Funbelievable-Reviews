import styles from "../Stylesheets/Endorsements.module.css";
import { useContext } from "react";
import { UserContext } from "../Contexts/UserContext";

const EndorsementButton = ({ handleClick, owner }) => {
  const { loggedInuser, setLoggedInUser } = useContext(UserContext);

  if (
    owner !== loggedInuser.username &&
    loggedInuser.username !== "Not Logged In"
  )
    return (
      <button id={styles.endorsement__button} onClick={handleClick} value={1}>
        Endorse this Review
      </button>
    );
};

export default EndorsementButton;
