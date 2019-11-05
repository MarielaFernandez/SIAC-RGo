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


import ApolloClient, { gql } from "apollo-boost";
import { ApolloProvider, Query } from "react-apollo";

const localizer = momentLocalizer(moment);

const useStyles = makeStyles(styles);


import Wizard from "components/Wizard/Wizard.js";
import Step1 from "./WizardSteps/Step1.js";
import Step2 from "./WizardSteps/Step2.js";
import Step3 from "./WizardSteps/Step3.js";


export default function Calendar() {

  const EventsQuery = () => {
    return (
      <Query
        query={gql`
          {
            events {              
              name
            }
          }
        `}
      >
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error!</p>;

          return <FormControl
            fullWidth
            className={classes.selectFormControl}
          >
          <InputLabel
            htmlFor="simple-select"
            className={classes.selectLabel}
          >
            Elija un evento
          </InputLabel>
          <Select
            MenuProps={{
              className: classes.selectMenu
            }}
            classes={{
              select: classes.select
            }}
            value={simpleSelect}
            onChange={handleSimple}
            inputProps={{
              name: "simpleSelect",
              id: "simple-select"
            }}
          > {data.events.map(event => {
            return <MenuItem

              key={event.name}
              classes={{

                  root: classes.selectMenuItem,
                  selected: classes.selectMenuItemSelected
              }}
              value={event.name}
            > { event.name } </MenuItem>
          })}
          </Select>
          </FormControl>
        }}
      </Query>
    );
  };


  const [simpleSelect, setSimpleSelect] = React.useState("");

  const handleSimple = event => {
    setSimpleSelect(event.target.value);
  };


  const classes = useStyles();
  const [events, setEvents] = React.useState(calendarEvents);
  const [alert, setAlert] = React.useState(null);
  const selectedEvent = event => {
    alert(event.title);
  };
  const addNewEventAlert = slotInfo => {
    setAlert(
      <SweetAlert
        input
        showCancel
        style={{ display: "block", marginTop: "-100px" }}
        title="Input something"
        onConfirm={e => addNewEvent(e, slotInfo)}
        onCancel={() => hideAlert()}
        confirmBtnCssClass={classes.button + " " + classes.success}
        cancelBtnCssClass={classes.button + " " + classes.danger}
      />
    );
  };
  const addNewEvent = (e, slotInfo) => {
    var newEvents = events;
    newEvents.push({
      title: e,
      start: slotInfo.start,
      end: slotInfo.end
    });
    setAlert(null);
    setEvents(newEvents);
  };
  const hideAlert = () => {
    setAlert(null);
  };
  const eventColors = event => {
    var backgroundColor = "event-";
    event.color
      ? (backgroundColor = backgroundColor + event.color)
      : (backgroundColor = backgroundColor + "default");
    return {
      className: backgroundColor
    };
  };

  //const minTime = new Date();
  //minTime.setHours(8,0,0);
  //const maxTime = new Date();
  //maxTime.setHours(20,0,0);

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
    
    
    <EventsQuery />

    </div>
  );
}
