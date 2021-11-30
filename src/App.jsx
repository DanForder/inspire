import { useState } from "react";
import Background from "./components/Background/Background";
import Button from "./components/Button/Button";
import Quote from "./components/Quote/Quote";
import { getRandomQuote } from "./data/api";
import "./styles/main.scss";

const App = () => {
  const [currentQuote, setCurrentQuote] = useState();

  const getNewQuote = async () => {
    setCurrentQuote(await getRandomQuote());
  };

  return (
    <Background>
      <h1>Welcome to inSpire</h1>
      <Quote text={currentQuote?.text} author={currentQuote?.author} />
      <Button label="New Quote" onClick={getNewQuote} />
    </Background>
  );
};

export default App;
