import React from "react";
import duck from "./duck.png";
import "./App.css";
import { Dates } from "./components/dates";

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
        <Dates />
      </header>
    </div>
  );
}

export default App;
