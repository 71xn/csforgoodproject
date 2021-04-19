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
          initialValues={{ country: "United Kingdom", pollutantType: "NH3" }}
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
                    <MenuItem value={"United Kingdom"}>United Kingdom</MenuItem>
                    <MenuItem value={"France"}>France</MenuItem>
                    <MenuItem value={"Spain"}>Spain</MenuItem>
                    <MenuItem value={"Germany"}>Germany</MenuItem>
                    <MenuItem value={"Italy"}>Italy</MenuItem>
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
