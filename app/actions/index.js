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
                    dispatch(changeAppState(['status'], [json]));
                }
            })
            .catch(err => {
                console.log('err: ', err);
            });
    }
}

export const loadChallenges = () => {
    return {
        type: TYPES.LOAD_CHALLENGES
    }
}

export const changeAppState = (names, values) => {
    return {
        type: TYPES.CHANGE_APPSTATE,
        names,
        values
    };
}
