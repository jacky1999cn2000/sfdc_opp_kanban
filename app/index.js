import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory, hashHistory, IndexRoute} from 'react-router';

import App from './components/App';
import Kanban from './components/Kanban';
import Login from './components/Login';

import Cache from './utils/cache';
import Sfdc from './utils/sfdc';

import './scss/main.scss';

let cache = new Cache();

function requireAuth(nextState, replace) {
  if (!window.location.search && !cache.get('sfdc_token')) {
    replace({
      pathname: '/login'
    })
  }else{
    let code = decodeURIComponent(window.location.search.split('code=')[1]);
    console.log('code ',code);
  }
}

ReactDOM.render((
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Kanban} onEnter={requireAuth}/>
        <Route path="/login" component={Login}/>
      </Route>
    </Router>
  ), document.getElementById('app')
);
