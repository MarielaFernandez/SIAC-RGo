import * as startOfDay from "date-fns";
import React from "react";
import { Calendar as BigCalendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import SweetAlert from "react-bootstrap-sweetalert";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import InputLabel from "@material-ui/core/InputLabel";
// core components
import styles from "assets/jss/material-dashboard-pro-react/customCheckboxRadioSwitch.js";
import Heading from "components/Heading/Heading.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import InputAdornment from "@material-ui/core/InputAdornment";
import MenuItem from "@material-ui/core/MenuItem";

import { events as calendarEvents } from "variables/general.js";

import ApolloClient, { gql } from "apollo-boost";
import { ApolloProvider, Query } from "react-apollo";


const localizer = momentLocalizer(moment);

const useStyles = makeStyles(styles);

export default function DoAdmin() {

  const EventList=[
    
  ];


    const EventsQuery = () => {
      return (
        <Query
          query={gql`
            {
              events {              
                _id,
              title,
              start,
              end,
              allDay,
              color
              }
            }
          `}
        >
          {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error!</p>;
          data.events.map(event => {
            EventList.push({title:event.title, start:event.start, end:event.end, allDay:event.allDay, color:event.color})
          })

            return <BigCalendar
            localizer={localizer}
            views={['week', 'agenda']}                              
            // startAccessor="start"
            // endAccessor="end"                
            selectable
            resizable
            localizer={localizer}
            events={EventList}
            defaultView="week"
            //scrollToTime={new Date(2019, 1, 1, 6)}
            //date={new Date(2019, 8, 29, 6)}
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
            messages={{
              next: "sig",
              previous: "ant",
              today: "Hoy",
              month: "Mes",
              week: "Semana",
              day: "Día"
            }}              
            culture = {'es'}                
          />
          }}
        </Query>
      );
    };
  
  
    const [simpleSelect, setSimpleSelect] = React.useState("");
  
    const handleSimple = event => {
      setSimpleSelect(event.target.value);
    };
  

    const [state, setState] = React.useState({ //switch
      checkedA: true,
    });
  
    const handleChange = name => event => {
      setState({ ...state, [name]: event.target.checked });//switch
    };


  
  const classes = useStyles();

  const [selectedDate, setSelectedDate] = React.useState(new Date('2019-01-01T21:11:54'));
  const handleDateChange = date => {
    setSelectedDate(date);
  };
  
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


  const minTime = new Date(); //calendar
  minTime.setHours(7,0,0);
  const maxTime = new Date();
  maxTime.setHours(22,0,0);





  return (
    <div>
      
      <h4>Paso 1: Ingrese la fecha de inicio y final de su contrato.</h4>
      <br/>

      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid container justify="space-around">
        <InputLabel className={classes.label}>
         Fecha inicio de contrato
        </InputLabel>
          <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          label="Elija una fecha"
          format="dd/MM/yyyy"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        <InputLabel className={classes.label}>
        Fecha final de contrato
        </InputLabel>
        <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          label="Elija una fecha"
          format="dd/MM/yyyy"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
      </Grid>    
    </MuiPickersUtilsProvider>

      <br/>
      <h4>Paso 2: Habilite o encienda el switch para seleccionar en el horario.</h4>
      <br/>
      <div>
      <FormControlLabel
        control={
          <Switch
            checked={state.checkedB}
            onChange={handleChange('checkedB')}
            value="checkedA"
            color="primary"
          />
        }
        label="Horas contacto"
      />
      </div>

      <br/>

    

<GridContainer justify="center">
  <GridItem xs={12} sm={12} md={12}>
      <Card>
        <CardBody>
        <EventsQuery />
        </CardBody>
      </Card>
    </GridItem>
  </GridContainer>

  </div>
  );
}