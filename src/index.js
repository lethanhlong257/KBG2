import React, { Component } from "react";
import ReactDOM from "react-dom";

class App extends Component {
  
  render() {
    return (
      <h2>Start app sucessfully</h2>
    );
  }
}



const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<App />, wrapper) : false;
