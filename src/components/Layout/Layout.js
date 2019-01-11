import React, {Component} from 'react';
import Aux from '../../hoc/Aux/Aux';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import DrawerToggle from '../Navigation/SideDrawer/DrawerToggle/DrawerToggle';
import styles from './Layout.module.css'

class Layout extends Component {
  state = {
    showSideDrawer: false
  }

  sideDrawerClosedHandler = () => {
    this.setState({showSideDrawer: false});
  }

  sideDrawerToggleHandler = () => {
    this.setState((prevState) => {
      return {showSideDrawer: !prevState.showSideDrawer};
    });
  }

  render() {
    return (
      <Aux>
        <DrawerToggle 
           show={this.state.showSideDrawer}
           clicked={this.sideDrawerToggleHandler} />
        <SideDrawer 
          show={this.state.showSideDrawer}
          closed={this.sideDrawerClosedHandler} />
        <div class="container-fluid">
          {this.props.children}
        </div>
      </Aux>
    )
  }
}

export default Layout;