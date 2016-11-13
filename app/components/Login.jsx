import React from 'react';
import {connect} from 'react-redux';
import config from '../config.json';

class Login extends React.Component {

    // let cache = new Cache();

    // function requireAuth(nextState, replace) {
    //   if (!cache.get('sfdc_token') && !window.location.search) {
    //     replace({
    //       pathname: '/login'
    //     })
    //   }else{
    //     if(!cache.get('sfdc_token')){
    //       let code = decodeURIComponent(window.location.search.split('code=')[1]);
    //       console.log('code ',code);
    //     }
    //   }
    // }
    // constructor() {
    //     super(...arguments);
    // }

    login = () => {
        console.log('login!!!');
        let url = config.oauth_host_prod + '?response_type=' + config.response_type + '&client_id=' + config.client_id + '&redirect_uri=' + config.redirect_uri + '&scope=' + config.scope;
        console.log('url ', url);
        location.replace(url);
        // location.replace(Sfdc.getOauth().getAuthorizationUrl({scope: 'api id web'}));
        //this.another();
    }

    another = () => {
        console.log('another!');
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
