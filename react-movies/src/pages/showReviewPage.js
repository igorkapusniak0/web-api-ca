import React from "react";
import { useLocation } from "react-router-dom";
import PageTemplate from "../components/templateShowPage";
import ShowReview from "../components/showReview";

const ShowReviewPage = (props) => {
  let location = useLocation();
  const {show, review} = location.state;
  
  return (
    <PageTemplate show={show}>
      <ShowReview review={review} />
    </PageTemplate>
  );
};

export default ShowReviewPage;