import React, { Component } from "react";
import "./App.css";
import AddOrRemoveLightBox from "./components/AddOrRemoveLightBox";

class App extends Component {
  render() {
    return (
      <>
        <h1>Łight ₿ulb</h1>
        <AddOrRemoveLightBox />
      </>
    );
  }
}

export default App;
