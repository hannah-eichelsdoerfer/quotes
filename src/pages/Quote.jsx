import { Route, useParams } from "react-router";
import Comments from "../components/comments/Comments";

const Quote = () => {
  const { quoteId } = useParams();

  return (
    <>
      <h1>Singe Quote</h1>
      <p>{quoteId}</p>
      <Route path={`/quote/${quoteId}/comments`}>
        <Comments />
      </Route>
    </>
  );
};

export default Quote;
