import Background from "./components/Background/Background";
import Button from "./components/Button/Button";
import Quote from "./components/Quote/Quote";
import "./styles/main.scss";

const App = () => {
  return (
    <Background>
      <h1>Welcome to inSpire</h1>
      <Quote />
      <div>
        <Button label="New Quote" />
      </div>
    </Background>
  );
};

export default App;
