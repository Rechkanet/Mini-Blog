import React from 'react';
import { Button, Modal, ModalHeader, ModalFooter, Container } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import './ButtonDelete.css';

class ModalExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
    this.toggle = this.toggle.bind(this);
    this.deleteArticle = this.deleteArticle.bind(this);
    this.articleList = (localStorage.articleList === undefined) ? [] : JSON.parse(localStorage.articleList);
    this.index = this.props.index;
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  deleteArticle() {
    this.articleList.splice(this.index, 1);
    localStorage.articleList = JSON.stringify(this.articleList);
  }

  render() {
    return (
      <Container className="button-delete">
        <Button color="secondary" onClick={this.toggle} size="lg" block >Delete</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Delete current news?</ModalHeader>
          <ModalFooter>
            <Button 
              color="primary" 
              onClick={this.deleteArticle} 
              tag={NavLink} 
              to='/'
              color="danger" 
            >
              Accept
            </Button>{' '}
            <Button 
              color="secondary" 
              onClick={this.toggle} 
            >
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </Container>
    );
  }
}

export default ModalExample;