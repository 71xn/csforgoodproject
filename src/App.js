import "./App.css";
import Chart from "./components/Chart.js";
import { Component } from "react";
import Form from "./components/MenuForm.js";
import Data from "./d.json";
import sortData from "./components/DS.js";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/Navigation.js";
import Info from "./components/Info.js";

// Takes prop of data in the form of parsed json

// The saviour of the project!!!!!!!!!
// https://medium.com/@nipunadilhara/passing-data-between-different-components-using-react-c8e27319ee69
// https://reactjs.org/docs/react-component.html

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { data: props.data };
  }

  // Get data from function and parse new vars
  parentFunction = (dataFromForm) => {
    var pollutant = dataFromForm.pollutantType;
    var country = dataFromForm.country;
    var newData = sortData(country, pollutant, Data);
    this.setState({ data: newData });
  };

  render() {
    return (
      <div className="App">
        <Navigation />
        <div className="row">
          <div className="column left">
            <Chart data={this.state.data} />
          </div>
          <div className="column right">
            <h2 color="white">Data Selection</h2>
            <br />
            <Form functionCallFromParent={this.parentFunction.bind(this)} />
            <br />
            <h3>Project Info</h3>
            <div className="infoBox">
              <Info />
            </div>
          </div>
        </div>
        <small className="small">
          This project was created by{" "}
          <a href="https://twitter.com/finnlestrange">@finnlestrange</a> 🌲 and
          is hosted on{" "}
          <a className="cloudflareLink" href="https://pages.cloudflare.com/">
            Cloudflare Pages 🔥
          </a>
          . Data provided by{" "}
          <a
            className="eeaLink"
            href="https://www.eea.europa.eu/data-and-maps/dashboards/air-pollutant-emissions-data-viewer-3"
          >
            European Environment Agency 🌍
          </a>
        </small>
      </div>
    );
  }
}
