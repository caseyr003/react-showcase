import React, { Component } from 'react';

class TypeWriter extends Component {

  state = {
    text: null,
    speed: 100,
    cursor: 0
  }

  type = () => {
    if (this.state.cursor <= this.props.children.length) {
      this.setState({text: this.props.children.slice(0,this.state.cursor),
        cursor: this.state.cursor + 1});
      setTimeout(() => {
        this.type();
      }, this.state.speed);
    }
  }

  componentDidMount() {
    this.type();
  }

  render() {
    return (
      <p>{this.state.text}</p>
    );
  }
}

export default TypeWriter;