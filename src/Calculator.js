import React, { useState, useEffect } from "react";
import './Calculator.css';

function Calculator() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([]); 

  const insertValue = (value) => {
    setInput((prev) => prev + value);
  };

  const calculateResult = () => {
    try {
      const result = eval(input).toString(); 
      const newEntry = { expression: input, result };
      setHistory((prev) => [...prev, newEntry]);

      setInput(result); 
    } catch (error) {
      setInput("Error");
    }
  };

  const clearResult = () => {
    setInput(" ");
  };


  useEffect(() => {
    const savedHistory = JSON.parse(localStorage.getItem("calcHistory")) || [];
    setHistory(savedHistory);
  }, []);

  console.log(typeof );
  

  useEffect(() => {
    localStorage.setItem("calcHistory", JSON.stringify(history));
  }, [history]);

  return (
    <div className="App">
      <h2>My Calculator</h2>
      <div className="inputContainer">
        <input type="text" value={input} disabled />
      </div>

      <div className="buttonContainer">
        <button onClick={clearResult}>AC</button>
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

      <div className="historyContainer">
        <h3>History</h3>
        <ul>
          {history.map((item, index) => (
            <li key={index}>
              {item.expression} = {item.result}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Calculator;
