import React, { Component } from 'react';
import { Container, Button, Media } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Record.css';
import Moment from 'react-moment';
import 'moment-timezone';

class Record extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    discription: PropTypes.string,
    dateTime: PropTypes.instanceOf(Date).isRequired,
    index: PropTypes.number,
    discriptionVisibility: PropTypes.oneOf(['hidden', 'visible']).isRequired,
    buttonVisibility: PropTypes.oneOf(['hidden', 'visible']).isRequired
  };
  
  static defaultProps = {
    discription: '',
    index: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      dateTime: this.props.dateTime,
      discription: this.props.discription,
      index: this.props.index,
      buttonVisibility: this.props.buttonVisibility
    };
  }

  render() {
    return (
      <Container>
        <Media>
          <Media body className="text">
            <Media heading className="text">
              <h2>{this.state.title}</h2>
            </Media>
            <Moment format="LLL">
              {this.state.dateTime}
            </Moment>
            <div className={this.state.discriptionVisibility}>
              <br />
              {this.props.discription}
            </div>
            </Media>
            <Button className={this.state.buttonVisibility} tag={NavLink} to={`/view/${this.state.index}`} outline color="secondary">View</Button>
        </Media>
        <br />
        <br />
      </Container>
    );
  }
}

export default Record;
