import React from 'react';
import styles from './LoadingSpinner.module.css';
import Logo from '../../../assets/img/logo.png';

const loadingSpinner = () => (
  <div className={styles.LoadingSpinner}>
    <img src={Logo} alt="logo" />
  </div>
);

export default loadingSpinner;