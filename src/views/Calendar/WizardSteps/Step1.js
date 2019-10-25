import React from "react";
import PropTypes from "prop-types";
// @material-ui/icons
import Face from "@material-ui/icons/Face";
import RecordVoiceOver from "@material-ui/icons/RecordVoiceOver";
import Email from "@material-ui/icons/Email";
import Accordion from "components/Accordion/Accordion.js";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import { purple, red, green } from '@material-ui/core/colors';

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Switch from '@material-ui/core/Switch';
import { events as calendarEvents } from "variables/general.js";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import PictureUpload from "components/CustomUpload/PictureUpload.js";
import CustomInput from "components/CustomInput/CustomInput.js";

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
    const { classes } = this.props;


    const [events, setEvents] = React.useState(calendarEvents);
    const [alert, setAlert] = React.useState(null);



    const [state, setState] = React.useState({
      opcion : "red"
    });

    const handleChange = () => event => {
      setState({ ...state, opcion: event.target.value });
    };

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

    const hideAlert = () => {
      setAlert(null);
    };

    const GreenSwitch = withStyles({
      switchBase: {
        color: green[300],
        '&$checked': {
          color: green[500],
        },
        '&$checked + $track': {
          backgroundColor: green[500],
        },
      },
      checked: {},
      track: {},
    })(Switch);

    const RedSwitch = withStyles({
      switchBase: {
        color: red[300],
        '&$checked': {
          color: red[500],
        },
        '&$checked + $track': {
          backgroundColor: red[500],
        },
      },
      checked: {},
      track: {},
    })(Switch);

    const PurpleSwitch = withStyles({
      switchBase: {
        color: purple[300],
        '&$checked': {
          color: purple[500],
        },
        '&$checked + $track': {
          backgroundColor: purple[500],
        },
      },
      checked: {},
      track: {},
    })(Switch);



    return (

      {alert}


      <GridContainer justify="center">
        <GridItem xs={12} sm={18} md={9}>
          <h4 className={classes.infoText}>
            Let{"'"}s start with the basic information (with validation)
          </h4>
        </GridItem>
        

        <GridItem xs={2} sm={2} md={2}>
          <FormControl component="fieldset">

         

          <Accordion
          active={0}
          collapses={[
          {
          title: "Docente Curso",
          content:
          <div>
          <FormControlLabel
                control={<PurpleSwitch color = "primary" checked={state.opcion ==="red"} onChange={handleChange()} value="red" />}
                label="Horas Contacto"
          />

          <FormControlLabel
                control={<RedSwitch color = "secondary" checked={state.opcion ==="green"} onChange={handleChange()} value="green" />}
                label="Horas Atención"
          />

          <FormControlLabel
                control={
                  <GreenSwitch color = "default" checked={state.opcion ==="yellow"} onChange={handleChange()} value="yellow" />
                }
                label="Horas Preparación"
                
          />
          </div>           
          },
          {
          title: "Docente Administrativo",
          content:
          <FormControlLabel
                control={<PurpleSwitch color = "primary" checked={state.opcion ==="red"} onChange={handleChange()} value="red" />}
                label="Horas Contacto"
          />
          },
          {
          title: "Docente Proyecto",
          content:
          <FormControlLabel
                control={
                  <GreenSwitch color = "default" checked={state.opcion ==="yellow"} onChange={handleChange()} value="yellow" />
                }
                label="Horas Preparación"
                
        />
        }
        ]}
        />


          </FormControl> 
        </GridItem>

      </GridContainer>
    );
  }
}

Step1.propTypes = {
  classes: PropTypes.object
};

export default withStyles(style)(Step1);

