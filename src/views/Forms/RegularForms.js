import React, { Component } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";


// @material-ui/icons
import MailOutline from "@material-ui/icons/MailOutline";
import Check from "@material-ui/icons/Check";

import PropTypes from 'prop-types';
import clsx from 'clsx';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
import InfoIcon from '@material-ui/icons/Info';
import CloseIcon from '@material-ui/icons/Close';
import { amber, green } from '@material-ui/core/colors';
import IconButton from '@material-ui/core/IconButton';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import WarningIcon from '@material-ui/icons/Warning';

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import axios from 'axios';
import SweetAlert from "react-bootstrap-sweetalert";
import ApolloClient, { gql } from "apollo-boost";
import { useMutation } from '@apollo/react-hooks';


import styles from "assets/jss/material-dashboard-pro-react/views/regularFormsStyle";

const useStyles = makeStyles(styles);



export default function RegularForms() {
  
  const [post, setPost] = React.useState([]);
  const [cedula, setCedula] = React.useState("");
  const [mails, setMails] = React.useState("");
  const [sexo, setSexo] = React.useState("");
  const [edad, setEdad] = React.useState("");
  const [rol, setRol] = React.useState("");
  const [estado, setEstado] = React.useState("");
  const [nombre, setNombre] = React.useState("");
  const [apellido, setApellido] = React.useState("");
  const [checked, setChecked] = React.useState([24, 22]);
  const [selectedEnabled, setSelectedEnabled] = React.useState("b");
  const [selectedValue, setSelectedValue] = React.useState(null);
  const [alert,setAlert] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const handleChange = event => {
    setSelectedValue(event.target.value);
     
  };
  const handleChangeEnabled = event => {
    setSelectedEnabled(event.target.value);
  };
   const hideAlert = () => {
     console.log("Acá");
    setAlert(null);
  }

  const variantIcon = {
    success: CheckCircleIcon,
    warning: WarningIcon,
    error: ErrorIcon,
    info: InfoIcon,
  };

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


  const user = {
    cedula,
    nombre,
    apellido,
    sexo,
    mails,
    edad,
    rol,
    estado
  }

  const createUser = gql`
  mutation CreateUser($user: String!) {
    mutation createUser(user: $user) {
      document 
      name
    }
  }
`;



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
  
MySnackbarContentWrapper.propTypes = {
  className: PropTypes.string,
  message: PropTypes.string,
  onClose: PropTypes.func,
  variant: PropTypes.oneOf(['error', 'info', 'success', 'warning']).isRequired,
};

const useStyles2 = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
  },
}));



  
  const autoCloseAlert = () => {
    setAlert(
      <SweetAlert
        style={{ display: "block", marginTop: "-100px" }}
        title="¡Número de cédula incorrecto!"
        onConfirm={() => hideAlert()}
        showConfirm={false}
      >
        Verifique el formato del número ingresados.
      </SweetAlert>
    );
    setTimeout(hideAlert, 2000);
  };

  const loadPost = (post) => {
    setPost( post
    );
  };

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


  const modificarCedula = event   => { 
  
      setCedula(event.target.value);    
  } 

  const getPosts= (cedula) => {
    console.log(cedula);
    
   
    
  if(cedula.length===9){
              axios.get('https://apis.gometa.org/cedulas/' + cedula
              ).then(response=>{
                if(response.data.resultcount===0){  
                  autoCloseAlert();                
                   console.log("Mal sel numero");



                }else{
                
                  console.log(response.data.results[0]);
                  setNombre(response.data.results[0].firstname);
                  setApellido(response.data.results[0].lastname);

                //this.setState({ posts: response.data.results});
                }
                }

            );
        }else{
                  
          autoCloseAlert();
          console.log("Mal el numero");
         
      
        }
    
  }

  const [simpleSelect, setSimpleSelect] = React.useState("");
  const [simpleSelect1, setSimpleSelect1] = React.useState("");
  const [simpleSelect2, setSimpleSelect2] = React.useState("");
  const [simpleSelect3, setSimpleSelect3] = React.useState("");
  

  const handleToggle = value => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };
  
  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const classes = useStyles();
  return (
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
                  value: user.cedula
                  
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
                  value: user.mails 
                 
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
                  value: user.nombre
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
                  value: user.apellido
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
  );
}
