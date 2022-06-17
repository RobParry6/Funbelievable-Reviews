import { useContext, useState, useEffect } from "react";
import { UserContext } from "../../Contexts/UserContext";
import styles from "../../Stylesheets/User-Login-Button.module.css";

const UserLoginButton = () => {
  const { loggedInuser, setLoggedInUser } = useContext(UserContext);

  const handleClick = () => {
    setLoggedInUser({
      username: "jessjelly",
      name: "Jess Jelly",
      avatar_url:
        "https://vignette.wikia.nocookie.net/mrmen/images/4/4f/MR_JELLY_4A.jpg/revision/latest?cb=20180104121141",
    });
  };
  const handleLogOut = () => {
    setLoggedInUser({
      username: "Not Logged In",
    });
  };

  if (loggedInuser.username !== "Not Logged In")
    return (
      <section id={styles.log__out__section}>
        <p className={styles.loggedInUser}>
          Current User: {loggedInuser.username}
        </p>
        <button id={styles.header__button} onClick={handleLogOut}>
          Sign OUt
        </button>
      </section>
    );
  return (
    <button id={styles.header__button} onClick={handleClick}>
      Sign In
    </button>
  );
};

export default UserLoginButton;
