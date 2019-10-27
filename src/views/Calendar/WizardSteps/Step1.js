import React from "react";
import { Calendar as BigCalendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import SweetAlert from "react-bootstrap-sweetalert";


// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
// core components
import styles from "assets/jss/material-dashboard-pro-react/customCheckboxRadioSwitch.js";
import Heading from "components/Heading/Heading.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import { events as calendarEvents } from "variables/general.js";

const localizer = momentLocalizer(moment);

const useStyles = makeStyles(styles);

export default function DoCurso() {
  const [checkedA, setCheckedA] = React.useState(null);
  const [checkedB, setCheckedB] = React.useState(null);
  const [checkedC, setCheckedC] = React.useState(null);
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

  const minTime = new Date();
  minTime.setHours(8,0,0);
  const maxTime = new Date();
  maxTime.setHours(20,0,0);





  return (
    <div>
      <div>
        <FormControlLabel
          control={
            <Switch
              checked={checkedA}
              onChange={event => setCheckedA(event.target.checked)}
              value="checkedA"
              classes={{
                switchBase: classes.switchBase,
                checked: classes.switchChecked,
                thumb: classes.switchIcon,
                track: classes.switchBar
              }}
            />
          }
          classes={{
            label: classes.label
          }}
          label="Horas atención estudiantes"
        />
      </div>
      <div>
        <FormControlLabel
          control={
            <Switch
              checked={checkedB}
              onChange={event => setCheckedB(event.target.checked)}
              value="checkedB"
              classes={{
                switchBase: classes.switchBase,
                checked: classes.switchChecked,
                thumb: classes.switchIcon,
                track: classes.switchBar
              }}
            />
          }
          classes={{
            label: classes.label
          }}
          label="Horas contacto"
        />
      </div>
      <div>
        <FormControlLabel
          control={
            <Switch
              checked={checkedC}
              onChange={event => setCheckedC(event.target.checked)}
              value="checkedC"
              classes={{
                switchBase: classes.switchBase,
                checked: classes.switchChecked,
                thumb: classes.switchIcon,
                track: classes.switchBar
              }}
            />
          }
          classes={{
            label: classes.label
          }}
          label="Horas preparación de lecciones"
        />
      </div>
    

<GridContainer justify="center">
  <GridItem xs={12} sm={12} md={12}>
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
    </GridItem>
  </GridContainer>

  </div>
  );
}