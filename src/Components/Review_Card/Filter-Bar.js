import styles from "../../Stylesheets/Filter-Bar.module.css";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

const FilterBar = ({ categories, setCategory, setSortBy, setOrder }) => {
  let [searchParams] = useSearchParams();
  const [selectedCatagory, setSelectedCategory] = useState("");
  const [selectedSortBy, setSelectedSortBy] = useState(
    searchParams.get("sort_by") || "created_at"
  );
  const [selectedOrder, setSelectedOrder] = useState(
    searchParams.get("order") || "DESC"
  );
  const sortByTerms = ["created_at", "title", "designer", "owner", "category"];

  const handleSubmit = (event) => {
    event.preventDefault();
    setCategory(selectedCatagory);
    setSortBy(selectedSortBy);
    setOrder(selectedOrder);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleSortChange = (event) => {
    setSelectedSortBy(event.target.value);
  };

  const handleOrderChange = (event) => {
    setSelectedOrder(event.target.value);
  };

  if (selectedOrder === "asc") {
    setSelectedOrder("ASC");
  }

  return (
    <form className={styles.filter__bar__section} onSubmit={handleSubmit}>
      <section className={styles.filter__item}>
        <p>Categories</p>
        <select onChange={handleCategoryChange} value={selectedCatagory}>
          <option className={styles.dropdown__element} value="">
            All Categories
          </option>
          {categories.map((category, index) => {
            return (
              <option
                className={styles.dropdown__element}
                key={category.slug + index}
                value={category.slug}
              >
                {category.slug.split("-").map((word) => {
                  return (
                    word[0].toUpperCase() + word.slice(1, word.length) + " "
                  );
                })}
              </option>
            );
          })}
        </select>
      </section>
      <section className={styles.filter__item}>
        <p>Sort By</p>
        <select onChange={handleSortChange} value={selectedSortBy}>
          {sortByTerms.map((term, index) => {
            return (
              <option
                className={styles.dropdown__element}
                key={term + index}
                value={term}
              >
                {term.split("_").map((word) => {
                  return (
                    word[0].toUpperCase() + word.slice(1, word.length) + " "
                  );
                })}
              </option>
            );
          })}
        </select>
      </section>
      <section className={styles.filter__item}>
        <p>Order</p>
        <select onChange={handleOrderChange} value={selectedOrder}>
          <option className={styles.dropdown__element} value="DESC">
            Descending
          </option>
          <option className={styles.dropdown__element} value="ASC">
            Ascending
          </option>
        </select>
      </section>
      <section>
        <input
          id="filter__bar__submit__button"
          type="submit"
          value="submit"
        ></input>
      </section>
    </form>
  );
};

export default FilterBar;
