import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import InputLabel from "@material-ui/core/InputLabel";

// material-ui icons
import Assignment from "@material-ui/icons/Assignment";
import Person from "@material-ui/icons/Person";
import Edit from "@material-ui/icons/Edit";
import Close from "@material-ui/icons/Close";
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
import InfoIcon from '@material-ui/icons/Info';
import CloseIcon from '@material-ui/icons/Close';
import { amber, green } from '@material-ui/core/colors';
import IconButton from '@material-ui/core/IconButton';
import WarningIcon from '@material-ui/icons/Warning';
import clsx from 'clsx';
import MailOutline from "@material-ui/icons/MailOutline";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';

import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

import axios from 'axios';
import CustomInput from "components/CustomInput/CustomInput.js";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Check from "@material-ui/icons/Check";
import FormControl from "@material-ui/core/FormControl";


import Checkbox from "@material-ui/core/Checkbox";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import Button from "components/CustomButtons/Button.js";

import SweetAlert from "react-bootstrap-sweetalert";


import { cardTitle } from "assets/jss/material-dashboard-pro-react.js";

import ApolloClient, { gql } from "apollo-boost";
import { ApolloProvider, Query } from "react-apollo";

const styles = {
  customCardContentClass: {
    paddingLeft: "0",
    paddingRight: "0"
  },
  cardIconTitle: {
    ...cardTitle,
    marginTop: "15px",
    marginBottom: "0px"
  }
  
};

const variantIcon = {
  success: CheckCircleIcon,
  warning: WarningIcon,
  error: ErrorIcon,
  info: InfoIcon,
};

const useStyles = makeStyles(styles);









function MySnackbarContentWrapper(props) {
  const classes = useStyles1();
  const { className, message, onClose, variant, ...other } = props;
  const Icon = variantIcon[variant];

  return (
    <div>
    <SnackbarContent
      className={clsx(classes[variant], className)}
      aria-describedby="client-snackbar"
      message={
        <span id="client-snackbar" className={classes.message}>
          <Icon className={clsx(classes.icon, classes.iconVariant)} />
          {message}
        </span>
      }
      action={[
        <IconButton key="close" aria-label="close" color="inherit" onClick={onClose}>
          <CloseIcon className={classes.icon} />
        </IconButton>,
      ]}
      {...other}
    />
    </div>
  );
}

const useStyles1 = makeStyles(theme => ({
  success: {
    backgroundColor: green[600],
  },
  error: {
    backgroundColor: theme.palette.error.dark,
  },
  info: {
    backgroundColor: theme.palette.primary.main,
  },
  warning: {
    backgroundColor: amber[700],
  },
  icon: {
    fontSize: 20,
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing(1),
  },
  message: {
    display: 'flex',
    alignItems: 'center',
  },
}));





