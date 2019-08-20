import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Card, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import { Button, ButtonGroup } from 'reactstrap';


class Activities extends Component {
    render() {
        return (
            <div>
                <h2>Activites</h2>
                <Container>
                    <Row>
                        <Col xs="6" sm="4">Feeding
                        <Card>
                                <CardBody>
                                    <CardTitle>Feeding</CardTitle>
                                    <CardSubtitle>Grandma needs some help eating.</CardSubtitle>
                                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                    <ButtonGroup>
                                        <Button>Morning</Button>
                                        <Button>Afternoon</Button>
                                        <Button>Evening</Button>
                                    </ButtonGroup>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col xs="6" sm="4">Medication
                        <Card>
                                <CardBody>
                                    <CardTitle>Medication</CardTitle>
                                    <CardSubtitle>Grandma takes a few medications.  We need someone to make sure she's taking them.</CardSubtitle>
                                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                    <ButtonGroup>
                                        <Button>Morning</Button>
                                        <Button>Afternoon</Button>
                                        <Button>Evening</Button>
                                    </ButtonGroup>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col sm="4">Appointment
                        <Card>
                                <CardBody>
                                    <CardTitle>Appointment</CardTitle>
                                    <CardSubtitle>Grandma goes to physical therapy every week.</CardSubtitle>
                                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                    <ButtonGroup>
                                        <Button>Morning</Button>
                                        <Button>Afternoon</Button>
                                        <Button>Evening</Button>
                                    </ButtonGroup>
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