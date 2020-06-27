import React, { Component } from "react";
import "./Die.css";

export default class Die extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.face}</h3>
        <i
          className={`Die fa fa-${this.props.face} ${
            this.props.shaking && "shaking"
          }`}
        ></i>
      </div>
    );
  }
}
