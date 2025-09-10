import React, { useState } from "react";

function App() {
  
  const [input, setInput] = useState("");

  const insertValue = (value) => {
    setInput((prev) => prev+value);
  };

  const calculateResult = () => {
      setInput((input).toString());
  };

  return (
    <div className="App">
      <h2>My Calculator</h2>
      <div>
        <input type="text" value={input} disabled />
      </div>

      <div>
        <button onClick={() => insertValue("%")}>%</button>
        <button onClick={() => insertValue("/")}>/</button>
        <button onClick={() => insertValue("7")}>7</button>
        <button onClick={() => insertValue("8")}>8</button>
        <button onClick={() => insertValue("9")}>9</button>
        <button onClick={() => insertValue("4")}>4</button>
        <button onClick={() => insertValue("5")}>5</button>
        <button onClick={() => insertValue("6")}>6</button>
        <button onClick={() => insertValue("*")}>*</button>
        <button onClick={() => insertValue("-")}>-</button>
        <button onClick={() => insertValue("1")}>1</button>
        <button onClick={() => insertValue("2")}>2</button>
        <button onClick={() => insertValue("3")}>3</button>
        <button onClick={() => insertValue("+")}>+</button>
        <button onClick={() => insertValue("0")}>0</button>
        <button onClick={() => insertValue(".")}>.</button>
        <button onClick={calculateResult}>=</button>
      </div>
    </div>
  );
}

export default App;
