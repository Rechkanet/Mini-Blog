import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Navbar,
  NavbarBrand,
  Nav,
  Button 
} from 'reactstrap';
import './NavMenu.css';
import { Redirect } from 'react-router';

class NavMenu extends Component {
  static propTypes = {
    buttonRightText: PropTypes.string.isRequired,
    buttonRightLink: PropTypes.string.isRequired,
    buttonRightFunction: PropTypes.func,
    buttonBackVisibility: PropTypes.oneOf(['hidden', 'visible']).isRequired
  };

  static defaultProps = {
    buttonRightFunction: (() => {return true}),
  };

  constructor(props) {
    super(props);
    this.state = {
      redirect: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (this.props.buttonRightFunction()) {
      this.setState({redirect: true});
    }
  }

  render() {
    if (this.state.redirect) {
      return <Redirect push to={this.props.buttonRightLink} />;
    }
    return (
      <Navbar className="navMenu" color="faded" light expand="md">
        <NavbarBrand>
          <Button 
            className={this.props.buttonBackVisibility}
            tag={NavLink} 
            to='/'
          >
          Back
          </Button>
        </NavbarBrand>
        <Nav className="ml-auto" navbar>
          <Button
            color="primary" 
            onClick={this.handleClick}
          >
          {this.props.buttonRightText}
          </Button>
        </Nav>
      </Navbar>
    );
  }
}

export default NavMenu;