import React from 'react';
import Radium from 'radium';
import styles from './Card.module.css';

const card = (props) => {

  let background = require('../../../assets/img/default.png');
  try {
    background = require('../../../assets/img/' + props.img + '.png');
  } catch (error) {
    console.log(error);
  }

  const backgroundStyle ={
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.20), rgba(0, 0, 0, 0.50)),
      url(${background})`,
    transition: `0.5s`,
    ':hover': {
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.50)),
      url(${background})`
    }
  };

  return (
    <div style={backgroundStyle} className={styles.Card}>
      <div className={styles.Content}>
        <h1>{props.title}</h1>
        <h4>{props.subtitle}</h4>
      </div>
    </div>
  )
};

export default Radium(card);