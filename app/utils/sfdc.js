import jsforce from 'jsforce';

let conn, oauth2;

module.exports = {

    getOauth: function() {
        oauth2 = new jsforce.OAuth2({
            loginUrl: 'https://login.salesforce.com',
            clientId: '3MVG98XJQQAccJQe5s.9CLZNdWll8Mpr99bCs5xmj7gnDJSQUez7UzTZidWkJKZp7R1eq5AJ796fuIM7mhirM',
            clientSecret: '5828632327869003970',
            redirectUri: 'https://s3-us-west-2.amazonaws.com/jz-playground/sfdc_opp_kanban/index.html'
        });
        console.log('oauth2 ', oauth2);
        return oauth2;
    },

    getToken: function(code) {
        console.log('getToken');
        conn = new jsforce.Connection({
            oauth2: oauth2
        });
        console.log('code: ' + code);
        conn.authorize(code, function(err, userInfo) {
            if (err) {
                console.error(err);
                return;
            }
            // Now you can get the access token, refresh token, and instance URL information.
            // Save them to establish connection next time.
            console.log(conn.accessToken);
            console.log(conn.refreshToken);
            console.log(conn.instanceUrl);
            console.log("User ID: " + userInfo.id);
            console.log("Org ID: " + userInfo.organizationId);
            // ...
            return conn.accessToken;
        });
    }
}
