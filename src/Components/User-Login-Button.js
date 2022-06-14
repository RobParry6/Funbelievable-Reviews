import { useContext } from "react";
import { UserContext } from "../Contexts/UserContext";
import styles from "../Stylesheets/User-Login-Button.module.css";

const UserLoginButton = () => {
  const { loggedInuser, setLoggedInUser } = useContext(UserContext);

  const handleClick = () => {
    setLoggedInUser({
      username: "bainesface",
      name: "sarah",
      avatar_url: "https://avatars2.githubusercontent.com/u/24394918?s=400&v=4",
    });
  };

  if (loggedInuser.username !== "Not Logged In")
    return (
      <p className={styles.loggedInUser}>
        Current User: {loggedInuser.username}
      </p>
    );
  return (
    <button id={styles.header__button} onClick={handleClick}>
      Sign In
    </button>
  );
};

export default UserLoginButton;
