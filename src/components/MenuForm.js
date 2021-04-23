import React, { Component } from "react";
import {
  Select,
  MenuItem,
  FormControl,
  Button,
  createMuiTheme,
  ThemeProvider,
  FormHelperText,
  withStyles,
} from "@material-ui/core";
import { purple } from "@material-ui/core/colors";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import { Formik } from "formik";
import "../styles/form.css";

const theme = createMuiTheme({
  palette: {
    textColor: "#FFFFFF",
    type: "dark",
  },
  MenuItem: {
    selectedTextColor: "white",
  },
});

const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    "&:hover": {
      backgroundColor: purple[700],
    },
  },
}))(Button);

export default class Form extends Component {
  render() {
    return (
      <div>
        <h4>Chart is currently displaying:</h4>
        <Formik
          initialValues={{ country: "Austria", pollutantType: "SOx" }}
          onSubmit={(data, { setSubmitting }) => {
            setSubmitting(true);
            this.props.functionCallFromParent(data);
            //console.log(data);
            setSubmitting(false);
          }}
        >
          {({ values, handleChange, handleBlur, handleSubmit }) => (
            <form onSubmit={handleSubmit} onChange={handleChange}>
              <ThemeProvider theme={theme}>
                <FormControl variant="filled">
                  <Select
                    name="country"
                    value={values.country}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  >
                    <MenuItem value={"Austria"}>Austria</MenuItem>
                    <MenuItem value={"Belgium"}>Belgium</MenuItem>
                    <MenuItem value={"Bulgaria"}>Bulgaria</MenuItem>
                    <MenuItem value={"Croatia"}>Croatia</MenuItem>
                    <MenuItem value={"Cyprus"}>Cyprus</MenuItem>
                    <MenuItem value={"Czechia"}>Czechia</MenuItem>
                    <MenuItem value={"Denmark"}>Denmark</MenuItem>
                    <MenuItem value={"Finland"}>Finland</MenuItem>
                    <MenuItem value={"France"}>France</MenuItem>
                    <MenuItem value={"Germany"}>Germany</MenuItem>
                    <MenuItem value={"Greece"}>Greece</MenuItem>
                    <MenuItem value={"Hungary"}>Hungary</MenuItem>
                    <MenuItem value={"Iceland"}>Iceland</MenuItem>
                    <MenuItem value={"Ireland"}>Ireland</MenuItem>
                    <MenuItem value={"Italy"}>Italy</MenuItem>
                    <MenuItem value={"Latvia"}>Latvia</MenuItem>
                    <MenuItem value={"Liechtenstein"}>Liechtenstein</MenuItem>
                    <MenuItem value={"Lithuania"}>Lithuania</MenuItem>
                    <MenuItem value={"Luxembourg"}>Luxembourg</MenuItem>
                    <MenuItem value={"Malta"}>Malta</MenuItem>
                    <MenuItem value={"Netherlands"}>Netherlands</MenuItem>
                    <MenuItem value={"Norway"}>Poland</MenuItem>
                    <MenuItem value={"Portugal"}>Portugal</MenuItem>
                    <MenuItem value={"Romania"}>Romania</MenuItem>
                    <MenuItem value={"Slovakia"}>Slovakia</MenuItem>
                    <MenuItem value={"Slovenia"}>Slovenia</MenuItem>
                    <MenuItem value={"Spain"}>Spain</MenuItem>
                    <MenuItem value={"Sweden"}>Sweden</MenuItem>
                    <MenuItem value={"Switzerland"}>Switzerland</MenuItem>
                    <MenuItem value={"Turkey"}>Turkey</MenuItem>
                    <MenuItem value={"United Kingdom"}>United Kingdom</MenuItem>
                  </Select>
                  <FormHelperText>Countries</FormHelperText>
                </FormControl>
                <FormControl variant="filled">
                  <Select
                    name="pollutantType"
                    value={values.pollutantType}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  >
                    <MenuItem value={"NH3"}>NH3</MenuItem>
                    <MenuItem value={"NOx"}>NOx</MenuItem>
                    <MenuItem value={"SOx"}>SOx</MenuItem>
                    <MenuItem value={"PM2.5"}>PM2.5</MenuItem>
                    <MenuItem value={"NMVOC"}>NMVOC</MenuItem>
                  </Select>
                  <FormHelperText>Air Pollutant Type</FormHelperText>
                </FormControl>
              </ThemeProvider>

              <br />
              <div>
                <br />
                <ThemeProvider theme={theme}>
                  <ColorButton
                    variant="contained"
                    color="secondary"
                    type="submit"
                  >
                    Load Chart
                    <TrendingUpIcon />
                  </ColorButton>
                </ThemeProvider>
              </div>
            </form>
          )}
        </Formik>
      </div>
    );
  }
}
