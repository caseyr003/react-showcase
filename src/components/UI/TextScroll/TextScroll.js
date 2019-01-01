import React, {Component} from 'react';
import styles from './TextScroll.module.css';

class TextScroll extends Component {
  state = {
    selectedWord: "code"
  }

  render () {
    return (
      <div className={styles.TextScroll}>
        <span className={styles.Bracket}>[</span>
        Hello {this.state.selectedWord}
        <span className={styles.Bracket}>]</span>
      </div>
    );
  }
};

export default TextScroll;