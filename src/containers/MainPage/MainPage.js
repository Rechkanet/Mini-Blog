import React, { Component } from 'react';
import { Container, Button, Breadcrumb, Media } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import './MainPage.css';
import Moment from 'react-moment';
import 'moment-timezone';
import Record from '../../components/Record/Record';
import NavMenu from '../../components/NavMenu/NavMenu';

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: (localStorage.articleList === undefined) ? [] : JSON.parse(localStorage.articleList)
    };
  }

  render() {
    return (
      <Container>
        <NavMenu
          buttonRightText='New label'
          buttonRightLink='/new-article'
          buttonBackVisibility='hidden'
        />
        {
          this.state.articles.map((article, index) =>
            <Record
              key={index}
              title={article.title}
              dataTime={article.date}
              index={index}
              buttonVisibility={'visible'}
            />
          )
        }
      </Container>
    );
  }
}

export default MainPage;
