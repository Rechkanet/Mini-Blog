import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App/App';
import ArticlePage from './containers/ArticlePage/ArticlePage';
import NewArticle from './containers/NewArticle/NewArticle';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter , Route, Switch } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={App}/>
      <Route path='/articles/:id' component={ArticlePage}/>
      <Route path='/new-article' component={NewArticle}/>
    </Switch>
  </BrowserRouter>, 
  document.getElementById('root'));
registerServiceWorker();
