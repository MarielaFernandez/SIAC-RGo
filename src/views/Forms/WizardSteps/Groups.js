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
// import Step2 from "./WizardSteps/Step2.js";
// import Step3 from "./WizardSteps/Step3.js";
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
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';

import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContentText from '@material-ui/core/DialogContentText';


import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

//import FormLabel from "@material-ui/core/FormLabel";
import InputLabel from "@material-ui/core/InputLabel";


import ReactDOM from "react-dom";
import ApolloClient, { gql } from "apollo-boost";
import { ApolloProvider, Query } from "react-apollo";



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
  const [open, setOpen] = React.useState(false);

  const [simpleSelect, setSimpleSelect] = React.useState("");

  const handleSimple = event => {
    setSimpleSelect(event.target.value);
  };

  const Scroll = withStyles({
    switchBase: {
        overflow: "auto"
      },
  })(Switch);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
 
  };


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
        onConfirm={e => {
          inputConfirmAlertNext(e);
        }}
        onCancel={() => hideAlert()}
        confirmBtnCssClass={classes.button + " " + classes.info}
        cancelBtnCssClass={classes.button + " " + classes.danger}
        >

        <GridContainer justify="center" spacing={5}>
          <GridItem xs={12} sm={12}>

              <Wizard
                validate
                steps={[
                  { stepName: "Cursos", stepComponent: Cursos, stepId: "Cursos" },
                  { stepName: "Grupos", stepComponent: Grupos, stepId: "Grupos" },
                  { stepName: "Horarios", stepComponent: Cursos, stepId: "Horarios" }
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
    
    <Card>
    <GridContainer>

    <GridItem  xs={12} sm={12} md={3}>
     <FormControl className={classes.formControl} >
       <TextField
        margin="dense"
        id="name"
        label="Creditos"
        type="label"
        fullWidth
        //disabled
        //onChange={handleCreditos}
       value={"if5200"}
      />
      </FormControl>
      </GridItem>


      <FormControl className={classes.formControl}>
        <p />
      </FormControl> 
      
      <GridItem  xs={12} sm={12} md={3}>
      <FormControl className={classes.formControl}>
        <TextField
         margin="dense"
         id="name"
         label="Creditos"
         type="label"
         fullWidth
         
         //onChange={handleCreditos}
        value={"if5200"}
       />
       </FormControl>
       </GridItem>

       <GridItem  xs={12} sm={12} md={3}>
       <FormControl className={classes.formControl}>
       <Query
        query={gql`
         {
           users {
             name
           }
         }
       `}
      >
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error!</p>;

          return <div className={classes.container}>

            <GridItem xs={12}>
              <div>
                <FormControl
                  fullWidth
                  className={classes.selectFormControl}
                >

                  <InputLabel
                    htmlFor="simple-select"
                    className={classes.selectLabel}
                  >
                    Requisitos/Correquisitos
           </InputLabel>

                  <Select
                    MenuProps={{
                      className: classes.selectMenu
                    }}
                    classes={{
                      select: classes.select
                    }}
                    value={simpleSelect}
                    onChange={handleSimple}


                    inputProps={{
                      name: "simpleSelect",
                      id: "simple-select"
                    }}

                  >
                    {console.log("Correquisitos= " + simpleSelect)}

                    {data.users.map(user => {

                      return <MenuItem
                        key={user.name}
                        classes={{

                          root: classes.selectMenuItem,
                          selected: classes.selectMenuItemSelected
                        }}
                        value={user.name}
                      >
                        {user.name}
                      </MenuItem>
                    })}
                  </Select>
                </FormControl>

              </div>
            </GridItem>
          </div>
        }}
      </Query>
      </FormControl>
      </GridItem>


      <GridItem  xs={12} sm={12} md={3}>
      <FormControl className={classes.formControl}>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Asignar Grupo
       </Button>
       </FormControl>
       </GridItem>



      </GridContainer>


   
        <br/>
            <GridContainer style={{ justifyContent: 'center' }}>
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
              Agregar un nuevo Grupo
            </Button>

            <div>
              <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" >
                <DialogTitle id="form-dialog-title">Agregar Curso</DialogTitle>
                <DialogContent>
                  <DialogContentText>
                    Formulario de ingreso de Grupos
                 </DialogContentText>




                 
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose} color="primary">
                    Cancel
                 </Button>
                  <Button onClick={handleClose} color="primary">
                    Subscribe
                 </Button>
                </DialogActions>
              </Dialog>
            </div>
            </GridContainer>



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
              </div>

  );
}
