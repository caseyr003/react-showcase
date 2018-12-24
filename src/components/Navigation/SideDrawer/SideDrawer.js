import React from 'react';
import styles from './SideDrawer.module.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux/Aux';

const sideDrawer = (props) => {

  let attachedStyles = [styles.SideDrawer, styles.Close];
  
  if (props.show) {
    attachedStyles = [styles.SideDrawer, styles.Open];
  }

  return (
    <Aux>
      <Backdrop show={props.show} clicked={props.closed} />
      <div className={attachedStyles.join(' ')}>
        <nav>
          <button>Home</button>
          <button>Contact</button>
        </nav>
      </div>
    </Aux>
  );
};

export default sideDrawer;