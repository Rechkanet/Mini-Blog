import React, { Component } from 'react';
import { Container, Button, Breadcrumb, Media } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import './ViewArticle.css';
import Record from '../../components/Record/Record';
import NavMenu from '../../components/NavMenu/NavMenu';
import { Redirect } from 'react-router';

class ViewArticle extends Component {
  constructor(props) {
    super(props);
    this.articleList = (localStorage.articleList === undefined) ? [] : JSON.parse(localStorage.articleList);
    this.index = this.props.match.params.id;
    this.state = {
      title: this.articleList[this.index].title,
      discription: this.articleList[this.index].discription,
      date: this.articleList[this.index].data
    };
  }

  render() {
    return (
      <Container>
        <NavMenu
          buttonRightText='Edit'
          buttonRightLink={`/edit/${this.index}`}
          buttonBackVisibility='visible'
        />
        <Record
          title={this.state.title}
          dataTime={this.state.date}
          discription={this.state.discription}
          buttonVisibility={'hidden'}
        />
      </Container>
    );
  }
}

export default ViewArticle;
