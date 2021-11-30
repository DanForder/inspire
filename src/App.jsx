import { useState } from "react";
import Background from "./components/Background/Background";
import Button from "./components/Button/Button";
import Quote from "./components/Quote/Quote";
import { getRandomQuote } from "./data/api";
import "./styles/main.scss";

const App = () => {
  const [currentQuote, setCurrentQuote] = useState({
    text: "Dream big, think small",
    author: "Andy Evans",
  });

  const getNewQuote = async () => {
    setCurrentQuote(await getRandomQuote());
  };

  return (
    <Background>
      <h1>Welcome to inSpire</h1>
      <Quote text={currentQuote.text} author={currentQuote.author} />
      <div>
        <Button label="New Quote" onClick={getNewQuote} />
      </div>
    </Background>
  );
};

export default App;
