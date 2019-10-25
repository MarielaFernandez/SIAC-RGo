import React from "react";
import PropTypes from "prop-types";
import { Calendar as BigCalendar, momentLocalizer  } from "react-big-calendar";
// @material-ui/icons
import Face from "@material-ui/icons/Face";
import RecordVoiceOver from "@material-ui/icons/RecordVoiceOver";
import Email from "@material-ui/icons/Email";
import Accordion from "components/Accordion/Accordion.js";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import moment from "moment";
import { events as calendarEvents } from "variables/general.js";
import SweetAlert from "react-bootstrap-sweetalert";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";


// core components
//import GridContainer from "components/Grid/GridContainer.js";
//import GridItem from "components/Grid/GridItem.js";
import PictureUpload from "components/CustomUpload/PictureUpload.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";

const style = {
  infoText: {
    fontWeight: "300",
    margin: "10px 0 30px",
    textAlign: "center"
  },
  inputAdornmentIcon: {
    color: "#555"
  },
  inputAdornment: {
    position: "relative"
  }
};

class Step1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      firstnameState: "",
      lastname: "",
      lastnameState: "",
      email: "",
      emailState: ""
    };
  }
  sendState() {
    return this.state;
  }
  // function that returns true if value is email, false otherwise
  verifyEmail(value) {
    var emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (emailRex.test(value)) {
      return true;
    }
    return false;
  }
  // function that verifies if a string has a given length or not
  verifyLength(value, length) {
    if (value.length >= length) {
      return true;
    }
    return false;
  }
  change(event, stateName, type, stateNameEqualTo) {
    switch (type) {
      case "email":
        if (this.verifyEmail(event.target.value)) {
          this.setState({ [stateName + "State"]: "success" });
        } else {
          this.setState({ [stateName + "State"]: "error" });
        }
        break;
      case "length":
        if (this.verifyLength(event.target.value, stateNameEqualTo)) {
          this.setState({ [stateName + "State"]: "success" });
        } else {
          this.setState({ [stateName + "State"]: "error" });
        }
        break;
      default:
        break;
    }
    this.setState({ [stateName]: event.target.value });
  }
  isValidated() {
    if (
      this.state.firstnameState === "success" &&
      this.state.lastnameState === "success" &&
      this.state.emailState === "success"
    ) {
      return true;
    } else {
      if (this.state.firstnameState !== "success") {
        this.setState({ firstnameState: "error" });
      }
      if (this.state.lastnameState !== "success") {
        this.setState({ lastnameState: "error" });
      }
      if (this.state.emailState !== "success") {
        this.setState({ emailState: "error" });
      }
    }
    return false;
  }


  

  render() {
    const [events, setEvents] = React.useState(calendarEvents);
    const [alert, setAlert] = React.useState(null);
    const [modal, setModal] = React.useState(false);
    const [simpleSelect, setSimpleSelect] = React.useState("");
    const localizer = momentLocalizer(moment);
    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));
    //const [selectedDate, handleDateChange] = useState(new Date());Date TIme Picker con error
    const selectedEvent = event => {
    window.alert(event.title);
    }; 

    const [state, setState] = React.useState({
      opcion : "red"
    });
    const minTime = new Date();
    minTime.setHours(8,0,0);
    const maxTime = new Date();
    maxTime.setHours(20,0,0);
    
    const addNewEvent = (e, slotInfo) => {
      var newEvents = events;
      newEvents.push({
        title: e,
        start: slotInfo.start,
        end: slotInfo.end,
        color : state.opcion
  
      });
      setAlert(null);
      setEvents(newEvents);
    };

    var eventColors = event => {
      var backgroundColor = "event-";
      event.color
        ? (backgroundColor = backgroundColor + event.color)
        : (backgroundColor = backgroundColor + state.opcion);
      return {
        className: backgroundColor
      };
    };

    const addNewEventAlert = slotInfo => {
      setAlert(
        <SweetAlert
          select
          showCancel
          style={{ display: "block", marginTop: "-100px" }}
          title="Actividad"
          onConfirm={e => addNewEvent(e, slotInfo)}
          onCancel={() => hideAlert()}
          confirmBtnCssClass={classes.button + " " + classes.success}
          cancelBtnCssClass={classes.button + " " + classes.danger}
        />
      );
    };

    const hideAlert = () => {
      setAlert(null);
    };

    
    
    const { classes } = this.props;


    return (
      <GridContainer justify="center">
        <GridItem xs={12} sm={18} md={9}>
          <h4 className={classes.infoText}>
            Let{"'"}s start with the basic information (with validation)
          </h4>
        </GridItem>
        
        <Card>
            <CardBody calendar>
              <BigCalendar
                views={['week', 'agenda']}                              
                // startAccessor="start"
                // endAccessor="end"                
                selectable
                resizable
                localizer={localizer}
                events={events}
                defaultView="week"
                // scrollToTime={new Date(2019, 1, 1, 6)}
                date={new Date(2019, 8, 29, 6)}
                // length ={200}
                defaultDate={new Date()}
                onSelectEvent={event => selectedEvent(event)}
                onSelectSlot={slotInfo => addNewEventAlert(slotInfo)}
                //onEventResize={this.resizeEvent}
                step = {30}
                min = {minTime}
                max = {maxTime}
                eventPropGetter={eventColors}                 
                // views={{ agenda: true, week: MyWeek }}                
                culture = {'es'}                
              />
            </CardBody>
          </Card>

      </GridContainer>
    );
  }
}

Step1.propTypes = {
  classes: PropTypes.object
};

export default withStyles(style)(Step1);
