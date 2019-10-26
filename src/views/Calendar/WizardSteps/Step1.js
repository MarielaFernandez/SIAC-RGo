import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
// core components
import styles from "assets/jss/material-dashboard-pro-react/customCheckboxRadioSwitch.js";

const useStyles = makeStyles(styles);

export default function SwitchExample() {
  const [checkedA, setCheckedA] = React.useState(null);
  const [checkedB, setCheckedB] = React.useState(null);
  const classes = useStyles();
  return (
    <div>
      <div>
        <FormControlLabel
          control={
            <Switch
              checked={checkedB}
              onChange={event => setCheckedB(event.target.checked)}
              value="checkedB"
              classes={{
                switchBase: classes.switchBase,
                checked: classes.switchChecked,
                thumb: classes.switchIcon,
                track: classes.switchBar
              }}
            />
          }
          classes={{
            label: classes.label
          }}
          label="Horas atención estudiantes"
        />
      </div>
      <div>
        <FormControlLabel
          control={
            <Switch
              checked={checkedB}
              onChange={event => setCheckedB(event.target.checked)}
              value="checkedB"
              classes={{
                switchBase: classes.switchBase,
                checked: classes.switchChecked,
                thumb: classes.switchIcon,
                track: classes.switchBar
              }}
            />
          }
          classes={{
            label: classes.label
          }}
          label="Horas contacto"
        />
      </div>
      <div>
        <FormControlLabel
          control={
            <Switch
              checked={checkedA}
              onChange={event => setCheckedA(event.target.checked)}
              value="checkedA"
              classes={{
                switchBase: classes.switchBase,
                checked: classes.switchChecked,
                thumb: classes.switchIcon,
                track: classes.switchBar
              }}
            />
          }
          classes={{
            label: classes.label
          }}
          label="Horas preparación"
        />
      </div>
    </div>
  );
}