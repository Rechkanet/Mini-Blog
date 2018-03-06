import React, { Component } from 'react';
import { Container, Button, Breadcrumb, Media } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import './MainPage.css';
import Moment from 'react-moment';
import 'moment-timezone';

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
        <Breadcrumb className="button-new">
         <Button 
           tag={NavLink} 
           to='/new-article'
           color="primary"
          >
            Добавить
          </Button>
        </Breadcrumb>
        {
          this.state.articles.map((article, index) =>
            <div>
              <Media key={index}>
                <Media body className="text">
                  <Media heading className="text">
                  {article.title}
                  </Media>
                  <br />
                  <Moment format="LLL">
                    {article.date}
                  </Moment>
                  <br />
                  <br />
                  {article.discription.substr(0, 250)}
                </Media>
                <Button  tag={NavLink} to={`/articles/${index}`} outline color="secondary">Подробнее</Button>
              </Media>
              <br />
              <br />
            </div>
          )
        }
      </Container>
    );
  }
}

export default MainPage;
