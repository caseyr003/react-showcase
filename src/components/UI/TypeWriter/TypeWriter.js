import React, { Component } from 'react';
import styles from './TypeWriter.module.css';

class TypeWriter extends Component {

  state = {
    text: null,
    cursor: 0,
    blink: false
  }

  type = () => {
    if (this.state.cursor < this.props.children.length) {
      this.setState({text: this.props.children.slice(0,this.state.cursor) + '|',
        cursor: this.state.cursor + 1});
      setTimeout(() => {
        this.type();
      }, 200);
    } else if (this.state.cursor === this.props.children.length) {
      this.cursorBlink();
    }
  }

  cursorBlink = () => {
    if (this.state.blink) {
      this.setState({text: this.props.children + '|'});
    } else {
      this.setState({text: this.props.children + ' '});
    }
    this.setState({blink: !this.state.blink});
    setTimeout(() => {
      this.cursorBlink();
    }, 500);
  }

  componentDidMount() {
    this.type();
  }

  render() {
    return (
      <p className={styles.TypeWriter}>{this.state.text}</p>
    );
  }
}

export default TypeWriter;