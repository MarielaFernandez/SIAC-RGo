import React from "react";
// react component for creating dynamic tables
import ReactTable from "react-table";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

import axios from 'axios';

// @material-ui/icons
import Assignment from "@material-ui/icons/Assignment";
import Dvr from "@material-ui/icons/Dvr";
import Favorite from "@material-ui/icons/Favorite";
import Close from "@material-ui/icons/Close";

import MailOutline from "@material-ui/icons/MailOutline";
import Check from "@material-ui/icons/Check";
import Clear from "@material-ui/icons/Clear";
import Contacts from "@material-ui/icons/Contacts";
import FiberManualRecord from "@material-ui/icons/FiberManualRecord";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";

import CustomInput from "components/CustomInput/CustomInput.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardIcon from "components/Card/CardIcon.js";
import CardHeader from "components/Card/CardHeader.js";
import SweetAlert from "react-bootstrap-sweetalert";
import { dataTable } from "variables/general.js";

import styles from "assets/jss/material-dashboard-pro-react/views/sweetAlertStyle.js";


import { cardTitle } from "assets/jss/material-dashboard-pro-react.js";

//import stylesButton from "assets/jss/material-dashboard-pro-react/views/buttonsStyle.js";









const useStyles = makeStyles(styles);



export default function Courses() {
  const classes = useStyles();

  const [alert, setAlert] = React.useState(null);
  const [inputValue, setInputValue] = React.useState(null);

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
  const [creditos, setcreditos] = React.useState("");
  const [periodo, setPeriodo] = React.useState("");


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


  const inputAlertAgregarCurso = () => {
    setAlert(
      <SweetAlert
      showCancel
      style={{ display: "block", width:"500px",height:"350px", overflow: "scroll" }}
      title="Agregar Curso"
      onConfirm={e => {
        inputConfirmAlertNext(e);
      }}
      onCancel={() => hideAlert()}
      confirmBtnCssClass={classes.button + " " + classes.info}
      cancelBtnCssClass={classes.button + " " + classes.danger}
      >

      <GridContainer

      >
      <GridItem>


      <form>
      <CustomInput
      labelText="Sigla"
      id="id_Sigla"
      formControlProps={{
        fullWidth: true
      }}
      value={sigla}

      inputProps={{

        autoComplete: "off",
        value: sigla

      }}
      />
      <CustomInput
      labelText="Nombre del Curso"
      id="nombrecurso"
      formControlProps={{
        fullWidth: true
      }}
      inputProps={{
        value: nombrecurso,
        autoComplete: "off"
      }}
      />
      <CustomInput
      labelText="Tipo de Curso"
      id="tipocurso"
      formControlProps={{
        fullWidth: true
      }}
      inputProps={{
        value:tipocurso,
        autoComplete: "off"

      }}
      />
      <CustomInput
      labelText="Creditos"
      id="creditos"
      formControlProps={{
        fullWidth: true
      }}
      inputProps={{
        value:creditos,
        autoComplete: "off"

      }}
      />
      <CustomInput
      labelText="Periodo"
      id="periodo"
      formControlProps={{
        fullWidth: true
      }}
      inputProps={{
        value:periodo,
        autoComplete: "off"

      }}
      />
      <CustomInput
      labelText="Periodo"
      id="periodo"
      formControlProps={{
        fullWidth: true
      }}
      inputProps={{
        value:periodo,
        autoComplete: "off"

      }}
      />
      <CustomInput
      labelText="Periodo"
      id="periodo"
      formControlProps={{
        fullWidth: true
      }}
      inputProps={{
        value:periodo,
        autoComplete: "off"

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

    <GridContainer

    >
    <GridItem>


    <form style={{width:"850px",height:"100px", overflow : "scroll" }}>
    <CustomInput
    labelText="Sigla"
    id="id_Sigla"
    formControlProps={{
      fullWidth: true
    }}
    value={sigla}

    inputProps={{

      autoComplete: "off",
      value: sigla

    }}
    />
    <CustomInput
    labelText="Sigla"
    id="id_Sigla"
    formControlProps={{
      fullWidth: true
    }}
    value={sigla}

    inputProps={{

      autoComplete: "off",
      value: sigla

    }}
    />
    <CustomInput
    labelText="Sigla"
    id="id_Sigla"
    formControlProps={{
      fullWidth: true
    }}
    value={sigla}

    inputProps={{

      autoComplete: "off",
      value: sigla

    }}
    />

    </form>

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
    <Button     onClick={inputAlertAgregarCurso} className={classes.info}    >
    Agregar Nuevo curso
    </Button>
    </GridContainer>

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
