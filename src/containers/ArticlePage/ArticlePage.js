import React, { Component } from 'react';
import { Container, Button, Breadcrumb, Col, Form, FormGroup, Label, Input } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import './ArticlePage.css';
import ButtonDelete from '../../components/Button-delete/Button-delete';

class ArticlePage extends Component {
  constructor(props) {
    super(props);
    this.articleList = (localStorage.articleList === undefined) ? [] : JSON.parse(localStorage.articleList);
    this.index = this.props.match.params.id;
    this.state = {
      title: this.articleList[this.index].title,
      discription: this.articleList[this.index].discription,
      date: this.articleList[this.index].data
    };
    this.artcle = this.articleList[this.index];
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleDiscriptionChange = this.handleDiscriptionChange.bind(this);
    this.deleteArticle = this.deleteArticle.bind(this);
    this.equalArticle = this.equalArticle.bind(this);
  }

  handleSubmit(event) {
    if (!this.equalArticle()) {
      this.articleList.splice(this.index, 1);
      if ((this.state.title !== '') && 
          (this.state.discription !== '')) {
        this.state.date = new Date();
        if (this.state.title === '') {
          this.state.title = 'Untitle';
        }
        this.articleList.unshift(this.state);
      }
      localStorage.articleList = JSON.stringify(this.articleList);
    }
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

  deleteArticle() {
    this.articleList.splice(this.index, 1);
    localStorage.articleList = JSON.stringify(this.articleList);
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
              <Input value={this.state.title} 
                onChange={this.handleTitleChange} 
                type="text" 
                placeholder="Введите заголовок" 
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="exampleText" sm={2}>Содержание:</Label>
            <Col sm={10}>
              <Input value={this.state.discription} 
                onChange={this.handleDiscriptionChange} 
                type="textarea" 
                placeholder="Введите текст" 
              />
            </Col>
            <ButtonDelete index={this.index}/>
          </FormGroup>
        </Form>
      </Container>
    );
  }
}

export default ArticlePage;
