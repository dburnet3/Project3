import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Puc from './components/Puc';
import Activities from "./components/Activities";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import logo from "./logo.svg";
// import dashboard from "./pages/dashboard";
// import homepage from "./pages/homepage";
// import invitationPage from "./pages/invitationPage";
// import managePuc from "./pages/managePuc";
// import registerPuc from "./pages/registerPuc";
// import selectPuc from "./pages/selectPuc";
// import Nav from "./components/Nav";


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <h2>Provision</h2>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <ul className="navbar-nav mr-auto">
              <li><Link to={'/'} className="nav-link"> Home </Link></li>
              <li><Link to={'/Activities'} className="nav-link">Activities</Link></li>
              <li><Link to={'/Puc'} className="nav-link">Puc</Link></li>
            </ul>
          </nav>
          <hr />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/Activities' component={Activities} />
            <Route path='/Puc' component={Puc} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;