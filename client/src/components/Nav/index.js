import React from "react";
import { useAuth0 } from "../../react-auth0-wrapper";


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
            </div>
        </div>
    );
};

export default Nav;