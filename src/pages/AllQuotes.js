import React from "react";
import QuoteList from "../components/quotes/QuoteList";

const DUMMY_QUOTES = [
  {
    id: "q1",
    author: "Chayan",
    text: "Learning react is fun",
  },
  {
    id: "q2",
    author: "Chayan",
    text: "Learning react is not so fun",
  },
];
const AllQuotes = () => {
  return <QuoteList quotes={DUMMY_QUOTES} />;
};

export default AllQuotes;
