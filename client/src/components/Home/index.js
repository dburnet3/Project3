import React, { Component } from 'react';
import {
    Container, Col, Row, Form,
    FormGroup, Label, Input,
    Button, Card, CardBody
} from 'reactstrap';
import home from '../../assets/images/home.png';
import './home.css';

class Home extends Component {

    render() {

        return (

            <div>
                <Row>
                    <Col xs="6">
                        <h1 id='intro'>Connecting caregivers to improve health outcomes</h1>
                        <br />

                    </Col>
                    <Col xs="6">
                        <Card className="Card">
                            <CardBody>
                                <h2>Sign In</h2>

                                <Col lg>
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
                                            <Button id="signup">Sign Up</Button> &nbsp;
                                        <Button id="login">Login</Button>
                                        </Col>
                                    </Form>
                                </Col>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>

            </div>
        );
    }
}

export default Home;