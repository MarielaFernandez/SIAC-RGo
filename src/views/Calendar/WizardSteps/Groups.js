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
        style={{ display: "inline", marginTop: "-400px", width:900, scrollbarPadding:"true" }}
        control
        control={
          <Scroll color = "default"/>
        }
        //title="Input something"
        onConfirm={e => {
          inputConfirmAlertNext(e);
        }}
        onCancel={() => hideAlert()}
        confirmBtnCssClass={classes.button + " " + classes.info}
        cancelBtnCssClass={classes.button + " " + classes.danger}
        >


        <GridContainer justify="center">
          <GridItem xs={12} sm={12}>

              <Wizard
                validate
                steps={[
                  { stepName: "Step1", stepComponent: Step1, stepId: "Step1" },
                  { stepName: "Step2", stepComponent: Step2, stepId: "Step2" },
                  { stepName: "Step3", stepComponent: Step3, stepId: "Step3" }
                ]}
                title="Administración"
                subtitle="This information will let us know more about you."
                finishButtonClick={e => alert(e)}
              />
              </GridItem>
            </GridContainer>
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
