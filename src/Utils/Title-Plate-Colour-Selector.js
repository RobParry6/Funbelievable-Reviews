export const getColour = (votes, styles) => {
  return votes >= 25
    ? styles.title__gold
    : votes >= 10
    ? styles.title__silver
    : votes >= 5
    ? styles.title__bronze
    : styles.title__regular;
};
