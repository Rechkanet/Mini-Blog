import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App/App';
import ViewArticle from './containers/ViewArticle/ViewArticle';
import NewArticle from './containers/NewArticle/NewArticle';
import EditArticle from './containers/EditArticle/EditArticle';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter , Route, Switch } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={App}/>
      <Route path='/view/:id' component={ViewArticle}/>
      <Route path='/edit/:id' component={EditArticle}/>
      <Route path='/new-article' component={NewArticle}/>
    </Switch>
  </BrowserRouter>, 
  document.getElementById('root'));
registerServiceWorker();
