import "./App.css";
import Chart from "./components/Chart.js";
import { Component } from "react";
import Form from "./components/MenuForm.js";
import Data from "./d.json";
import sortData from "./components/DS.js";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/Navigation.js";

// Takes prop of data in the form of parsed json

// The saviour of the project!!!!!!!!!
// https://medium.com/@nipunadilhara/passing-data-between-different-components-using-react-c8e27319ee69
// https://reactjs.org/docs/react-component.html

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { data: props.data };
  }

  // Sends data back to index
  parentFunction = (dataFromForm) => {
    //this.props.functionFromParent(dataFromForm);
    var pollutant = dataFromForm.pollutantType;
    var country = dataFromForm.country;
    var newData = sortData(country, pollutant, Data);
    this.setState({ data: newData });
  };

  render() {
    return (
      <div className="App">
        <Navigation />
        <div class="row">
          <div class="column left">
            <Chart data={this.state.data} />
          </div>
          <div class="column right">
            <h1 color="white">
              Data Selection
            </h1>
            <br />
            <Form functionCallFromParent={this.parentFunction.bind(this)} />
          </div>
        </div>
      </div>
    );
  }
}
