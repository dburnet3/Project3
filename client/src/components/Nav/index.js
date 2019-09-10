import React from "react";
import { useAuth0 } from "../../react-auth0-wrapper";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import icon from './assets/images/provision.png';



//Declaring navbar as a function and passing through a couple of parameters to 
// determine if user is authenticated, can be logged in & redirected, and lastly logged out.
const Nav = () => {
    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

    return (
        <div>
            <div>
                {!isAuthenticated && (
                    <button onClick={() =>
                        loginWithRedirect({})
                    }
                    >
                        Login
                </button>
                )}
                {isAuthenticated && <button onClick={() => logout()}>Logout</button>}

                {isAuthenticated && (
                    <span>
                        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                            <h2> <img src={icon} alt="icon" />Provision</h2>
                            <ul className="navbar-nav mr-auto">
                                <li><Link to={'/'} className="nav-link"> Home </Link></li>
                                <li><Link to={'/Activities'} className="nav-link">Activities</Link></li>
                                <li><Link to={'/Puc_Creation'} className="nav-link">Puc Creation</Link></li>
                                <li><Link to={'/Puc_Activities'} className="nav-link">Puc Activities</Link></li>
                                <li><Link to={'/Posts'} className="nav-link">Discussion Board</Link></li>
                                <li><Link to={'/Profile'} className="nav-link">Profile</Link></li>

                            </ul>
                        </nav>
                    </span>
                )}
            </div>
        </div>
    );
};

export default Nav;