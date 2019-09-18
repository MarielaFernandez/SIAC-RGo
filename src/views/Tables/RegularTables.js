import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// material-ui icons
import Assignment from "@material-ui/icons/Assignment";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";

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
              tableHead={[" Cédula", "Nombre", "Apellido", "E-mail", "Estado"]}
              tableData={[
                {
                  color: "success",
                  data: [
                    "1",
                    "Nury",
                    "Leitón",
                    "lajefa@ucr.ac.cr",
                    "Activo"
                  ]
                },
                ["2", "Juan", "Gamboa", "juan.gamboa@ucr.ac.cr", "Activo"],
                {
                  color: "info",
                  data: [
                    "3",
                    "Yendry",
                    "Lezcano",
                    "yen.dry@ucr.ac.cr",
                    "Activo"
                  ]
                },
                [
                  "4",
                  "Rolando",
                  "Vargas",
                  "rolo.varg@ucr.ac.cr",
                  "Activo"
                ],
                {
                  color: "danger",
                  data: [
                    "5",
                    "Gabriela",
                    "Loaiza",
                    "gaby.loai@ucr.ac.cr",
                    "Activo"
                  ]
                },
                ["6", "Jorge", "Segura", "george@ucr.ac.cr", "Activo"],
                {
                  color: "warning",
                  data: [
                    "7",
                    "Randall",
                    "Jiménez",
                    "rajim@ucr.ac.cr",
                    "Activo"
                  ]
                }
              ]}
            />
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}
