import React, { Component } from 'react';
import { Container, Button, Breadcrumb, Col, Form, FormGroup, Label, Input, Alert, Navbar, NavbarBrand, Nav } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import './NewArticle.css';
import NavMenu from '../../components/NavMenu/NavMenu';
import { Redirect } from 'react-router';

class NewArticle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      discription: '',
      date: null,
      hint: 'hidden'
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.articleList = (localStorage.articleList === undefined) ? [] : JSON.parse(localStorage.articleList);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleDiscriptionChange = this.handleDiscriptionChange.bind(this);
  }

  handleSubmit() {
    if ((this.state.title !== '') && 
        (this.state.discription !== '')) {
      this.state.date = new Date();
      this.articleList.unshift({
        title: this.state.title,
        discription: this.state.discription,
        date: this.state.date
      });
      localStorage.articleList = JSON.stringify(this.articleList);
      return true;
    }
    this.setState({ hint: 'visible' });
    return false;
  }

  handleTitleChange (event) {
    this.setState({title: event.target.value});
  }

  handleDiscriptionChange (event) {
    this.setState({discription: event.target.value});
  }

  render() {
    return (
      <Container>
        <NavMenu
          buttonRightText='Done'
          buttonRightLink={`/view/${0}`}
          buttonBackVisibility='visible'
          buttonRightFunction={this.handleSubmit}
        />
        <Alert className={this.state.hint} color="warning">
          Not all fields are filled!
        </Alert>
        <Form>
          <FormGroup row>
            <Label for="exampleEmail" sm={2}>Title:</Label>
            <Col sm={10}>
              <Input value={this.state.title} onChange={this.handleTitleChange} type="text" placeholder="Enter a title" />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="exampleText" sm={2}>Discription:</Label>
            <Col sm={10}>
              <Input value={this.state.discription} onChange={this.handleDiscriptionChange} type="textarea" placeholder="Enter a discription" />
            </Col>
          </FormGroup>
        </Form>
      </Container>
    );
  }
}

export default NewArticle;
