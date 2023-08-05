import React from "react";
import logo from "./logo.svg";
import duck from "./duck.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src={duck}
          className="duck-logo"
          alt="logo"
          height="80%"
          width="80%"
        />
        <br />
        <br />
        <p>Congrats, you found the duck!</p>
      </header>
    </div>
  );
}

export default App;
