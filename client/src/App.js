import React, { Component } from "react";
import logo from "./logo.svg";
import dashboard from "./pages/dashboard";
import homepage from "./pages/homepage";
import invitationPage from "./pages/invitationPage";
import managePuc from "./pages/managePuc";
import registerPuc from "./pages/registerPuc";
import selectPuc from "./pages/selectPuc";


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;