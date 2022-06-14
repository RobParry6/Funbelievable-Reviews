import { Link } from "react-router-dom";
import styles from "../Stylesheets/Header.module.css";

const Header = () => {
  return (
    <header>
      <Link id="Sign-In__button" to={"/"}>
        Sign In
      </Link>
      <h1>Funbelievable Reviews!</h1>
      <h2>Some witty tagline</h2>
    </header>
  );
};

export default Header;
