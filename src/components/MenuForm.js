import React, { Component } from "react";
import {
  Select,
  MenuItem,
  FormControl,
  Button,
  createMuiTheme,
  ThemeProvider,
  makeStyles,
  withStyles
} from "@material-ui/core";
import { Formik } from "formik";
import "../styles/form.css";


const theme = createMuiTheme({
  palette: {
    textColor: "#FFFFFF",
    type: "dark",
  },
  MenuItem: {
    selectedTextColor: 'white',
  },
});


export default class Form extends Component {
  render() {
    return (
      <div>
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
                  <Select labelStyle={{ color: 'green' }}
                    name="country"
                    value={values.country}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  >
                    <MenuItem value={"United Kingdom"}>United Kingdom</MenuItem>
                    <MenuItem value={"France"}>France</MenuItem>
                    <MenuItem value={"Spain"}>Spain</MenuItem>
                  </Select>
                </FormControl>
              </ThemeProvider>
              <div>
                <br />
                <ThemeProvider theme={theme}>
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
                </FormControl>
                </ThemeProvider>
                
              </div>
              <br />
              <div>
                <ThemeProvider theme={theme}>
                  <Button type="submit">Query Data</Button>
                </ThemeProvider>
              </div>
            </form>
          )}
        </Formik>
      </div>
    );
  }
}
