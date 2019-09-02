import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import API from '../../utils/API';
import { Navbar, NavbarBrand } from 'reactstrap';
import Moment from 'react-moment';
import right from '../../assets/images/next (1).png';
import left from '../../assets/images/back (1).png';
import './activities.css';
import { Card, Button, CardGroup, CardSubtitle, CardBody } from 'reactstrap';
import bookmark from '../../assets/images/bookmark.png';
import '../../assets/pretty-checkbox.scss';

//Objective - if dow is selected then display activities for that day

//Step 1 - Make dow selectable. 

//Step 2 - onClick search the activities table for entries that match

//Step 3 - display pulled db entries on individual cards

class Activities extends Component {

    state = {
        result: [],
        title: "",
        time_slots: "",
        taken: false,
    };


    //This handles the input change for the users activity selection
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    //This handles the form submission for 'taking' an activity
    handleUpdate = event => {
        event.preventDefault();
        API.updateActivities({
            taken: this.state.taken
        })
            .then(res => this.updateActivities(res))
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
    </Moment> | <img src={left} alt="left" /> <small>Sept 01 - Sept 07 </small><img src={right} alt="right" /><Button color="secondary">+ Activity</Button>{' '}</NavbarBrand>
                </Navbar>
                <br />

                <div id="dow">Monday&nbsp; Tuesday &nbsp; Wednesday &nbsp; <b><u>Thursday</u></b> &nbsp; Friday &nbsp; Saturday &nbsp; Sunday</div>
                <br />
                {/* <div title={this.state.title} onClick={this.weekActivities} >Search Entire Week Activities</div> */}
                <Container>


                    <h2>Activites</h2>
                    <Row>
                        <Col lg>
                            {this.state.result.length ? (
                                <CardGroup>

                                    {this.state.result.map(result => (
                                        <Card key={result._id} id="card">

                                            <CardBody >
                                                <img src={bookmark} alt="feeding" id="bookmark" />
                                                <br />
                                                <br />
                                                <CardSubtitle>
                                                    Title:
                                                </CardSubtitle>
                                                <p> {result.title}</p>

                                                <CardSubtitle>
                                                    Time Slot:
                                                 </CardSubtitle>
                                                <p>{result.time_slots}</p>

                                                <CardSubtitle>
                                                    Day of Week:
                                                 </CardSubtitle>
                                                <p>{result.dow}</p>

                                                <br />
                                                <div class="pretty p-icon p-round p-jelly">
                                                    <input type="checkbox"
                                                        onClick={this.handleUpdate}
                                                        checked={this.state.taken === true} />
                                                    <div class="state p-primary">
                                                        <i class="icon mdi mdi-check"></i>
                                                        <label> Taken</label>
                                                    </div>
                                                </div>
                                            </CardBody>

                                        </Card>

                                    ))}


                                </CardGroup>
                            ) : (
                                    <h3>No Results to Display</h3>
                                )}
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Activities;

