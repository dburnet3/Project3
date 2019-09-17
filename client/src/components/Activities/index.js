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
import { Checkbox } from 'pretty-checkbox-react';
import Puc_Activities from '../Puc_Activities/index';
import { BrowserRouter as Route, Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';


const styles = theme => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
});

const DialogTitle = withStyles(styles)(props => {
    const { children, classes, onClose } = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});

const DialogContent = withStyles(theme => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiDialogContent);

const DialogActions = withStyles(theme => ({
    root: {
        margin: 0,
        padding: theme.spacing(1),
    },
}))(MuiDialogActions);

export default function CustomizedDialogs() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    //Objective - if dow is selected then display activities for that day

    //Step 1 - Make dow selectable. 

    //Step 2 - onClick search the activities table for entries that match

    //Step 3 - display pulled db entries on individual cards

    class Activities extends Component {

        state = {
            result: [],
            title: "",
            time_slots: "",
            taken: false
        };


        //This handles the input change for the users activity selection
        handleInputChange = event => {
            const { name, value } = event.target;
            this.setState({
                [name]: value
            });
        };


        //This handles the form submission for 'taking' an activity
        handleUpdate = id => event => {
            event.preventDefault();
            console.log(this.state)
            API.updateActivities(id)
                .then(res => this.setState(res.taken))
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

            const content = this.state.taken
                ? <div> Activity Taken </div>
                : null;

            return (
                <div>
                    <Navbar color="light" light expand="md">
                        <NavbarBrand href="../images/back.png"><strong>Today:</strong> <Moment format="dddd, MMMM Do" className="underline_dotted">
                            2019-09-17
    </Moment> | <img src={left} alt="left" /> <small>Sept 16 - Sept 22 </small><img src={right} alt="right" /><Button color="secondary" id="addActivity">
                                <Link to={'../Puc_Activities'}><Route path='../Puc_Activities' component={Puc_Activities}> + Activity</Route></Link>

                            </Button>{' '}</NavbarBrand>
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
                                                    <Checkbox shape="round" color="success" onClick={this.handleUpdate(result.id)}
                                                        icon={<i className="mdi mdi-check" />} animation="smooth">
                                                        Taken</Checkbox>

                                                    <div>
                                                        {content}
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
                        <div>
                            <Button variant="outlined" color="secondary" onClick={handleClickOpen}>
                                Open dialog
      </Button>
                            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                                    Modal title
        </DialogTitle>
                                <DialogContent dividers>
                                    <Typography gutterBottom>
                                        Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
                                        in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
          </Typography>
                                    <Typography gutterBottom>
                                        Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
                                        lacus vel augue laoreet rutrum faucibus dolor auctor.
          </Typography>
                                    <Typography gutterBottom>
                                        Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
                                        scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
                                        auctor fringilla.
          </Typography>
                                </DialogContent>
                                <DialogActions>
                                    <Button onClick={handleClose} color="primary">
                                        Save changes
          </Button>
                                </DialogActions>
                            </Dialog>
                        </div>
                    </Container>
                </div>
            );
        }
    }

}
export default Activities;

