import React, { Component } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import FormLabel from "@material-ui/core/FormLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import Radio from "@material-ui/core/Radio";
import Checkbox from "@material-ui/core/Checkbox";


// @material-ui/icons
import MailOutline from "@material-ui/icons/MailOutline";
import Check from "@material-ui/icons/Check";
import Clear from "@material-ui/icons/Clear";
import Contacts from "@material-ui/icons/Contacts";
import FiberManualRecord from "@material-ui/icons/FiberManualRecord";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardText from "components/Card/CardText.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import axios from 'axios';
//import Posts from 'components/containers/Posts.js';

import styles from "assets/jss/material-dashboard-pro-react/views/regularFormsStyle";

const useStyles = makeStyles(styles);



export default function RegularForms() {
  const [post, setPost] = React.useState([]);
  const [cedula, setCedula] = React.useState("");
  const [nombre, setNombre] = React.useState("");
  const [apellido, setApellido] = React.useState("");
  const [checked, setChecked] = React.useState([24, 22]);
  const [selectedEnabled, setSelectedEnabled] = React.useState("b");
  const [selectedValue, setSelectedValue] = React.useState(null);
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

  const modificarCedula = event   => { 
  
      setCedula(event.target.value);    
  } 

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


  const classes = useStyles();
  return (
    
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
                  defaultValue: post.firstname,
                  autoComplete: "off"
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
  );
}
