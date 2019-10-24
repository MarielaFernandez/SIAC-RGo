/*eslint-disable*/

import React from "react";
// react components used to create a calendar with events on it
import { Calendar as BigCalendar, momentLocalizer  } from "react-big-calendar";
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
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FiberManualRecord from "@material-ui/icons/FiberManualRecord";
import Switch from '@material-ui/core/Switch';
import Button from "components/CustomButtons/Button.js";
import Slide from "@material-ui/core/Slide";
import Datetime from "react-datetime";



// @material-ui/icons
import Close from "@material-ui/icons/Close";

import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";


// @material-ui/core components
import { events as calendarEvents } from "variables/general.js";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

require('moment/locale/es.js');
// core components
import Heading from "components/Heading/Heading.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import Grid from '@material-ui/core/Grid';

import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

import styles from "assets/jss/material-dashboard-pro-react/components/buttonStyle.js";

import Wizard from "components/Wizard/Wizard.js";

import Step1 from "./WizardSteps/Step1.js";
import Step2 from "./WizardSteps/Step2.js";
import Step3 from "./WizardSteps/Step3.js";




import Accordion from "components/Accordion/Accordion.js";

const localizer = momentLocalizer(moment);

const useStyles = makeStyles(styles);




export default function Calendar() {
  const [selectedEnabled, setSelectedEnabled] = React.useState("a");
  const classes = useStyles();
  
  const [state, setState] = React.useState({
    opcion : "red"
  });

  

  const [events, setEvents] = React.useState(calendarEvents);
  const [alert, setAlert] = React.useState(null);
  const [modal, setModal] = React.useState(false);
  const [simpleSelect, setSimpleSelect] = React.useState("");
  
  const style = {
    label: {
      color: "rgba(0, 0, 0, 0.26)",
      cursor: "pointer",
      display: "inline-flex",
      fontSize: "14px",
      transition: "0.3s ease all",
      lineHeight: "1.428571429",
      fontWeight: "100",
      paddingLeft: "0"
    }
  };
  
  

  const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));
  //const [selectedDate, handleDateChange] = useState(new Date());Date TIme Picker con error
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

  const minTime = new Date();
  minTime.setHours(8,0,0);
  const maxTime = new Date();
  maxTime.setHours(20,0,0);  

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
  
  MyWeek.navigate = (date, action) => {
    switch (action) {
      case Navigate.PREVIOUS:
        return dates.add(date, -3, 'day')
  
      case Navigate.NEXT:
        return dates.add(date, 3, 'day')
  
      default:
        return date
    }
  }
  
  MyWeek.title = date => {
    return `Mi declaración: ${date.toLocaleDateString()}`
  }
  
  var eventColors = event => {
    var backgroundColor = "event-";
    event.color
      ? (backgroundColor = backgroundColor + event.color)
      : (backgroundColor = backgroundColor + state.opcion);
    return {
      className: backgroundColor
    };
  };
  
  const successAlert = () => {
    setAlert(
      <SweetAlert
        //success
        style={{ display: "block", marginTop: "-315px" }}
        title="Fechas contrato"
        onConfirm={() => hideAlert()}
        onCancel={() => hideAlert()}
        confirmBtnCssClass={
          classes.button + " " + classes.success
        }              
      >
        </SweetAlert>)}


  return (   
      <div>
       {alert}
      
      <GridContainer justify="center">
        <GridItem xs={2} sm={2} md={2}>
              <FormControl component="fieldset">
                <FormLabel component="legend">Seleccione una Actividad</FormLabel>
                
      <Button color="rose" round onClick={() => setModal(true)}>
      Fecha Contrato
      </Button>
      <Dialog 
      classes={{
        root: classes.center,
        paper: classes.modal
      }}
      open={modal}
      transition={Transition}
      keepMounted
      onClose={() => setModal(false)}
      aria-labelledby="modal-slide-title"
      aria-describedby="modal-slide-description"
    >
      <DialogTitle
        id="classic-modal-slide-title"
        disableTypography
        className={classes.modalHeader}
      >
        <Button
          justIcon
          className={classes.modalCloseButton}
          key="close"
          aria-label="Close"
          color="transparent"
          onClick={() => setModal(false)}
        >
          <Close className={classes.modalClose} />
        </Button>
        <h4 className={classes.modalTitle}
        >Seleccione la fecha de inicio y fecha final de su contrato</h4>
      </DialogTitle>
      <DialogContent
        id="modal-slide-description"
        className={classes.modalBody}
      >
        <InputLabel className={classes.label}></InputLabel>
     
        
      <InputLabel className={classes.label}>
      Fecha inicio de contrato
      </InputLabel>
      
      <FormControl fullWidth>
        <Datetime
          timeFormat={false}
          inputProps={{ placeholder: "Fecha contrato" }}
        />
      </FormControl>
      <InputLabel className={classes.label}>
      Fecha fin de contrato
      </InputLabel>
      
      <FormControl fullWidth>
        <Datetime
          timeFormat={false}
          inputProps={{ placeholder: "Fecha Inicio Contrato" }}
        />
      </FormControl>
      </DialogContent>
      </Dialog>
      </FormControl>
      </GridItem>
      </GridContainer>
      </div>
  );  



  


  return (   
      <div>
  <GridContainer justify="center">

    <GridItem xs={2} sm={2} md={2}>
          <FormControl component="fieldset">


    {alert}
   

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

    <GridItem xs={10} sm={10} md={9}>
    <GridContainer justify="center">
      <GridItem xs={12} sm={12}>
        <Wizard
          validate
          steps={[
            { stepName: "Docente Curso", stepComponent: Step1, stepId: "Cursos" },
            { stepName: "Docente Administrativo", stepComponent: Step2, stepId: "Grupos" },
            { stepName: "Docente Proyecto", stepComponent: Step3, stepId: "Horarios" }
          ]}
          title="Administración"
          subtitle="Seleccione una opción acorde a su designación."
          finishButtonClick={e => alert(e)}
        />
      </GridItem>
    </GridContainer>

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
  )};
