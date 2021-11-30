import "./_Quote.scss";

const Quote = () => {
  return (
    <blockquote className="quote">
      <q className="quote__content">Dream big, think small</q>
      <footer className="quote__author">Andy Evans</footer>
    </blockquote>
  );
};

export default Quote;
