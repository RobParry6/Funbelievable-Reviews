import styles from "../Stylesheets/Endorsements.module.css";
import { useState, useEffect } from "react";
import { patchEndorsements, getIndividualReview } from "../Utils/Api-Calls";

const Endorsements = ({ endorsements, review_id }) => {
  const [currentEndorsements, setCurrentEndorsements] = useState(endorsements);
  const [error, setError] = useState(null);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    getIndividualReview(review_id).then(({ votes }) => {
      setCurrentEndorsements(votes);
    });
  }, [review_id]);

  const handleClick = ({ target }) => {
    target.disabled = true;
    setClicked(true);
    setCurrentEndorsements(
      (currentEndorsements) => currentEndorsements + +target.value
    );
    patchEndorsements(review_id, +target.value).catch((error) => {
      setCurrentEndorsements(
        (currentEndorsements) => currentEndorsements - +target.value
      );
      setError(
        "Your endorsement of this review has not acsecnded to the ether, please try again."
      );
    });
  };

  if (error) return <p>{error}</p>;
  return (
    <>
      <p>
        Current Endorsement Count: <b>{currentEndorsements}</b>
      </p>
      <button onClick={handleClick} value={1}>
        Endorse this Review
      </button>
      <button onClick={handleClick} value={-1}>
        Unendorse this Review
      </button>
    </>
  );
};

export default Endorsements;
