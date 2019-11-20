import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [classButton, setClassButton] = useState('green-box')

  const greenBox = () => setClassButton('green-box')
  const redBox = () => setClassButton('red-box')

  return (
    <div className="App">
      <div className={`${classButton} box`}>{classButton}</div>
      <button onClick={greenBox}>
        Green
        </button>
      <button onClick={redBox}>
        Red
        </button>
    </div>
  );
}

export default App;
