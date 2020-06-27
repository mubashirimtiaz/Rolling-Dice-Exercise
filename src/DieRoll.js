import React, { Component } from "react";
import Die from "./Die";
import "./DieRoll.css";

export default class DieRoll extends Component {
  static defaultProps = {
    sides: [
      "facebook",
      "twitter",
      "google-plus",
      "snapchat",
      "instagram",
      "whatsapp",
    ],
  };
  constructor(props) {
    super(props);

    this.state = {
      die1: "facebook",
      die2: "twitter",
    };
    this.roll = this.roll.bind(this);
  }
  roll() {
    const newDie1 = this.props.sides[
      Math.floor(Math.random() * this.props.sides.length)
    ];
    const newDie2 = this.props.sides[
      Math.floor(Math.random() * this.props.sides.length)
    ];

    this.setState({ die1: newDie1, die2: newDie2, isRolling: true });
    setTimeout(() => {
      this.setState({ isRolling: false });
    }, 1000);
  }
  render() {
    return (
      <div className="DieRoll">
        <div className="DieRoll-container">
          <Die face={this.state.die1} shaking={this.state.isRolling} />
          <Die face={this.state.die2} shaking={this.state.isRolling} />
        </div>

        {this.state.die1 === this.state.die2 ? (
          <h2>
            You Win{" "}
            <span role="img" aria-label="img">
              😊😊😊!!!
            </span>
          </h2>
        ) : (
          <button
            className={
              this.state.isRolling ? "DieRoll-btn-rolling" : "DieRoll-btn"
            }
            onClick={this.roll}
            disabled={this.state.isRolling}
          >
            {this.state.isRolling ? "Rolling..." : "Roll Dice!"}
          </button>
        )}
      </div>
    );
  }
}
