import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Card, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import { Button, ButtonGroup, Input, Label } from 'reactstrap';
import { Form, FormGroup } from 'reactstrap';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import PropTypes from "prop-types";
import axios from 'axios';

// import API from "../../utils/API";


class Activities extends Component {
    constructor() {
        super();
        this.state = {
            'activities': {
                'Feeding_morning': false,
                'Feeding_afternoon': false,
                'Feeding_evening': false
            },

        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }



    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };


    handleSubmit(event) {
        event.preventDefault();
        let arr = [];
        for (var key in this.state) {
            if (this.state[key] === true) {
                arr.push(key);
            }
        }
        let data = {
            check: arr.toString()
        };
        axios.post('http://localhost:3001/api/activities', data)
            .then(res => console.log(res.data));
    }
    render() {
        return (
            <div>
                <h2>Activites</h2>
                <Container>
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
                                                <Input type="checkbox" name="morning" onChange={this.handleInputChange} />{''}
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
                                            <Button onClick={this.handleSubmit} id="Feeding">Commit</Button>
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
                                            <Button onClick={this.handleSubmit}>Commit</Button>
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
                                            <Button onClick={this.handleSubmit}>Commit</Button>
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
                                            <Button onClick={this.handleSubmit}>Commit</Button>
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
                                            <Button onClick={this.handleSubmit}>Commit</Button>
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
                                            <Button onClick={this.handleSubmit}>Commit</Button>
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
                                            <Button onClick={this.handleSubmit}>Commit</Button>
                                        </FormGroup>
                                    </Form>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Activities;