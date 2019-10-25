import React from "react";
// react component for creating dynamic tables
import ReactTable from "react-table";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Assignment from "@material-ui/icons/Assignment";
import Dvr from "@material-ui/icons/Dvr";
import Favorite from "@material-ui/icons/Favorite";
import Close from "@material-ui/icons/Close";

import Wizard from "components/Wizard/Wizard.js";

import Cursos from "./Courses.js";
import Grupos from "./Groups.js";

 import Step1 from "./Step1.js";
 import Step2 from "./Step2.js";
 import Step3 from "./Step3.js";

import { withStyles } from '@material-ui/core/styles';

import Switch from '@material-ui/core/Switch';

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardIcon from "components/Card/CardIcon.js";
import CardHeader from "components/Card/CardHeader.js";
import SweetAlert from "react-bootstrap-sweetalert";
import { dataTable } from "variables/general.js";

import { cardTitle } from "assets/jss/material-dashboard-pro-react.js";

const styles = {
  cardIconTitle: {
    ...cardTitle,
    marginTop: "15px",
    marginBottom: "0px"

  }
};

const useStyles = makeStyles(styles);

export default function Groups() {

  const [alert, setAlert] = React.useState(null);
  const [inputValue, setInputValue] = React.useState(null);

  const Scroll = withStyles({
    switchBase: {
        overflow: "auto"
      },
  })(Switch);


  // Swal.fire({
  //   imageUrl: 'https://placeholder.pics/svg/300x1500',
  //   imageHeight: 1500,
  //   imageAlt: 'A tall image'
  // });

//overflow: "scroll"

  const inputAlert = () => {


    setAlert(


      <SweetAlert

        showCancel
        style={{  marginTop: "-400px", width:200 }}
        control

        title="Input something"
        onConfirm={e => {
          inputConfirmAlertNext(e);
        }}
        onCancel={() => hideAlert()}
        confirmBtnCssClass={classes.button + " " + classes.info}
        cancelBtnCssClass={classes.button + " " + classes.danger}
        >

        hablar de texto de relleno, seguro que os viene a la cabeza uno que comienza por “Lorem ipsum dolor sit amet”. Acerca de él, la wikipedia nos dice lo siguiente:

        es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto final. El texto en sí no tiene sentido, sino que deriva de la lengua latina a cuyas palabras se les han eliminado sílabas o letras.
        Dado que este es el texto de relleno más usado, veremos cuatro sitios que nos proveen de él de diferentes maneras. Sin embargo, veremos también otros cuatro que nos dan otros textos diferentes, también con el mismo objetivo: rellenar para poder dar forma a nuestro diseño, ya sea web, documento, etc.

        <h2>Lorem ipsum</h2>
        Lorem ipsum

        Esta página contiene, además del generador de texto, una pequeña introducción donde se nos cuenta el origen e historia de este texto de rellleno. En cuanto al generador, nos permite indicar el número de párrafos, palabras, bytes o listas (de cuatro o cinco puntos) que queremos que tenga nuestro relleno.
        Por cierto, incluye una página que contiene varios banners en los tamaños más usados actualmente en la web. Aunque no son imágenes que podamos personalizar como en los servicios que vimos en el post sobre imágenes de relleno, pueden servirnos en algún momento. Además, se pueden descargar todos de un solo golpe dentro de un zip.

      </SweetAlert>
    );
  };

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

  const [data, setData] = React.useState(
    dataTable.dataRows.map((prop, key) => {
      return {
        id: key,
        name: prop[0],
        position: prop[1],
        office: prop[2],
        age: prop[3],
        actions: (
          // we've added some custom button actions
          <div className="actions-right">
            {/* use this button to add a like kind of action */}
            <Button
              justIcon
              round
              simple
              onClick={inputAlert}
              color="info"
              className="like"
            >
              <Favorite />
            </Button>{" "}
            {/* use this button to add a edit kind of action */}
            <Button
              justIcon
              round
              simple
              onClick={() => {
                let obj = data.find(o => o.id === key);
                alert(
                  "You've clicked EDIT button on \n{ \nName: " +
                    obj.name +
                    ", \nposition: " +
                    obj.position +
                    ", \noffice: " +
                    obj.office +
                    ", \nage: " +
                    obj.age +
                    "\n}."
                );
              }}
              color="warning"
              className="edit"
            >
              <Dvr />
            </Button>{" "}
            {/* use this button to remove the data row */}
            <Button
              justIcon
              round
              simple
              onClick={() => {
                var newData = data;
                newData.find((o, i) => {
                  if (o.id === key) {
                    // here you should add some custom code so you can delete the data
                    // from this component and from your server as well
                    newData.splice(i, 1);
                    return true;
                  }
                  return false;
                });
                setData([...newData]);
              }}
              color="danger"
              className="remove"
            >
              <Close />
            </Button>{" "}
          </div>
        )
      };
    })
  );
  const classes = useStyles();
  return (
    <div>
    {alert}
    <GridContainer>
    <Card>

      <CardBody>
            <ReactTable
              data={data}
              filterable
              columns={[
                {
                  Header: "Name",
                  accessor: "name"
                },
                {
                  Header: "Position",
                  accessor: "position"
                },
                {
                  Header: "Office",
                  accessor: "office"
                },
                {
                  Header: "Age",
                  accessor: "age"
                },
                {
                  Header: "Actions",
                  accessor: "actions",
                  sortable: false,
                  filterable: false
                }
              ]}
              defaultPageSize={10}
              showPaginationTop
              showPaginationBottom={false}
              className="-striped -highlight"
            />
            </CardBody>
            </Card>

              </GridContainer>
              </div>

  );
}
