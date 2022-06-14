import styles from "../Stylesheets/Header.module.css";
import UserLoginButton from "./User-Login-Button";

const Header = () => {
  return (
    <header>
      <h1>Funbelievable Reviews!</h1>
      <h2>Some witty tagline</h2>
      <UserLoginButton></UserLoginButton>
    </header>
  );
};

export default Header;
