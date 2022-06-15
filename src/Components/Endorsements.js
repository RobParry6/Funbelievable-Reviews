import styles from "../Stylesheets/Endorsements.module.css";
import { useState, useEffect } from "react";
import { patchEndorsements, getIndividualReview } from "../Utils/Api-Calls";

const Endorsements = ({ endorsements, review_id }) => {
  const [currentEndorsements, setCurrentEndorsements] = useState(endorsements);
  const [error, setError] = useState(null);

  useEffect(() => {
    getIndividualReview(review_id).then(({ votes }) => {
      setCurrentEndorsements(votes);
    });
  }, [review_id, currentEndorsements]);

  const handleClick = () => {
    setCurrentEndorsements((currentEndorsements) => currentEndorsements + 1);
    patchEndorsements(review_id, 1).catch((error) => {
      setCurrentEndorsements((currentEndorsements) => currentEndorsements - 1);
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
      <button onClick={handleClick}>Endorse this Review</button>
    </>
  );
};

export default Endorsements;
