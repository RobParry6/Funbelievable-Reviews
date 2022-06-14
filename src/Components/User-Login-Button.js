import { useContext } from "react";
import { UserContext } from "../Contexts/UserContext";
import styles from "../Stylesheets/User-Login-Button.css";

const UserLoginButton = () => {
  const { user, setUser } = useContext(UserContext);

  const handleClick = () => {
    setUser({
      username: "bainesface",
      name: "sarah",
      avatar_url: "https://avatars2.githubusercontent.com/u/24394918?s=400&v=4",
    });
  };

  if (user.username)
    return <p className={styles.loggedInUser}>Current User: {user.username}</p>;
  return (
    <button id={styles.header__button} onClick={handleClick}>
      Sign In
    </button>
  );
};

export default UserLoginButton;