export default function RegularTables() {

  const [alert, setAlert] = React.useState(null);
  const [inputValue, setInputValue] = React.useState(null);
  const [mails, setMails] = React.useState("");
  const [post, setPost] = React.useState([]);
  const [cedula, setCedula] = React.useState("");
  const [nombre, setNombre] = React.useState("");
  const [apellido, setApellido] = React.useState("");
  const [selectedEnabled, setSelectedEnabled] = React.useState("b");
  const [selectedValue, setSelectedValue] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [simpleSelect, setSimpleSelect] = React.useState("");


  const classes = useStyles();

  const UsersQuery = () => {
    return (
      <Query
        query={gql`
          {
            users {              
              _id,
              name,
              email
            }
          }
        `}
      >
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error, sin conexion!</p>;
  
          return <FormControl
          
            fullWidth
            className={classes.selectFormControl}
          >
          <InputLabel
            htmlFor="simple-select"
            className={classes.selectLabel}
          >
            Elija la provincia
          </InputLabel>
          <Select
            MenuProps={{
              className: classes.selectMenu
            }}
            classes={{
              select: classes.select
            }}
            
            inputProps={{
              name: "simpleSelect",
              id: "simple-select"
            }}
          > {data.users.map(user => {
            console.log(user.email);
            return <MenuItem

           
  
              key={user.email}
              classes={{
  
                  root: classes.selectMenuItem,
                  selected: classes.selectMenuItemSelected
              }}
              value={user.email}
            > { user.email } </MenuItem>
          })}
          </Select>
          </FormControl>
        }}
      </Query>
    );
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
   
    setOpen(false);
  };


  const handleSimple = event => {
    setSimpleSelect(event.target.value);
  };

  const handleClick = () => {
    setOpen(true);
  };

  const buttons = [
    { color: "info", icon: Person },
    { color: "success", icon: Edit },
    { color: "danger", icon: Close }
  ].map((prop, key) => {
    return (
      <Button color={prop.color} className={classes.actionButton} key={key}>
        <prop.icon className={classes.icon} />
      </Button>
    );
  });

  const validMail = event => {
    console.log(event.target.value);
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
  
      if(reg.test(event.target.value) === false)
      {
        console.log("Email is Not Correct");
        handleClick();
        setMails(event.target.value)
        return false;
      }
      else {
        setMails(event.target.value)
        handleClose();
        console.log("Email is Correct");
      }
  
  }

  const inputAlert = () => {
    setAlert(
      <SweetAlert
  
        showCancel
        style={{ display: "block", marginTop: "-280px" }}
        title="Editar Funcionario"
        onConfirm={e => {
          inputConfirmAlertNext(e);
        }}
        onCancel={() => hideAlert()}
        confirmBtnCssClass={classes.button + " " + classes.info}
        cancelBtnCssClass={classes.button + " " + classes.danger}
  
  
  
  >
  <GridContainer>
  <GridItem xs={12} sm={12} md={12}>
  
        <form>
        
        <div>
    {alert}
    <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <MySnackbarContentWrapper
          onClose={handleClose}
          variant="error"
          message="¡Correo Incorrecto!"
        />
      </Snackbar>
    <GridContainer>
      <GridItem xs={12} sm={12} md={6}>
        <Card>
          <CardHeader color="rose" icon>
            <CardIcon color="rose">
              <MailOutline />
            </CardIcon>
            <h4 className={classes.cardIconTitle}>Registro de Funcionarios</h4>
          </CardHeader>
          <CardBody>
            <form>
          
            <CustomInput
                labelText="Cédula"
                id="id_Employee"
                formControlProps={{
                  fullWidth: true
                }}   
                            
                value={cedula} 
               

                inputProps={{ 
                
                  onChange: modificarCedula,
                  name: "cedula",
                  autoComplete: "off",
                  value: cedula
                  
                  }
                }
                
              />
              
              
               <Button color="info" onClick={() => getPosts(cedula)}>Buscar</Button>
              
               
               <CustomInput
                labelText="e-mail"
                id="mail_Employee"
                formControlProps={{
                  fullWidth: true
                }}

                
                inputProps={{
                  onChange: validMail,
                  name: "mails",
                  autoComplete: "off",
                  value: mails 
                 
                }}
              />
              <CustomInput
                labelText="nombre"
                id="name_Employee"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  type: "email",
                  value: nombre
                }}
              />
              <CustomInput
                labelText={"apellido"}
                id="lastName_Employee"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  

                  autoComplete: "off",
                  value: apellido
                }}
              />
              <div>
              
              Selección de sexo
               <div className={classes.checkboxAndRadio}>
                <FormControlLabel
                  control={
                    <Checkbox
                      tabIndex={-1}   
                      onClick={() => handleChange()}
                      checkedIcon={<Check className={classes.checkedIcon} />}
                      icon={<Check className={classes.uncheckedIcon} />}
                      classes={{
                        checked: classes.checked,
                        root: classes.checkRoot
                      }}
                    />
                  }
                  classes={{
                    label: classes.label,
                    root: classes.labelRoot
                  }}
                  label="Femenino"
                />
              </div>

           
              <div className={classes.checkboxAndRadio}>
               
                <FormControlLabel
                  control={
                    <Checkbox
                      tabIndex={-1}   
                      onClick={() => handleChange()}
                      checkedIcon={<Check className={classes.checkedIcon} />}
                      icon={<Check className={classes.uncheckedIcon} />}
                      classes={{
                        checked: classes.checked,
                        root: classes.checkRoot
                      }}
                    />
                  }
                  classes={{
                    label: classes.label,
                    root: classes.labelRoot
                  }}
                  label="Masculino"
                />
              </div>
             </div> 
              


             Activación
             
              <div className={classes.checkboxAndRadio}>
               
                <FormControlLabel
                  control={
                    <Checkbox
                      tabIndex={-1}
                      onClick={() => handleChange()}
                      checkedIcon={<Check className={classes.checkedIcon} />}
                      icon={<Check className={classes.uncheckedIcon} />}
                      classes={{
                        checked: classes.checked,
                        root: classes.checkRoot
                      }}
                    />
                  }
                  classes={{
                    label: classes.label,
                    root: classes.labelRoot
                  }}
                  label="Activar Funcionario"
                />
              </div>
              
              <Button color="info" >Agregar</Button>
            </form>
          </CardBody>
        </Card>
      </GridItem>
      <GridItem xs={12} sm={12} md={6}>

      </GridItem>
      <GridItem xs={12} sm={12} md={12}>

      </GridItem>
      <GridItem xs={12} sm={12} md={12}>

      </GridItem>
    </GridContainer>
    </div>
          
  
  
        </form>
  
  </GridItem>
  <GridItem xs={12} sm={12} md={6}>
 
  
  </GridItem>
  </GridContainer>
  </SweetAlert>
    );
  };
  const modificarCedula = event   => {
    console.log('Acá')
    setCedula(event.target.value);
}
const handleChange = event => {
  setSelectedValue(event.target.value);
};
const handleChangeEnabled = event => {
  setSelectedEnabled(event.target.value);
};


