import React from 'react';
import {connect} from 'react-redux';
import config from '../config.json';

class Login extends React.Component {

    login = () => {
        // concatenate SFDC authorize endpoint
        let url = config.oauth_host_prod + '?response_type=' + config.response_type + '&client_id=' + config.client_id + '&redirect_uri=' + config.redirect_uri + '&scope=' + config.scope;
        // redirect to endpoint
        location.replace(url);
    }

    render() {
        console.log('Login render');
        return (
            <div>
                Login component
                <button type="button" className="button" onClick={this.login}>Login</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {state: state}
}

const mapDispathToProps = (dispatch) => {
    return {dispatch: dispatch}
}

Login = connect(mapStateToProps, mapDispathToProps)(Login);

export default Login;
