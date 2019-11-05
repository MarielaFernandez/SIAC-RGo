import React from "react";
// react component for creating dynamic tables
import ReactTable from "react-table";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

import axios from 'axios';

// @material-ui/icons
//import Assignment from "@material-ui/icons/Assignment";
import Dvr from "@material-ui/icons/Dvr";
import Favorite from "@material-ui/icons/Favorite";
import Close from "@material-ui/icons/Close";

//import MailOutline from "@material-ui/icons/MailOutline";
import Check from "@material-ui/icons/Check";
//import Clear from "@material-ui/icons/Clear";
//import Contacts from "@material-ui/icons/Contacts";
//import FiberManualRecord from "@material-ui/icons/FiberManualRecord";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";

import CustomInput from "components/CustomInput/CustomInput.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
//import CardIcon from "components/Card/CardIcon.js";
//import CardHeader from "components/Card/CardHeader.js";
import SweetAlert from "react-bootstrap-sweetalert";
import { dataTable } from "variables/general.js";

import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
//import FormLabel from "@material-ui/core/FormLabel";
import InputLabel from "@material-ui/core/InputLabel";


import DialogContentText from '@material-ui/core/DialogContentText';

import ReactDOM from "react-dom";
import ApolloClient, { gql } from "apollo-boost";
import { ApolloProvider, Query } from "react-apollo";

//import Modal from 'react-bootstrap/Modal'

import styles from "assets/jss/material-dashboard-pro-react/views/sweetAlertStyle.js";


import { cardTitle } from "assets/jss/material-dashboard-pro-react.js";


import TextField from '@material-ui/core/TextField';

// material-ui components

import Slide from "@material-ui/core/Slide";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
// @material-ui/icons

// core components


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});







//import stylesButton from "assets/jss/material-dashboard-pro-react/views/buttonsStyle.js";


const useStyles = makeStyles(styles);



export default function Courses() {
  const classes = useStyles();
  //const [modal, setModal] = React.useState(false);

  const [alert, setAlert] = React.useState(null);
  //const [inputValue, setInputValue] = React.useState(null);

  const [post, setPost] = React.useState([]);
  const [cedula, setCedula] = React.useState("");
  const [nombre, setNombre] = React.useState("");
  const [apellido, setApellido] = React.useState("");
  const [checked, setChecked] = React.useState([24, 22]);
  const [selectedEnabled, setSelectedEnabled] = React.useState("b");
  const [selectedValue, setSelectedValue] = React.useState(null);

  const [sigla, setSigla] = React.useState("");
  const [nombrecurso, setNombrecurso] = React.useState("");
  const [tipocurso, setTipocurso] = React.useState("");
  const [creditos, setCreditos] = React.useState("");
  const [periodo, setPeriodo] = React.useState("");
  const [anio, setAnio] = React.useState("");
  const [requisitoscorrequisitos, setRequisitoscorrequisitos] = React.useState("");



  const [simpleSelect, setSimpleSelect] = React.useState("");
  const [simpleSelect1, setSimpleSelect1] = React.useState("");
  const [simpleSelect2, setSimpleSelect2] = React.useState("");
  const [simpleSelect3, setSimpleSelect3] = React.useState("");
    const [show, setShow] = React.useState(false);


    const [open, setOpen] = React.useState(false);

const handleClickOpen = () => {
  setOpen(true);

};

const handleClose = () => {
  setOpen(false);
  setSimpleSelect("");
  setSigla("");

};

  const handleSimple = event => {
    setSimpleSelect(event.target.value);
  };

  const handleSigla = event => {
    setSigla(event.target.value);


  };

  const handleNombrecurso = event => {
    setNombrecurso(event.target.value);

    console.log(nombrecurso);
  };
  const handleCreditos = event => {
    setCreditos(event.target.value);
  };

  const handleSimple1 = event => {
    setSimpleSelect1(event.target.value);

  };
  const handleSimple2 = event => {
    setSimpleSelect2(event.target.value);
  };
  const handleSimple3 = event => {
    setSimpleSelect3(event.target.value);
  };






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

      }}
      />
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
      </form>
      </GridItem>
      </GridContainer>

      </SweetAlert>
    );
  };


  const UsersQuery = () => {
    return (
      <div>
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

         return<div className={classes.container}>
         <GridItem xs={12} sm={12} md={6}>
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
         {console.log("simpleSelect ES= "+simpleSelect)}

         {data.users.map(user => {

           return<MenuItem
             key={user.name}
             classes={{

                 root: classes.selectMenuItem,
                 selected: classes.selectMenuItemSelected
             }}
             value={user.name}
           >
            { user.name }
           </MenuItem>
         })}
         </Select>
        </FormControl>
        </div>



          <TextField

           margin="dense"
           id="name"
           label="Sigla"
           type="Text"
           fullWidth
           onChange={handleSigla}
           value={sigla}
         />
         {console.log("sigla es  "+ sigla)}

         <TextField

          margin="dense"
          id="name"
          label="Nombre del Curso"
          type="Text"
          fullWidth
          onChange={handleNombrecurso}
          value={nombrecurso}
        />
        {console.log("nombre es "+ nombrecurso)}

        <FormControl
          fullWidth
          className={classes.selectFormControl}
        >

        <InputLabel
          htmlFor="simple-select"
          className={classes.selectLabel}
        >
          Tipo de Curso
        </InputLabel>

      <Select
        MenuProps={{
          className: classes.selectMenu
        }}
        classes={{
          select: classes.select
        }}
        value={simpleSelect1}
        onChange={handleSimple1}
        inputProps={{
          name: "simpleSelect",
          id: "simple-select"
        }}

      >
      {console.log("simpleSelect1 ES= "+simpleSelect1)}
        <MenuItem
          disabled
          classes={{
            root: classes.selectMenuItem
          }}
        >
          Grado académico
        </MenuItem>
        <MenuItem
          classes={{
            root: classes.selectMenuItem,
            selected: classes.selectMenuItemSelected
          }}
          value="1"
        >
          Bachillerato
        </MenuItem>
        <MenuItem
          classes={{
            root: classes.selectMenuItem,
            selected: classes.selectMenuItemSelected
          }}
          value="2"
        >
          Licenciatura
        </MenuItem>

        <MenuItem
          classes={{
            root: classes.selectMenuItem,
            selected: classes.selectMenuItemSelected
          }}
          value="3"
        >
          Maestría
        </MenuItem>

        <MenuItem
          classes={{
            root: classes.selectMenuItem,
            selected: classes.selectMenuItemSelected
          }}
          value="4"
        >
          Doctorado
        </MenuItem>
      })}
      </Select>
      </FormControl>

        <TextField

         margin="dense"
         id="name"
         label="Creditos"
         type="Text"
         fullWidth
         onChange={handleCreditos}
         value={creditos}
       />
     {console.log("Creditos ES= "+ creditos)}
         </GridItem>
       </div>
       }}
     </Query>
       </div>
    );
  };





