const loadPost = (post) => {
  setPost( post
  );
};
const getPosts= (cedula) => {
  console.log(cedula);
  axios.get('https://apis.gometa.org/cedulas/' + cedula
  ).then(response=>{
      console.log(response.data.results[0]);
      setNombre(response.data.results[0].firstname);
      setApellido(response.data.results[0].lastname);

    //this.setState({ posts: response.data.results});


});
}

const inputConfirmAlertNext = e => {
  setAlert(e);
  setTimeout(() => {
    setAlert(
      <SweetAlert
        style={{ display: "block", marginTop: "-100px" }}
        onConfirm={() => hideAlert()}
        onCancel={() => hideAlert()}
        confirmBtnCssClass={classes.button + " " + classes.info}
        title={
          <p>
            You entered: <b>{e}</b>
          </p>
        }
      />
    );
  }, 200);
};
const hideAlert = () => {
  setAlert(null);
};

  return (
    
    <div> 
       {alert}
    
    <GridContainer>
      <GridItem xs={12}>
       
      </GridItem>
      <GridItem xs={12}>
        
      </GridItem>
      <GridItem xs={12}>
        <Card>
          <CardHeader color="rose" icon>
            <CardIcon color="rose">
              <Assignment />
            </CardIcon>
            <h4 className={classes.cardIconTitle}>Lista de Funcionarios</h4>
          </CardHeader>
          <CardBody className={classes.customCardContentClass}>
          <UsersQuery /> 
            <Table
              hover
              tableHead={[" Cédula", "Nombre", "Apellido", "E-mail", "Estado", "Acciones"]}
  
            
              tableData={[
                {
                  color: "success",
                  data: [
                    "1",
                    "Nury",
                    "Leitón",
                    "lajefa@ucr.ac.cr",
                    "Activo",buttons
                   
                    
                  ]

                
                  
                } ,
               
                ["2", "Juan", "Gamboa", "juan.gamboa@ucr.ac.cr", "Activo",buttons],
                {
                  color: "info",
                  data: [
                    "3",
                    "Yendry",
                    "Lezcano",
                    "yen.dry@ucr.ac.cr",
                    "Activo",buttons
                  ]
                },
                [
                  "4",
                  "Rolando",
                  "Vargas",
                  "rolo.varg@ucr.ac.cr",
                  "Activo",buttons
                ],
                {
                  color: "danger",
                  data: [
                    "5",
                    "Gabriela",
                    "Loaiza",
                    "gaby.loai@ucr.ac.cr",
                    "Activo",buttons
                  ]
                },
                ["6", "Jorge", "Segura", "george@ucr.ac.cr", "Activo",buttons],
                {
                  color: "warning",
                  data: [
                    "7",
                    "Randall",
                    "Jiménez",
                    "rajim@ucr.ac.cr",
                    "Activo",buttons
                  ]
                }
              ]}
            
              
              
            />
          </CardBody>
          <Button color="info"  onClick={inputAlert} >Agregar</Button>

        </Card>
       
      </GridItem>
    </GridContainer>
    </div>
  );

  



}
