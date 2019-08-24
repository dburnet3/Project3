import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Card, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import { Button, ButtonGroup, Input, Label } from 'reactstrap';
import { Form, FormGroup } from 'reactstrap';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import PropTypes from "prop-types";
import axios from 'axios';
import API from '../../utils/API';

// import API from "../../utils/API";


class Activities extends Component {
    state = {
        taken: ""
    };


    //This handles the input change for the users activity selection
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    //This handles the form submission for 'taking' an activity
    handleFormSubmit = event => {
        event.preventDefault();
        API.postActivities({
            taken: this.state.taken
        })
            .then(res => this.postActivities(res))
            .catch(err => console.log(err));
    };

    render() {
        return (
            <Container>
                <h2>Activites</h2>
                <Row>
                    <Col xs="6" sm="4">
                        <Card>
                            <CardBody>
                                <CardTitle><h2>Monday</h2></CardTitle>
                                <hr />
                                <Form >
                                    <FormGroup check id="Feeding">
                                        <legend>Feeding</legend>
                                        <Label check>
                                            <Input type="checkbox" name="morning" value={this.state.taken} onChange={this.handleInputChange} />{''}
                                            Morning
                                            </Label>
                                    </FormGroup>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="checkbox" label="Afternoon" />
                                            Afternoon
                                            </Label>
                                    </FormGroup>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="checkbox" label="Evening" />
                                            Evening
                                            </Label>
                                    </FormGroup>
                                    <FormGroup check id="Medication">
                                        <legend>Medication</legend>
                                        <Label check>
                                            <Input type="checkbox" label="Morning" />{''}
                                            Morning
                                            </Label>
                                    </FormGroup>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="checkbox" label="Afternoon" />
                                            Afternoon
                                            </Label>
                                    </FormGroup>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="checkbox" label="Evening" />
                                            Evening
                                            </Label>

                                    </FormGroup>
                                    <FormGroup check id="Appointment">
                                        <legend>Appointment</legend>
                                        <Label check>
                                            <Input type="checkbox" label="Morning" />
                                            Morning
                                            </Label>
                                    </FormGroup>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="checkbox" label="Afternoon" />
                                            Afternoon
                                            </Label>
                                    </FormGroup>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="checkbox" label="Evening" />
                                            Evening
                                            </Label>
                                        <br />
                                        <Button onClick={this.handleFormSubmit} id="Feeding">Commit</Button>
                                    </FormGroup>
                                </Form>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xs="6" sm="4">
                        <Card>
                            <CardBody>
                                <CardTitle><h2>Tuesday</h2></CardTitle>
                                <hr />
                                <Form >
                                    <FormGroup check id="Feeding">
                                        <legend>Feeding</legend>
                                        <Label check>
                                            <Input type="checkbox" name="Feeding_morning" onChange={this.handleInputChange} />{''}
                                            Morning
                                            </Label>
                                    </FormGroup>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="checkbox" label="Afternoon" />
                                            Afternoon
                                            </Label>
                                    </FormGroup>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="checkbox" label="Evening" />
                                            Evening
                                            </Label>
                                    </FormGroup>
                                    <FormGroup check id="Medication">
                                        <legend>Medication</legend>
                                        <Label check>
                                            <Input type="checkbox" label="Morning" />{''}
                                            Morning
                                            </Label>
                                    </FormGroup>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="checkbox" label="Afternoon" />
                                            Afternoon
                                            </Label>
                                    </FormGroup>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="checkbox" label="Evening" />
                                            Evening
                                            </Label>

                                    </FormGroup>
                                    <FormGroup check id="Appointment">
                                        <legend>Appointment</legend>
                                        <Label check>
                                            <Input type="checkbox" label="Morning" />
                                            Morning
                                            </Label>
                                    </FormGroup>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="checkbox" label="Afternoon" />
                                            Afternoon
                                            </Label>
                                    </FormGroup>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="checkbox" label="Evening" />
                                            Evening
                                            </Label>
                                        <br />
                                        <Button onClick={this.handleFormSubmit}>Commit</Button>
                                    </FormGroup>
                                </Form>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm="4">
                        <Card>
                            <CardBody>
                                <CardTitle><h2>Wednesday</h2></CardTitle>
                                <hr />
                                <Form >
                                    <FormGroup check id="Feeding">
                                        <legend>Feeding</legend>
                                        <Label check>
                                            <Input type="checkbox" name="Feeding_morning" onChange={this.handleInputChange} />{''}
                                            Morning
                                            </Label>
                                    </FormGroup>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="checkbox" label="Afternoon" />
                                            Afternoon
                                            </Label>
                                    </FormGroup>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="checkbox" label="Evening" />
                                            Evening
                                            </Label>
                                    </FormGroup>
                                    <FormGroup check id="Medication">
                                        <legend>Medication</legend>
                                        <Label check>
                                            <Input type="checkbox" label="Morning" />{''}
                                            Morning
                                            </Label>
                                    </FormGroup>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="checkbox" label="Afternoon" />
                                            Afternoon
                                            </Label>
                                    </FormGroup>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="checkbox" label="Evening" />
                                            Evening
                                            </Label>

                                    </FormGroup>
                                    <FormGroup check id="Appointment">
                                        <legend>Appointment</legend>
                                        <Label check>
                                            <Input type="checkbox" label="Morning" />
                                            Morning
                                            </Label>
                                    </FormGroup>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="checkbox" label="Afternoon" />
                                            Afternoon
                                            </Label>
                                    </FormGroup>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="checkbox" label="Evening" />
                                            Evening
                                            </Label>
                                        <br />
                                        <Button onClick={this.handleFormSubmit}>Commit</Button>
                                    </FormGroup>
                                </Form>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm="4">
                        <Card>
                            <CardBody>
                                <CardTitle><h2>Thursday</h2></CardTitle>
                                <hr />
                                <Form >
                                    <FormGroup check id="Feeding">
                                        <legend>Feeding</legend>
                                        <Label check>
                                            <Input type="checkbox" name="Feeding_morning" onChange={this.handleInputChange} />{''}
                                            Morning
                                            </Label>
                                    </FormGroup>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="checkbox" label="Afternoon" />
                                            Afternoon
                                            </Label>
                                    </FormGroup>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="checkbox" label="Evening" />
                                            Evening
                                            </Label>
                                    </FormGroup>
                                    <FormGroup check id="Medication">
                                        <legend>Medication</legend>
                                        <Label check>
                                            <Input type="checkbox" label="Morning" />{''}
                                            Morning
                                            </Label>
                                    </FormGroup>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="checkbox" label="Afternoon" />
                                            Afternoon
                                            </Label>
                                    </FormGroup>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="checkbox" label="Evening" />
                                            Evening
                                            </Label>

                                    </FormGroup>
                                    <FormGroup check id="Appointment">
                                        <legend>Appointment</legend>
                                        <Label check>
                                            <Input type="checkbox" label="Morning" />
                                            Morning
                                            </Label>
                                    </FormGroup>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="checkbox" label="Afternoon" />
                                            Afternoon
                                            </Label>
                                    </FormGroup>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="checkbox" label="Evening" />
                                            Evening
                                            </Label>
                                        <br />
                                        <Button onClick={this.handleFormSubmit}>Commit</Button>
                                    </FormGroup>
                                </Form>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm="4">
                        <Card>
                            <CardBody>
                                <CardTitle><h2>Friday</h2></CardTitle>
                                <hr />
                                <Form >
                                    <FormGroup check id="Feeding">
                                        <legend>Feeding</legend>
                                        <Label check>
                                            <Input type="checkbox" name="Feeding_morning" onChange={this.handleInputChange} />{''}
                                            Morning
                                            </Label>
                                    </FormGroup>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="checkbox" label="Afternoon" />
                                            Afternoon
                                            </Label>
                                    </FormGroup>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="checkbox" label="Evening" />
                                            Evening
                                            </Label>
                                    </FormGroup>
                                    <FormGroup check id="Medication">
                                        <legend>Medication</legend>
                                        <Label check>
                                            <Input type="checkbox" label="Morning" />{''}
                                            Morning
                                            </Label>
                                    </FormGroup>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="checkbox" label="Afternoon" />
                                            Afternoon
                                            </Label>
                                    </FormGroup>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="checkbox" label="Evening" />
                                            Evening
                                            </Label>

                                    </FormGroup>
                                    <FormGroup check id="Appointment">
                                        <legend>Appointment</legend>
                                        <Label check>
                                            <Input type="checkbox" label="Morning" />
                                            Morning
                                            </Label>
                                    </FormGroup>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="checkbox" label="Afternoon" />
                                            Afternoon
                                            </Label>
                                    </FormGroup>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="checkbox" label="Evening" />
                                            Evening
                                            </Label>
                                        <br />
                                        <Button onClick={this.handleFormSubmit}>Commit</Button>
                                    </FormGroup>
                                </Form>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm="4">
                        <Card>
                            <CardBody>
                                <CardTitle><h2>Saturday</h2></CardTitle>
                                <hr />
                                <Form >
                                    <FormGroup check id="Feeding">
                                        <legend>Feeding</legend>
                                        <Label check>
                                            <Input type="checkbox" name="Feeding_morning" onChange={this.handleInputChange} />{''}
                                            Morning
                                            </Label>
                                    </FormGroup>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="checkbox" label="Afternoon" />
                                            Afternoon
                                            </Label>
                                    </FormGroup>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="checkbox" label="Evening" />
                                            Evening
                                            </Label>
                                    </FormGroup>
                                    <FormGroup check id="Medication">
                                        <legend>Medication</legend>
                                        <Label check>
                                            <Input type="checkbox" label="Morning" />{''}
                                            Morning
                                            </Label>
                                    </FormGroup>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="checkbox" label="Afternoon" />
                                            Afternoon
                                            </Label>
                                    </FormGroup>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="checkbox" label="Evening" />
                                            Evening
                                            </Label>

                                    </FormGroup>
                                    <FormGroup check id="Appointment">
                                        <legend>Appointment</legend>
                                        <Label check>
                                            <Input type="checkbox" label="Morning" />
                                            Morning
                                            </Label>
                                    </FormGroup>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="checkbox" label="Afternoon" />
                                            Afternoon
                                            </Label>
                                    </FormGroup>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="checkbox" label="Evening" />
                                            Evening
                                            </Label>
                                        <br />
                                        <Button onClick={this.handleFormSubmit}>Commit</Button>
                                    </FormGroup>
                                </Form>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm="4">
                        <Card>
                            <CardBody>
                                <CardTitle><h2>Sunday</h2></CardTitle>
                                <hr />
                                <Form >
                                    <FormGroup check id="Feeding">
                                        <legend>Feeding</legend>
                                        <Label check>
                                            <Input type="checkbox" name="Feeding_morning" onChange={this.handleInputChange} />{''}
                                            Morning
                                            </Label>
                                    </FormGroup>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="checkbox" label="Afternoon" />
                                            Afternoon
                                            </Label>
                                    </FormGroup>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="checkbox" label="Evening" />
                                            Evening
                                            </Label>
                                    </FormGroup>
                                    <FormGroup check id="Medication">
                                        <legend>Medication</legend>
                                        <Label check>
                                            <Input type="checkbox" label="Morning" />{''}
                                            Morning
                                            </Label>
                                    </FormGroup>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="checkbox" label="Afternoon" />
                                            Afternoon
                                            </Label>
                                    </FormGroup>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="checkbox" label="Evening" />
                                            Evening
                                            </Label>

                                    </FormGroup>
                                    <FormGroup check id="Appointment">
                                        <legend>Appointment</legend>
                                        <Label check>
                                            <Input type="checkbox" label="Morning" />
                                            Morning
                                            </Label>
                                    </FormGroup>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="checkbox" label="Afternoon" />
                                            Afternoon
                                            </Label>
                                    </FormGroup>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="checkbox" label="Evening" />
                                            Evening
                                            </Label>
                                        <br />
                                        <Button onClick={this.handleFormSubmit}>Commit</Button>
                                    </FormGroup>
                                </Form>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Activities;