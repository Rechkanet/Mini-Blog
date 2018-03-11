import React, { Component } from 'react';
import { Container, Button, Breadcrumb, Col, Form, FormGroup, Label, Input, Navbar, NavbarBrand, Nav, Alert } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import './EditArticle.css';
import ButtonDelete from '../../components/ButtonDelete/ButtonDelete';
import NavMenu from '../../components/NavMenu/NavMenu';

class ArticlePage extends Component {
  constructor(props) {
    super(props);
    this.articleList = (localStorage.articleList === undefined) ? [] : JSON.parse(localStorage.articleList);
    this.index = this.props.match.params.id;
    this.state = {
      title: this.articleList[this.index].title,
      discription: this.articleList[this.index].discription,
      date: this.articleList[this.index].data,
      hint: 'hidden'
    };
    this.artcle = this.articleList[this.index];
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleDiscriptionChange = this.handleDiscriptionChange.bind(this);
    this.equalArticle = this.equalArticle.bind(this);
  }

  handleSubmit() {
    if (!this.equalArticle()) {
      if ((this.state.title !== '') && 
          (this.state.discription !== '')) {
        this.articleList.splice(this.index, 1);
        this.state.date = new Date();
        this.articleList.unshift({
          title: this.state.title,
          discription: this.state.discription,
          date: this.state.data
        });
        localStorage.articleList = JSON.stringify(this.articleList);
        this.index = 0;
        this.setState({});
        return true;
      }
      this.setState({ hint: 'visible' });
      return false;
    }
    return true;
  }

  handleTitleChange (event) {
    this.setState({title: event.target.value});
  }

  handleDiscriptionChange (event) {
    this.setState({discription: event.target.value});
  }

  equalArticle() {
    return (this.state.title === this.artcle.title) && 
           (this.state.discription === this.artcle.discription);
  }

  render() {
    return (
      <Container>
        <NavMenu
          buttonRightText='Done'
          buttonRightLink={`/view/${this.index}`}
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
              <Input value={this.state.title} 
                onChange={this.handleTitleChange} 
                type="text" 
                placeholder="Enter a title"
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="exampleText" sm={2}>Discription:</Label>
            <Col sm={10}>
              <Input value={this.state.discription} 
                onChange={this.handleDiscriptionChange} 
                type="textarea" 
                placeholder="Enter a discription"
              />
            </Col>
          </FormGroup>
        </Form>
        <ButtonDelete index={this.index}/>
      </Container>
    );
  }
}

export default ArticlePage;
