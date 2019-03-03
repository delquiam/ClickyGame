import React from "react";
import "./style.css";

class Jumbotron extends React.Component {
  render() {
    return (
      <div className="jumbotron col-xs-12 col-sm-12 col-md-12 text-center">
        <h1 className="jumbo-header">Sanrio Character Clicker Game </h1>
        <h2 className="jumbo-header2">
          Try not to click on the same character twice!
        </h2>
      </div>
    );
  }
}

export default Jumbotron;
