import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [greenie, setGreenie] = useState(true);
  const [red, setRed] = useState(false);
  const changeColor = () => {
    if (greenie === true) {
      setGreenie(false);
      setRed(true);
    } else {
      setGreenie(true);
      setRed(false);
    }
  };

  return (
    <div className="App">
      <div>
        <div className="green-box">greenBox</div>
        <button className="" onClick={changeColor}>
          Change Color
        </button>
      </div>
    </div>
  );
}

export default App;
