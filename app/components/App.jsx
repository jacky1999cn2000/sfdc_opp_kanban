import React from 'react';
import {connect} from 'react-redux';

import Menu from './Menu';
import Kanban from './Kanban';
import Login from './Login';

import {requestToken} from '../actions';

import cache from '../utils/cache';
import config from '../config.json';

class App extends React.Component {

    componentWillMount() {
        /*
            if 'access_token' and 'instance_url' present, do nothing;
            if 'access_token' and 'instance_url' not present, then check if query string 'code' present:
              yes - then it's SFDC oauth2 callback, use the code to retrieve token
              no - do nothing, the render() function will redirect it to Login
        */
        if (!cache.get('access_token') && !cache.get('instance_url')) {
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

        if (!cache.get('access_token') && !cache.get('instance_url')) {
            content = <Login/>
        } else {
            // simply reload the page without query string to make the url clean
            if (window.location.search) {
                window.location.replace(config.redirect_uri);
            }
            content = <Kanban/>
        }

        return (
            <div className="app">
                <Menu/>
                <div className="content">
                    content
                    <br/>
                    content
                    <br/>
                    content
                    <br/>
                    content
                    <br/>
                    content
                    <br/>
                    content
                    <br/>
                    content
                    <br/>
                    content
                    <br/>
                    content
                    <br/>
                    content
                    <br/>
                    content
                    <br/>
                    content
                    <br/>
                    content
                    <br/>
                    content
                    <br/>
                    content
                    <br/>
                    content
                    <br/>
                    content
                    <br/>
                    content
                    <br/>
                    content
                    <br/>
                    content
                    <br/>
                    content
                    <br/>
                    content
                    <br/>
                    content
                    <br/>
                    content
                    <br/>
                    content
                    <br/>
                    content
                    <br/>
                    content
                    <br/>
                    content
                    <br/>
                    content
                    <br/>
                    content
                    <br/>
                    content
                    <br/>
                    content
                    <br/> {content}
                </div>
                <div className="footer">
                    footer here
                </div>
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
