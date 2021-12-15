import QuoteList from "../components/quotes/QuoteList";

export const DUMMY_QUOTES = [
  {
    id: 1,
    author: "Nelson Mandela",
    quote: "A winner is a dreamer who never gives up.",
  },
  {
    id: 2,
    author: "Vincent Van Gogh",
    quote:
      "Great things are done by a series of small things brought together.",
  },
  {
    id: 3,
    author: "Kent Beck",
    quote: "Make it work, make it right, make it fast.",
  },
];

const Quotes = () => {
  return <QuoteList quotes={DUMMY_QUOTES} />;
};

export default Quotes;
