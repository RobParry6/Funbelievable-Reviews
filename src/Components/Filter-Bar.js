import styles from "../Stylesheets/Filter-Bar.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const FilterBar = ({ categories, setCategory }) => {
  const [selectedCatagory, setSelectedCategory] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    setCategory(selectedCatagory);
  };

  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <form className={styles.filter__bar__section} onSubmit={handleSubmit}>
      Categories
      <select onChange={handleChange} value={selectedCatagory}>
        <option className={styles.dropdown__element} value="">
          All Categories
        </option>
        {categories.map((category) => {
          return (
            <option
              className={styles.dropdown__element}
              key={category.slug}
              value={category.slug}
            >
              {category.slug.split("-").map((word) => {
                return word[0].toUpperCase() + word.slice(1) + " ";
              })}
            </option>
          );
        })}
      </select>
      <input type="submit" value="submit"></input>
    </form>
  );
};

export default FilterBar;
