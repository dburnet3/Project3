import React from "react";
import { useAuth0 } from "../../react-auth0-wrapper";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import icon from '../../assets/images/provision.png';



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

                        <li><Link to={'/Profile'} className="nav-link">Profile</Link></li>


                    </span>
                )}
            </div>
        </div>
    );
};

export default Nav;