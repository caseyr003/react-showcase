import React from 'react';
import styles from './Card.module.css';

const card = (props) => {

  let background = require('../../../assets/img/default.png');
  try {
    background = require('../../../assets/img/' + props.img + '.png');
  } catch (error) {
    console.log(error);
  }

  const backgroundStyle ={
    backgroundImage: `url(${background})`
  }

  return (
    <div style={backgroundStyle} className={styles.Card}>
      <h1>{props.title}</h1>
      <h4>{props.subtitle}</h4>
    </div>
  )
};

export default card;