const inputAlertEditarCurso = () => {
  setAlert(
    <SweetAlert
    showCancel
    style={{ display: "block",}}
    title="Agregar Curso"
    onConfirm={e => {
      inputConfirmAlertNext(e);
    }}
    onCancel={() => hideAlert()}
    confirmBtnCssClass={classes.button + " " + classes.info}
    cancelBtnCssClass={classes.button + " " + classes.danger}
    >

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
        onClick={inputAlertEditarCurso}
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





return (
  <div>
  {alert}
  <GridContainer>
  <Card>
  <GridContainer style={{justifyContent: 'center'}}>

  {/* // flex-end// */}


    <Button variant="outlined" color="primary" onClick={handleClickOpen}>
      Open form dialog
    </Button>



        <div>

             <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
               <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
               <DialogContent>
                 <DialogContentText>
                   To subscribe to this website, please enter your email address here. We will send updates
                   occasionally.
                 </DialogContentText>

                     <UsersQuery />

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

    <div>
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

       return<div className={classes.container}>
       <GridItem xs={12} sm={12} md={6}>
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
       {console.log("simpleSelect ES= "+simpleSelect)}

       {data.users.map(user => {

         return<MenuItem
           key={user.name}
           classes={{

               root: classes.selectMenuItem,
               selected: classes.selectMenuItemSelected
           }}
           value={user.name}
         >
          { user.name }
         </MenuItem>
       })}
       </Select>
      </FormControl>
      </div>



        <TextField

         margin="dense"
         id="name"
         label="Sigla"
         type="Text"
         fullWidth
         onChange={handleSigla}
         value={sigla}
       />
       {console.log("sigla es  "+ sigla)}

       <TextField

        margin="dense"
        id="name"
        label="Nombre del Curso"
        type="Text"
        fullWidth
        onChange={handleNombrecurso}
        value={nombrecurso}
      />
      {console.log("nombre es "+ nombrecurso)}

      <FormControl
        fullWidth
        className={classes.selectFormControl}
      >

      <InputLabel
        htmlFor="simple-select"
        className={classes.selectLabel}
      >
        Tipo de Curso
      </InputLabel>

    <Select
      MenuProps={{
        className: classes.selectMenu
      }}
      classes={{
        select: classes.select
      }}
      value={simpleSelect1}
      onChange={handleSimple1}
      inputProps={{
        name: "simpleSelect",
        id: "simple-select"
      }}

    >
    {console.log("simpleSelect1 ES= "+simpleSelect1)}
      <MenuItem
        disabled
        classes={{
          root: classes.selectMenuItem
        }}
      >
        Grado académico
      </MenuItem>
      <MenuItem
        classes={{
          root: classes.selectMenuItem,
          selected: classes.selectMenuItemSelected
        }}
        value="1"
      >
        Bachillerato
      </MenuItem>
      <MenuItem
        classes={{
          root: classes.selectMenuItem,
          selected: classes.selectMenuItemSelected
        }}
        value="2"
      >
        Licenciatura
      </MenuItem>

      <MenuItem
        classes={{
          root: classes.selectMenuItem,
          selected: classes.selectMenuItemSelected
        }}
        value="3"
      >
        Maestría
      </MenuItem>

      <MenuItem
        classes={{
          root: classes.selectMenuItem,
          selected: classes.selectMenuItemSelected
        }}
        value="4"
      >
        Doctorado
      </MenuItem>
    })}
    </Select>
    </FormControl>

      <TextField

       margin="dense"
       id="name"
       label="Creditos"
       type="Text"
       fullWidth
       onChange={handleCreditos}
       value={creditos}
     />
   {console.log("Creditos ES= "+ creditos)}
       </GridItem>
     </div>
     }}
   </Query>
     </div>




    <CardBody>
    <CustomInput
    labelText="Buscar"
    id="Buscar"
    formControlProps={{
      fullWidth: true
    }}
    />
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
