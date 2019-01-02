import React, {Component} from 'react';
import styles from './CodeText.module.css';

class CodeText extends Component {
  state = {
    selectedWord: this.props.words[0],
    words: this.props.words,
    fadeIn: true,
    fadeOut: false
  }

  componentDidMount () {
    this.updateSelected();
  }

  updateSelected = () => {
    let nextWord = this.state.words[Math.floor(Math.random()*this.state.words.length)];
    while (this.state.selectedWord === nextWord) {
      nextWord = this.state.words[Math.floor(Math.random()*this.state.words.length)];
    }
    this.setState({fadeIn: false, fadeOut: false});
    setTimeout(() => {
      this.setState({fadeIn: false, fadeOut: true});
    }, 4000);
    setTimeout(() => {
      this.setState({fadeIn: true, fadeOut: false});
    }, 5000);
    setTimeout(() => {
      this.setState({fadeIn: false, fadeOut: false, selectedWord: nextWord});
      this.updateSelected();
    }, 6000);
  }

  render () {
    let attachedStyles = [styles.Selected];

    if (this.state.fadeIn) {
      attachedStyles = [styles.Selected, styles.FadeIn];
    }

    if (this.state.fadeOut) {
      attachedStyles = [styles.Selected, styles.FadeOut];
    }

    return (
      <div className={styles.CodeContainer}>
        <div className={styles.CodeText}>
          <div className={styles.Bracket}>[</div>
          <div className={styles.Hello}>hello</div>
          <div className={attachedStyles.join(' ')}>{this.state.selectedWord}</div>
          <div className={styles.Bracket}>]</div>
        </div>
      </div>
    );
  }
};

export default CodeText;