import * as startOfDay from "date-fns";

import React from "react";
import { Calendar as BigCalendar, momentLocalizer } from "react-big-calendar";
// dependency plugin for react-big-calendar
import moment from "moment";
import * as dates from 'date-arithmetic'
import TimeGrid from 'react-big-calendar/lib/TimeGrid';
import { purple, red, green } from '@material-ui/core/colors';
// react component used to create alerts
import { withStyles } from '@material-ui/core/styles';
import SweetAlert from "react-bootstrap-sweetalert";
import Radio from "@material-ui/core/Radio";
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FiberManualRecord from "@material-ui/icons/FiberManualRecord";
import Switch from '@material-ui/core/Switch';
import InputAdornment from "@material-ui/core/InputAdornment";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Heading from "components/Heading/Heading.js";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import Grid from '@material-ui/core/Grid';

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";

import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

import styles from "assets/jss/material-dashboard-pro-react/components/buttonStyle.js";

import { events as calendarEvents } from "variables/general.js";

import ApolloClient, { gql } from "apollo-boost";
import { ApolloProvider, Query } from "react-apollo";


const localizer = momentLocalizer(moment);

const useStyles = makeStyles(styles);


export default function DoProyecto() {

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
  
  
  const [selectedDate, setSelectedDate] = React.useState(new Date('2019-01-01T21:11:54'));
  const [selectedEnabled, setSelectedEnabled] = React.useState("a");
  const handleDateChange = date => {
    setSelectedDate(date);
  };
  
  const classes = useStyles();

  const [state, setState] = React.useState({
    opcion : "red"
  });

  const [events, setEvents] = React.useState(calendarEvents);
  const [alert, setAlert] = React.useState(null);
  const [simpleSelect, setSimpleSelect] = React.useState("");
  const selectedEvent = event => {
    window.alert(event.title);
  };  


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
      <FormControl component="fieldset">
                <FormLabel component="legend">Seleccione Actividad</FormLabel>
                <FormGroup>
                  <FormControlLabel
                    control={<PurpleSwitch color = "primary" checked={state.opcion ==="red"} onChange={handleChange()} value="red" />}
                    label="HC"
                  />
                  <FormControlLabel
                    control={<RedSwitch color = "secondary" checked={state.opcion ==="green"} onChange={handleChange()} value="green" />}
                    label="HA"
                  />
                  <FormControlLabel
                    control={
                      <GreenSwitch color = "default" checked={state.opcion ==="yellow"} onChange={handleChange()} value="yellow" />
                    }
                    label="HP"
                  />
                </FormGroup>      
              </FormControl>
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
