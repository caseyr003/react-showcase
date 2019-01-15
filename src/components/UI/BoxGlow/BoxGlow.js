import React from 'react';
import styles from './BoxGlow.module.css';

const boxGlow = (props) => (
  <div className={styles.BoxGlow}>{props.children}</div>
);

export default boxGlow;