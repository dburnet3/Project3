import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import dashboard from "./pages/dashboard";
import homepage from "./pages/homepage";
import invitationPage from "./pages/invitationPage";
import managePuc from "./pages/managePuc";
import registerPuc from "./pages/registerPuc";
import selectPuc from "./pages/selectPuc";


function App() {
    return (
        <Router>
            <div>
                <Nav />
                <Switch>
                    <Route exact path="/" component={dashboard} />
                    <Route exact path="/books" component={dashboard} />
                    <Route exact path="/books/:id" component={Detail} />
                    <Route component={NoMatch} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;