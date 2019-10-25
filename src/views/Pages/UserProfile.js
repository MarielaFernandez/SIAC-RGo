import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";

// @material-ui/icons
import PermIdentity from "@material-ui/icons/PermIdentity";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Clearfix from "components/Clearfix/Clearfix.js";
import Card from "components/Card/Card.js";
import ImageUpload from "components/CustomUpload/ImageUpload.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardAvatar from "components/Card/CardAvatar.js";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import styles from "assets/jss/material-dashboard-pro-react/views/userProfileStyles.js";
import Close from "@material-ui/icons/Close";
import axios from 'axios';
import avatar from "assets/img/faces/marc.jpg";


import ReactDOM from "react-dom";
import ApolloClient, { gql } from "apollo-boost";
import { ApolloProvider, Query } from "react-apollo";


const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql"
});



const useStyles = makeStyles(styles);

export default function UserProfile() {


  const classes = useStyles();


  const CharactersQuery = () => {
    return (
      <Query
        query={gql`
          {
            characters {
              results {
                id
                name
              }
            }
          }
        `}
      >
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error!</p>;

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
            value={simpleSelect}
            onChange={handleSimple}
            inputProps={{
              name: "simpleSelect",
              id: "simple-select"
            }}
          > {data.characters.results.map(character => {
            return <MenuItem

              key={character.id}
              classes={{

                  root: classes.selectMenuItem,
                  selected: classes.selectMenuItemSelected
              }}
              value={character.id}
            > { character.name } </MenuItem>
          })}
          </Select>
          </FormControl>
        }}
      </Query>
    );
  };



  const [number, setnumber] = React.useState("");
  const [number1, setnumber1] = React.useState("");
  const [number2, setnumber2] = React.useState("");
  const [numberState, setnumberState] = React.useState("");
  const [numberState1, setnumberState1] = React.useState("");
  const [numberState2, setnumberState2] = React.useState("");
  const [simpleSelect, setSimpleSelect] = React.useState("");
  const [simpleSelect1, setSimpleSelect1] = React.useState("");
  const [simpleSelect2, setSimpleSelect2] = React.useState("");
  const [simpleSelect3, setSimpleSelect3] = React.useState("");
  const [typeEmail, settypeEmail] = React.useState("");
  const [typeEmailState, settypeEmailState] = React.useState("");
  const [multipleSelect, setMultipleSelect] = React.useState([]);
  const verifyEmail = value => {
    var emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (emailRex.test(value)) {
      return true;
    }
    return false;
  };
  const verifyNumber = value => {
    var numberRex = new RegExp("^[0-9]+$");
    if (numberRex.test(value)) {
      return true;
    }
    return false;
  };
  const handleSimple = event => {
    setSimpleSelect(event.target.value);
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
  return (

    <div>

              <GridContainer>


              <GridItem xs={12} sm={12} md={8}>
                <Card>
                  <CardHeader color="primary">
                    <h4 className={classes.cardTitleWhite}>Editar Perfil</h4>
                    <p className={classes.cardCategoryWhite}>Completa su perfil</p>
                  </CardHeader>
                  <CardBody>
                  <GridContainer>
                    <GridItem xs={12} sm={12} md={6}>
                      <CustomInput
                      labelText="Cédula"
                        success={numberState === "success"}
                        error={numberState === "error"}
                        id="number"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          onChange: event => {
                            if (verifyNumber(event.target.value)) {
                              setnumberState("success");
                            } else {
                              setnumberState("error");
                            }
                            setnumber(event.target.value);
                          }
                        }}
                      />
                    </GridItem>

                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Nombre"
                    id="Nombre"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>

                  <CharactersQuery />



                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                <FormControl
                  fullWidth
                  className={classes.selectFormControl}
                >
                <InputLabel
                  htmlFor="simple-select"
                  className={classes.selectLabel}
                >
                  Elija el cantón
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
                    name: "simpleSelect1",
                    id: "simple-select1"
                  }}
                >
                  <MenuItem
                    disabled
                    classes={{
                      root: classes.selectMenuItem
                    }}
                  >
                    Elija el cantón
                  </MenuItem>
                  <MenuItem
                    classes={{
                      root: classes.selectMenuItem,
                      selected: classes.selectMenuItemSelected
                    }}
                    value="2"
                  >
                    Coto brus
                  </MenuItem>
                  <MenuItem
                    classes={{
                      root: classes.selectMenuItem,
                      selected: classes.selectMenuItemSelected
                    }}
                    value="3"
                  >
                    Corredores
                  </MenuItem>

                </Select>
                </FormControl>
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Distrito"
                    id="Direccion"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Barrio"
                    id="Direccion"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                labelText="Correo Electrónico"
                  success={typeEmailState === "success"}
                  error={typeEmailState === "error"}
                  id="typeemail"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    onChange: event => {
                      if (verifyEmail(event.target.value)) {
                        settypeEmailState("success");
                      } else {
                        settypeEmailState("error");
                      }
                      settypeEmail(event.target.value);
                    },
                    type: "email",
                    endAdornment:
                      typeEmailState === "error" ? (
                        <InputAdornment position="end">
                          <Close className={classes.danger} />
                        </InputAdornment>
                      ) : (
                        undefined
                      )
                  }}
                />
              </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                  labelText="Total de Kilómetros"
                    success={numberState1 === "success"}
                    error={numberState1 === "error"}
                    id="number1"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      onChange: event => {
                        if (verifyNumber(event.target.value)) {
                          setnumberState1("success");
                        } else {
                          setnumberState1("error");
                        }
                        setnumber1(event.target.value);
                      },
                      type: "number",
                      endAdornment:
                        numberState1 === "error" ? (
                          <InputAdornment position="end">
                            <Close className={classes.danger} />
                          </InputAdornment>
                        ) : (
                          undefined
                        )
                    }}
                  />
                </GridItem>
                </GridContainer>
                <GridContainer>

                <GridItem xs={12} sm={12} md={6}>
                <FormControl
                  fullWidth
                  className={classes.selectFormControl}
                >
                <InputLabel
                  htmlFor="simple-select"
                  className={classes.selectLabel}
                >
                  Tipo de nombramiento
                </InputLabel>
                <Select
                  MenuProps={{
                    className: classes.selectMenu
                  }}
                  classes={{
                    select: classes.select
                  }}
                  value={simpleSelect3}
                  onChange={handleSimple3}
                  inputProps={{
                    name: "simpleSelect3",
                    id: "simple-select3"
                  }}
                  labelText="Jornada de trabajo"
                >
                  <MenuItem
                    disabled
                    classes={{
                      root: classes.selectMenuItem
                    }}
                  >
                    Tipo de nombramiento
                  </MenuItem>
                  <MenuItem
                    classes={{
                      root: classes.selectMenuItem,
                      selected: classes.selectMenuItemSelected
                    }}
                    value="1"
                  >
                    Interino
                  </MenuItem>
                  <MenuItem
                    classes={{
                      root: classes.selectMenuItem,
                      selected: classes.selectMenuItemSelected
                    }}
                    value="2"
                  >
                    Propiedad
                  </MenuItem>

                </Select>
                </FormControl>
                </GridItem>


                <GridItem xs={12} sm={12} md={6}>
                <FormControl
                  fullWidth
                  className={classes.selectFormControl}
                >
                <InputLabel
                  htmlFor="simple-select"
                  className={classes.selectLabel}
                >
                  Grado académico
                </InputLabel>
                <Select
                  MenuProps={{
                    className: classes.selectMenu
                  }}
                  classes={{
                    select: classes.select
                  }}
                  value={simpleSelect2}
                  onChange={handleSimple2}
                  inputProps={{
                    name: "simpleSelect2",
                    id: "simple-select2"
                  }}
                >
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

                </Select>
                </FormControl>
                </GridItem>

                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                  labelText="Teléfono"
                    success={numberState2 === "success"}
                    error={numberState2 === "error"}
                    id="number2"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      onChange: event => {
                        if (verifyNumber(event.target.value)) {
                          setnumberState2("success");
                        } else {
                          setnumberState2("error");
                        }
                        setnumber2(event.target.value);
                      }
                    }}
                  />
                </GridItem>

              </GridContainer>

              <Button color="rose" className={classes.updateProfileButton}>
                Actualizar perfil
              </Button>
              <Clearfix />
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>

          <Card profile>

          <GridItem xs={20} sm={20} md={20}>
          <legend></legend>
            <legend>Foto de perfil</legend>
            <ImageUpload
              avatar
              addButtonProps={{
                color: "rose",
                round: true
              }}
              changeButtonProps={{
                color: "rose",
                round: true
              }}
              removeButtonProps={{
                color: "danger",
                round: true
              }}
            />
          </GridItem>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
