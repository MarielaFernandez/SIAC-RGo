import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// material-ui icons
import Assignment from "@material-ui/icons/Assignment";
import Person from "@material-ui/icons/Person";
import Edit from "@material-ui/icons/Edit";
import Close from "@material-ui/icons/Close";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";



// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import Button from "components/CustomButtons/Button.js";


import { cardTitle } from "assets/jss/material-dashboard-pro-react.js";



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

const useStyles = makeStyles(styles);


export default function RegularTables() {
  const classes = useStyles();
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
  return (
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
          <Button color="info">Agregar</Button>

        </Card>
       
      </GridItem>
    </GridContainer>
  );
}
