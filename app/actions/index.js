'use strict';

import {
    TYPES
} from './types.js'
require('es6-promise').polyfill();
import fetch from 'isomorphic-fetch';
import config from '../config.json';
import cache from '../utils/cache';

export const requestToken = (code) => {
    return function(dispatch) {

        dispatch(changeAppState(['requestingToken'], [true]));

        let url = config.api_gateway_request_token + '?code=' + code + '&environment=production';
        return fetch(url)
            .then(response => response.json())
            .then(json => {
                if (json.error) {
                    // notify App about the err
                    dispatch(changeAppState(['status'], [json]));
                } else {
                    // set 'access_token' in cache and notify App
                    cache.set('access_token', json.access_token);
                    cache.set('instance_url', json.instance_url);
                    dispatch(changeAppState(['status', 'requestingToken'], [json, true]));
                }
            })
            .catch(err => {
                console.log('err: ', err);
            });
    }
}

/*     OpportunityStage Actions   */

export const requestOpportunityStages = () => {
    return function(dispatch) {
        // notify App "requestingOppStages" is set true
        dispatch(changeAppState(['requestingOppStages'], [true]));

        let url = cache.get('instance_url') + '/services/data/v37.0/query/?q=SELECT+SortOrder,+ApiName+FROM+OpportunityStage';

        let headers = new Headers();
        headers.append("Authorization", 'Bearer ' + cache.get('access_token'));

        return fetch(url, {
                headers: headers
            })
            .then(response => response.json())
            .then(json => {
                if (json.error) {
                    // notify App about the err
                    dispatch(changeAppState(['status'], [json]));
                } else {
                    // load oppStages and notify App with status
                    dispatch(loadOpportunityStages(json.records));
                    dispatch(changeAppState(['status', 'hasOppStages'], [json, true]));
                }
            })
            .catch(err => {
                /*
                  CORS error if haven't added "https://s3-us-west-2.amazonaws.com" into SFDC org's CORS whitelist origins
                  (Setup - Security Controls - CORS)
                */
                dispatch(changeAppState(['status'], [{
                    error: err
                }]));
            });
    }
}

export const loadOpportunityStages = (stages) => {
    return {
        type: TYPES.LOAD_OPPSTAGES,
        stages
    };
}

/*     User Actions   */

export const requestUsers = () => {
    return function(dispatch) {
        // notify App "requestingUser" is set true
        dispatch(changeAppState(['requestingUsers'], [true]));

        let url = cache.get('instance_url') + '/services/data/v37.0/query/?q=SELECT+Id,+FirstName,+LastName,+SmallPhotoUrl+FROM+User';

        let headers = new Headers();
        headers.append("Authorization", 'Bearer ' + cache.get('access_token'));

        return fetch(url, {
                headers: headers
            })
            .then(response => response.json())
            .then(json => {
                if (json.error) {
                    // notify App about the err
                    dispatch(changeAppState(['status'], [json]));
                } else {
                    // load oppStages and notify App with status
                    dispatch(loadUsers(json.records));
                    dispatch(changeAppState(['status', 'hasUsers'], [json, true]));
                }
            })
            .catch(err => {
                /*
                  CORS error if haven't added "https://s3-us-west-2.amazonaws.com" into SFDC org's CORS whitelist origins
                  (Setup - Security Controls - CORS)
                */
                dispatch(changeAppState(['status'], [{
                    error: err
                }]));
            });
    }
}

export const loadUsers = (users) => {
    return {
        type: TYPES.LOAD_USERS,
        users
    };
}

/*     Opportunities Actions   */

export const requestOpportunities = () => {
    return function(dispatch) {
        // notify App "requestingOpps" is set true
        dispatch(changeAppState(['requestingOpps'], [true]));

        let url = cache.get('instance_url') + '/services/data/v37.0/query/?q=SELECT+Id,+Name,+Description,+Amount,+StageName,+OwnerId+FROM+Opportunity';

        let headers = new Headers();
        headers.append("Authorization", 'Bearer ' + cache.get('access_token'));

        return fetch(url, {
                headers: headers
            })
            .then(response => response.json())
            .then(json => {
                if (json.error) {
                    // notify App about the err
                    dispatch(changeAppState(['status'], [json]));
                } else {
                    // load oppStages and notify App with status
                    dispatch(loadOpportunities(json.records));
                    dispatch(changeAppState(['status', 'hasOpps'], [json, true]));
                }
            })
            .catch(err => {
                /*
                  CORS error if haven't added "https://s3-us-west-2.amazonaws.com" into SFDC org's CORS whitelist origins
                  (Setup - Security Controls - CORS)
                */
                dispatch(changeAppState(['status'], [{
                    error: err
                }]));
            });
    }
}

export const loadOpportunities = (opps) => {
    return {
        type: TYPES.LOAD_OPPS,
        opps
    };
}

export const changeAppState = (names, values) => {
    return {
        type: TYPES.CHANGE_APPSTATE,
        names,
        values
    };
}
