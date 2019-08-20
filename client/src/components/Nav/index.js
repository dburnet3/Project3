import React from "react";

function Nav() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <a className="navbar-brand" href="/">
                    React Reading List
        </a>
            </nav>
            <container>
                <Row>
                    <Col xs="6" sm="4">Feeding</Col>
                    <Col xs="6" sm="4">Medication</Col>
                    <Col sm="4">Appointment</Col>
                </Row>
            </container>
        </div>
    );
}

export default Nav;