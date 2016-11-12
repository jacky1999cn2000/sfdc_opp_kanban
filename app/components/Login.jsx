import React from 'react';
import Sfdc from '../utils/sfdc';

class Login extends React.Component {

    login = () => {
      console.log('login!!!');
      let host = 'https://login.salesforce.com/services/oauth2/authorize';
      let response_type = 'code';
      let client_id = '3MVG98XJQQAccJQe5s.9CLZNdWll8Mpr99bCs5xmj7gnDJSQUez7UzTZidWkJKZp7R1eq5AJ796fuIM7mhirM';
      let scope = 'api id web'
      // let client_secret = '5828632327869003970';
      let redirect_uri = 'https://s3-us-west-2.amazonaws.com/jz-playground/sfdc_opp_kanban/index.html';
      let url = host+'?response_type='+response_type+'&client_id='+client_id+'&redirect_uri='+redirect_uri+'&scope='+scope;
      console.log('url ',url);
      location.replace(url);
      // location.replace(Sfdc.getOauth().getAuthorizationUrl({scope: 'api id web'}));
      //this.another();
    }

    another = () => {
      console.log('another!');
    }

    render() {
        return (
            <div>
              Login component
              <button type="button" className="button" onClick={this.login}>Login</button>
            </div>
        );
    }
}

export default Login;
