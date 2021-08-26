import React from "react";
//exporting file to index.js
export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      Red: 0,
      Green: 0,
      Blue: 0
    };
  }

  handleRed = (event) => {
    this.setState({
      Red: event.target.value
    });
  };

  handleBlue = (event) => {
    this.setState({
      Blue: event.target.value
    });
  };

  handleGreen = (event) => {
    this.setState({
      Green: event.target.value
    });
  };

  //Render function for displaying outputs
  render() {
    return (
      <div
        style={{
          backgroundColor:
            "rgb(" +
            this.state.Red +
            "," +
            this.state.Green +
            "," +
            this.state.Blue +
            ")",
          height: "100vh"
        }}
      >
        <div
          style={{
            backgroundColor: "white",
            width: 200,
            padding: 20,
            borderRadius: 10
          }}
        >
          <h1>Color Picker</h1>
          Red:
          <input
            type="range"
            value={this.state.Red}
            onChange={this.handleRed}
          />
          <br />
          Green:
          <input
            type="range"
            value={this.state.Green}
            onChange={this.handleGreen}
          />
          <br />
          Blue:
          <input
            type="range"
            value={this.state.Blue}
            onChange={this.handleBlue}
          />
        </div>
      </div>
    );
  }
}
