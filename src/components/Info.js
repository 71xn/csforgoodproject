import { Component, React } from "react";
import "../styles/info.css";

export default class Info extends Component {
  render() {
    return (
      <p>
        This project was intended to address the goals of{" "}
        <b>
          <a href="https://twitter.com/search?q=%23CSFORGOOD">#CSFORGOOD</a>
        </b>{" "}
        and the{" "}
        <code>
          UN Sustainability Goal #13: Take urgent action to combat climate
          change and its impacts.
        </code>{" "}
        I wanted to use CS to raise awareness to the impacts of air pollution
        and show how we have made massive improvements but there is still so
        much to be done. This app is intended for users to be able to select a
        <b> country</b> and an <b>air pollutant type</b> from the dropdown menus
        above and view all historical pollution data. You can also hover over
        each bar on the graph to view exact data!
      </p>
    );
  }
}
