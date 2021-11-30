import "./_Background.scss";

const Background = ({ children }) => {
  return (
    <div className="background">
      <main className="background__content">{children}</main>
    </div>
  );
};

export default Background;
