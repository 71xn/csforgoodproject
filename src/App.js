import "./App.css";
import Chart from "./components/Chart.js";
import { Component } from "react";
import Form from "./components/MenuForm.js";
import Data from "./d2.json";
import sortData from "./components/DS.js";

// Takes prop of data in the form of parsed json

// The saviour of the project!!!!!!!!! https://medium.com/@nipunadilhara/passing-data-between-different-components-using-react-c8e27319ee69

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { data: props.data };
  }

  // Sends data back to index
  parentFunction = (dataFromForm) => {
    this.props.functionFromParent(dataFromForm);
    var pollutant = dataFromForm.pollutantType;
    var newData = sortData(pollutant, Data);
    this.setState({ data: newData });
  };

  render() {
    return (
      <div className="App">
        <div class="row">
          <div class="column left">
            <Chart data={this.state.data} />
          </div>
          <div class="column right">
            <Form functionCallFromParent={this.parentFunction.bind(this)} />
          </div>
        </div>
      </div>
    );
  }
}
