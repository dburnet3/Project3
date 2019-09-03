import React, { Component } from 'react';
import {
    Col, Row, Form,
    FormGroup, Label, Input,
    Button, Card, CardBody
} from 'reactstrap';
import './home.css';
import down from '../../assets/images/down-arrow (1).png';
import info from '../../assets/images/additionalInfo.png';
import { loginUser } from "../../actions/authActions";

class Home extends Component {

    constructor() {
        this.state = {
            email: "",
            password: "",
            errors: {}
        };
    }

    componentDidMount() {
        if (this.props.auth.isAuthenticated) {
            this.props.history.push("/activities");
        }
    }

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };

    onSubmit = e => {
        e.preventDefault();

        const userData = {
            email: this.state.email,
            password: this.state.password
        }
    };



    render() {

        const { errors } = this.state;

        return (
            <div>
                <div className="mainDiv">
                    <Row>
                        <Col xs="6">
                            <h1 id='intro'>Connecting caregivers to improve health outcomes</h1>
                            <br />
                            <h6 id="intro2">Learn More <img src={down} alt='down' id="downArrow" /></h6>

                        </Col>
                        <Col xs="6">
                            <Card className="Card">
                                <CardBody>
                                    <h2>Sign In</h2>

                                    <Col lg>
                                        <Form className="form" id="form" onSubmit={this.onSubmit}>
                                            <Col>
                                                <FormGroup>
                                                    <Label>Email</Label>
                                                    <Input
                                                        type="email"
                                                        name="email"
                                                        id="email"
                                                        placeholder="myemail@email.com"
                                                        onChange={this.onChange}
                                                        value={this.state.email}
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col>
                                                <FormGroup>
                                                    <Label >Password</Label>
                                                    <Input
                                                        type="password"
                                                        name="password"
                                                        id="password"
                                                        placeholder="********"
                                                        onChange={this.onChange}
                                                        value={this.state.password}
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
                <Row>
                    <Col>
                        <h1 id="moreInfo">Improving health outcomes by partnering with health plans, agencies and caregivers</h1>
                    </Col>

                </Row>
                <Row>
                    <Col>
                        <img src={info} alt="addition_info" id="addition_info" />
                    </Col>
                </Row>

            </div>
        );
    }
}

export default Home;

Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});
export default connect(
    mapStateToProps,
    { loginUser }
)(Login);
