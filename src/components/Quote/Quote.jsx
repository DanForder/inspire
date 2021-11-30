import "./_Quote.scss";

const Quote = ({ text, author }) => {
  return (
    <blockquote className="quote">
      <q className="quote__content">{text}</q>
      <footer className="quote__author">{author ?? "Anonymous"}</footer>
    </blockquote>
  );
};

export default Quote;
