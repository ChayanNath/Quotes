import React from "react";
import { useParams } from "react-router-dom";

const QuoteDetails = () => {
  const { quoteid } = useParams();
  return <div>QuoteDetails {quoteid}</div>;
};

export default QuoteDetails;
