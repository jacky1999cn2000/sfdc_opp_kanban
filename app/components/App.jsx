import React from 'react';
import {connect} from 'react-redux';

import Kanban from './Kanban';
import Login from './Login';

import {requestToken} from '../actions';

import cache from '../utils/cache';
import config from '../config.json';

class App extends React.Component {

    componentWillMount() {
        /*
            if 'access_token' present, do nothing;
            if 'access_token' not present, then check if query string 'code' present:
              yes - then it's SFDC oauth2 callback, use the code to retrieve token
              no - do nothing, the render() function will redirect it to Login
        */
        if (!cache.get('access_token')) {
            if (window.location.search && window.location.search.indexOf('code') != -1) {
                let code = decodeURIComponent(window.location.search.split('code=')[1]);
                this.props.dispatch(requestToken(code));
            }
        }
    }

    render() {
        console.log('App render');

        let content;

        // based on the value of status, decide what to do - implement later
        console.log('status? ', this.props.state.appState.get('status'));

        if (!cache.get('access_token')) {
            content = <Login/>
        } else {
            // simply reload the page without query string to make the url clean
            if (window.location.search) {
                window.location.replace(config.redirect_uri);
            }
            content = <Kanban/>
        }

        return (
            <div>
                This is new version! {content}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log('state ', state);
    return {state: state}
}

const mapDispathToProps = (dispatch) => {
    return {dispatch: dispatch}
}

App = connect(mapStateToProps, mapDispathToProps)(App);

export default App;
