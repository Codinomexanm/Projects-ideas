import React, { Component } from "react";

class App extends Component {
  state = {
    name: "Alexandre",
    idade: 24,
    count: 0,
  };
  handlePClick = () => {
    this.setState({
      name: "pereira",
    });
  };
  handleAClick = (e) => {
    e.preventDefault();
    const { count } = this.state;
    this.setState({ count: count + 1 });
  };
  render() {
    const { name, idade, count } = this.state;
    return (
      <>
        <h1
          onClick={this.handlePClick}
          style={{ cursor: "pointer", background: "red" }}
        >
          {name} idade é {idade} = {count}
        </h1>
        <a href="¨#" rel="noopener noreferrer" onClick={this.handleAClick}>
          clique aqui
        </a>
      </>
    );
  }
}

export default App;
