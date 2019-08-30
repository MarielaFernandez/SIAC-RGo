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
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardAvatar from "components/Card/CardAvatar.js";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

import styles from "assets/jss/material-dashboard-pro-react/views/userProfileStyles.js";

import avatar from "assets/img/faces/marc.jpg";

const useStyles = makeStyles(styles);

export default function UserProfile() {
  const classes = useStyles();
  const [simpleSelect, setSimpleSelect] = React.useState("");
  const [multipleSelect, setMultipleSelect] = React.useState([]);
  const handleSimple = event => {
    setSimpleSelect(event.target.value);
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
                  labelText="Cedula"
                  id="Cedula"
                  formControlProps={{
                    fullWidth: true
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
                <InputLabel
                  htmlFor="simple-select"
                  className={classes.selectLabel}
                >
                  Choose City
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
                  <MenuItem
                    disabled
                    classes={{
                      root: classes.selectMenuItem
                    }}
                  >
                    Elija la provincia
                  </MenuItem>
                  <MenuItem
                    classes={{
                      root: classes.selectMenuItem,
                      selected: classes.selectMenuItemSelected
                    }}
                    value="2"
                  >
                    Puntarenas
                  </MenuItem>
                  <MenuItem
                    classes={{
                      root: classes.selectMenuItem,
                      selected: classes.selectMenuItemSelected
                    }}
                    value="3"
                  >
                    San Jose
                  </MenuItem>
                  <MenuItem
                    classes={{
                      root: classes.selectMenuItem,
                      selected: classes.selectMenuItemSelected
                    }}
                    value="4"
                  >
                    Cartago
                  </MenuItem>
                  <MenuItem
                    classes={{
                      root: classes.selectMenuItem,
                      selected: classes.selectMenuItemSelected
                    }}
                    value="5"
                  >
                    Limon
                  </MenuItem>
                  <MenuItem
                    classes={{
                      root: classes.selectMenuItem,
                      selected: classes.selectMenuItemSelected
                    }}
                    value="6"
                  >
                    Guanacaste
                  </MenuItem>
                  <MenuItem
                    classes={{
                      root: classes.selectMenuItem,
                      selected: classes.selectMenuItemSelected
                    }}
                    value="7"
                  >
                    Alajuela
                  </MenuItem>
                  <MenuItem
                    classes={{
                      root: classes.selectMenuItem,
                      selected: classes.selectMenuItemSelected
                    }}
                    value="8"
                  >
                    Heredia
                  </MenuItem>

                </Select>
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Canton"
                    id="Direccion"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
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
                    labelText="Correo Electronico"
                    id="Correo"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Telefono"
                    id="Telefono"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                </GridContainer>
                <GridContainer>

                <GridItem xs={12} sm={12} md={12}>
                  <CustomInput
                    labelText="Cantidad de kilometros hacia la Universidad"
                    id="Kilometros"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Jornada de trabajo"
                    id="Jornada"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Grado academico"
                    id="Grado"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>



              </GridContainer>

              <Button color="rose" className={classes.updateProfileButton}>
                Update Profile
              </Button>
              <Clearfix />
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card profile>
            <CardAvatar profile>
              <a href="#pablo" onClick={e => e.preventDefault()}>
                <img src={avatar} alt="..." />
              </a>
            </CardAvatar>
            <CardBody profile>
              <h6 className={classes.cardCategory}>CEO / CO-FOUNDER</h6>
              <h4 className={classes.cardTitle}>Alec Thompson</h4>
              <p className={classes.description}>
                Don{"'"}t be scared of the truth because we need to restart the
                human foundation in truth And I love you like Kanye loves Kanye
                I love Rick Owens’ bed design but the back is...
              </p>
              <Button color="rose" round>
                Follow
              </Button>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
