import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Puc_Creation from './components/Puc_Creation';
import Activities from "./components/Activities";
import Puc_Activities from './components/Puc_Activities';
import Posts from './components/Posts';
import icon from './assets/images/provision.png';
import './App.css';
import Nav from './components/Nav';
import { useAuth0 } from "./react-auth0-wrapper";
import Profile from './components/Profile';
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import dashboard from "./pages/dashboard";
// import homepage from "./pages/homepage";
// import invitationPage from "./pages/invitationPage";
// import managePuc from "./pages/managePuc";
// import registerPuc from "./pages/registerPuc";
// import selectPuc from "./pages/selectPuc";
// import Nav from "./components/Nav";


// class App extends Component {
//   render() {

function App() {
  const { loading } = useAuth0();

  if (loading) {
    return (
      <div>Loading...</div>
    );
  }
  return (
    // <Router>
    <div className="App">


      {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <h2> <img src={icon} alt="icon" />Provision</h2>
            <ul className="navbar-nav mr-auto">
              <li><Link to={'/'} className="nav-link"> Home </Link></li>
              <li><Link to={'/Activities'} className="nav-link">Activities</Link></li>
              <li><Link to={'/Puc_Creation'} className="nav-link">Puc Creation</Link></li>
              <li><Link to={'/Puc_Activities'} className="nav-link">Puc Activities</Link></li>
              <li><Link to={'/Posts'} className="nav-link">Discussion Board</Link></li>
              <li><Link to={'/Profile'} className="nav-link">Profile</Link></li>

            </ul>
          </nav> */}

      <BrowserRouter>
        <header>
          <Nav />
        </header>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/Activities' component={Activities} />
          <Route path='/Puc_Creation' component={Puc_Creation} />
          <Route path='/Puc_Activities' component={Puc_Activities} />
          <Route path='/Posts' component={Posts} />
          <Route path='/Profile' component={Profile} />
        </Switch>
      </BrowserRouter>


    </div>
    // </Router>

  );
}

export default App;