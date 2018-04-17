import React, { Component } from "react";
import Timer from "./Timer";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Timer start={Date.now()} />
      </div>
    );
  }
}

export default App;
