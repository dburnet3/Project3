import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { FormGroup } from 'reactstrap';
import API from '../../utils/API';
import { Navbar, NavbarBrand } from 'reactstrap';
import Moment from 'react-moment';
import right from '../../assets/images/next (1).png';
import left from '../../assets/images/back (1).png';
import './activities.css';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { Card, Button, CardImg, CardTitle, CardText, CardGroup, CardSubtitle, CardBody } from 'reactstrap';


//Objective - if dow is selected then display activities for that day

//Step 1 - Make dow selectable. 

//Step 2 - onClick search the activities table for entries that match

//Step 3 - display pulled db entries on individual cards

class Activities extends Component {

    state = {
        result: [],
        title: "",
        time_slots: "",
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

    componentDidMount() {
        this.weekActivities();
    }

    //This handles the onClick event for selecting the dow
    weekActivities = query => {
        API.getActivities(query)
            .then(res => this.setState({ result: res.data }))
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

                <div id="dow">Monday&nbsp; Tuesday &nbsp; Wednesday &nbsp; <b><u>Thursday</u></b> &nbsp; Friday &nbsp; Saturday &nbsp; Sunday</div>
                <br />
                <div title={this.state.title} onClick={this.weekActivities} >Search Entire Week Activities</div>
                <Container>


                    <h2>Activites</h2>
                    <Row>
                        <Col xs="6" sm="4">
                            <CardGroup>
                                {this.state.result.length ? (
                                    <Card>
                                        {this.state.result.map(result => (
                                            <CardBody key={result._id}>
                                                <CardSubtitle>
                                                    Title:
                </CardSubtitle>
                                                <p> {result.title}</p>
                                                <br />
                                                <CardSubtitle>
                                                    Time Slot:
                </CardSubtitle>
                                                <p>{result.time_slots}</p>
                                                <br />
                                                <CardSubtitle>
                                                    Day of Week:
                </CardSubtitle>
                                                <p>{result.dow}</p>


                                            </CardBody>
                                        ))}
                                    </Card>
                                ) : (
                                        <h3>No Results to Display</h3>
                                    )}


                            </CardGroup>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Activities;

