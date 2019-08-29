import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Card, CardBody, CardTitle } from 'reactstrap';
import { Button, Input, Label } from 'reactstrap';
import { Form, FormGroup } from 'reactstrap';
import API from '../../utils/API';
import { Navbar, NavbarBrand } from 'reactstrap';
import Moment from 'react-moment';
import right from '../../assets/images/next (1).png';
import left from '../../assets/images/back (1).png';
import './activities.css';


// import API from "../../utils/API";


class Activities extends Component {
    state = {
        taken: "",
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
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="../images/back.png"><strong>Today:</strong> <Moment format="dddd, MMMM Do" className="underline_dotted">
                        2019-09-05
    </Moment> | <img src={left} alt="left" /> <small>Sept 01 - Sept 07 </small><img src={right} alt="right" /></NavbarBrand>
                </Navbar>
                <br />

                <div id="dow">Monday &nbsp; Tuesday &nbsp; Wednesday &nbsp; <b><u>Thursday</u></b> &nbsp; Friday &nbsp; Saturday &nbsp; Sunday</div>
                <br />
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
            </div>
        );
    }
}

export default Activities;