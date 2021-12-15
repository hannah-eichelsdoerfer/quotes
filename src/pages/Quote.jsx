import { Route, useParams } from "react-router";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import { DUMMY_QUOTES } from "./Quotes";

const Quote = () => {
  const { quoteId } = useParams();
  const quote = DUMMY_QUOTES.find((quote) => quote.id.toString() === quoteId); // params are always a string, therefore convert quote.id to a string for comparison

  if (!quote) {
    return <p>No Quote Found!</p>;
  }

  return (
    <>
      <HighlightedQuote quote={quote.quote} author={quote.author} />
      <Route path={`/quote/${quoteId}/comments`}>
        <Comments />
      </Route>
    </>
  );
};

export default Quote;
