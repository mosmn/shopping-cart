import './styles/App.css';
import { useState } from "react";

const App = () => {
  const [heading, setHeading] = useState("Magnificent Monkeys");

  const clickHandler = () => {
    setHeading("Radical Rhinos");
  };

  return (
    <>
      <button type="button" onClick={clickHandler}>
        Click Me
      </button>
      <h1>{heading}</h1>
      <p>Check out these cool animals!</p>
      <ul>
        <li>Elephant</li>
        <li>Tiger</li>
        <li>Snake</li>
      </ul>
    </>
  );
};


export default App;
