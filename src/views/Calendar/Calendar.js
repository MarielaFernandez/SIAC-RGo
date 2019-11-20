/*eslint-disable*/
import React from "react";
// react components used to create a calendar with events on it
import { Calendar as BigCalendar, momentLocalizer } from "react-big-calendar";
// dependency plugin for react-big-calendar
import InputLabel from "@material-ui/core/InputLabel";

require('moment/locale/es.js');

import moment from "moment";
// react component used to create alerts
import SweetAlert from "react-bootstrap-sweetalert";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import Heading from "components/Heading/Heading.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import InputAdornment from "@material-ui/core/InputAdornment";
import MenuItem from "@material-ui/core/MenuItem";

import styles from "assets/jss/material-dashboard-pro-react/components/buttonStyle.js";

import { events as calendarEvents } from "variables/general.js";




const localizer = momentLocalizer(moment);

const useStyles = makeStyles(styles);


import Wizard from "components/Wizard/Wizard.js";
import Step1 from "./WizardSteps/Step1.js";
import Step2 from "./WizardSteps/Step2.js";
import Step3 from "./WizardSteps/Step3.js";


export default function Calendar() {

  const handleChange = () => event => {
    setState({ ...state, opcion: event.target.value });
  };

  const addNewEventAlert = slotInfo => {
    setAlert(
      <SweetAlert
        input
        select
        showCancel
        style={{ display: "block", marginTop: "-100px" }}
        title="Input something"
        title="Actividad"
        onConfirm={e => addNewEvent(e, slotInfo)}
        onCancel={() => hideAlert()}
        confirmBtnCssClass={classes.button + " " + classes.success}
      />
    );
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
    }

  const hideAlert = () => {
    setAlert(null);
  };
  
  class MyWeek extends React.Component {
    render() {      
      let { date } = this.props
      const { localizer } = this.props
      let range = MyWeek.range(date)      
  
      return <TimeGrid {...this.props} range={range} eventOffset={15} />
    }
  }
  
  MyWeek.range = date => {
    let start = date
    let end = dates.add(start, 6, 'day')
  
    let current = start
    let range = []
  
    while (dates.lte(current, end, 'day')) {
      range.push(current)
      current = dates.add(current, 1, 'day')
    }
  
    return range
  }
  
 
  
  MyWeek.title = date => {
    return `Mi declaración: ${date.toLocaleDateString()}`
  }
  
  var eventColors = event => {
    var backgroundColor = "event-";
    event.color
      ? (backgroundColor = backgroundColor + event.color)
      : (backgroundColor = backgroundColor + state.opcion);
    
  };

  const minTime = new Date(); //calendar
  minTime.setHours(7,0,0);
  const maxTime = new Date();
  maxTime.setHours(22,0,0);





  
  return (
    <div>
    <GridContainer justify="center">
      <GridItem xs={0} sm={0} md={12}>
        <Wizard
        validate
        steps={[
        { stepName: "Docente Curso", stepComponent: Step1, stepId: "Step1" },
        { stepName: "Docente Administrativo", stepComponent: Step2, stepId: "Step2" },
        { stepName: "Docente Proyecto", stepComponent: Step3, stepId: "Step3" }
      ]}
      title="Administración"
      subtitle="Seleccione una opción acorde a su designación."
      finishButtonClick={e => alert(e)}
      />

      
     </GridItem>
    </GridContainer>
    
    
    

    </div>
  );
}
