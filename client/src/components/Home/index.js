import React, { Component } from 'react';
import {
    Container, Col, Form,
    FormGroup, Label, Input,
    Button,
} from 'reactstrap';

class Home extends Component {
    render() {
        return (
            <Container className="App">
                <h2>Sign In</h2>
                <Form className="form">
                    <Col>
                        <FormGroup>
                            <Label>Email</Label>
                            <Input
                                type="email"
                                name="email"
                                id="exampleEmail"
                                placeholder="myemail@email.com"
                            />
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <Label >Password</Label>
                            <Input
                                type="password"
                                name="password"
                                id="examplePassword"
                                placeholder="********"
                            />
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <Label for="passcode">Passcode</Label>
                            <Input
                                type="passcode"
                                name="passcode"
                                id="passcode"
                                placeholder="********"
                            />
                        </FormGroup>
                    </Col>
                    <Col>
                        <Button id="signup">Sign Up</Button>
                        <Button id="login">Login</Button>
                    </Col>
                </Form>
            </Container>
        );
    }
}

export default Home;