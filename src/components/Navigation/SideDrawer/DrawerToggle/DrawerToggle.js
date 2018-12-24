import React from 'react';
import styles from './DrawerToggle.module.css';

const drawerToggle = (props) => {

  let topStyles = [styles.Top];
  let middleStyles = [styles.Middle];
  let bottomStyles = [styles.Bottom];
  
  if (props.show) {
    topStyles = [styles.Top, styles.TopOpen];
    middleStyles = [styles.Top, styles.MiddleOpen];
    bottomStyles = [styles.Top, styles.BottomOpen];
  }

  return (
    <div 
      onClick={props.clicked}
      className={styles.DrawerToggle}>
      <div className={topStyles.join(' ')}></div>
      <div className={middleStyles.join(' ')}></div>
      <div className={bottomStyles.join(' ')}></div>
    </div>
  );
};

export default drawerToggle;