import React, { Component } from 'react';
import { Container, Button, Breadcrumb, Col, Form, FormGroup, Label, Input } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import './NewArticle.css';

class NewArticle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      discription: '',
      date: null
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.articleList = (localStorage.articleList === undefined) ? [] : JSON.parse(localStorage.articleList);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleDiscriptionChange = this.handleDiscriptionChange.bind(this);
  }

  handleSubmit(event) {
    this.state.date = new Date();
    if (this.state.title === '') {
      this.state.title = 'Untitle';
    }
    if (this.state.discription !== '') {
      this.articleList.unshift(this.state);
      localStorage.articleList = JSON.stringify(this.articleList);
    }
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
        <Form>
          <Breadcrumb>
            <Button 
              tag={NavLink} 
              to='/'
              color="primary"
            >
              Назад
            </Button>
            <Button
              className="button-accept"
              onClick={this.handleSubmit}
              tag={NavLink} 
              to='/'
              color="primary"
            >
              Готово
            </Button>
          </Breadcrumb>
          <FormGroup row>
            <Label for="exampleEmail" sm={2}>Заголовок:</Label>
            <Col sm={10}>
              <Input value={this.state.title} onChange={this.handleTitleChange} type="text" placeholder="Введите заголовок" />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="exampleText" sm={2}>Содержание:</Label>
            <Col sm={10}>
              <Input value={this.state.discription} onChange={this.handleDiscriptionChange} type="textarea" placeholder="Введите текст" />
            </Col>
          </FormGroup>
        </Form>
      </Container>
    );
  }
}

export default NewArticle;
