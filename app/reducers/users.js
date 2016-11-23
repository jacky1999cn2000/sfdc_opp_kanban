'use strict';

import {
    fromJS,
    Map
} from 'immutable';
import mockData from './mock/data.js';

const users = (state = Map(), action) => {
    switch (action.type) {
        case 'LOAD_USERS':
            let userMap = {};
/*replace-for-dev-start*/
            mockData.users.forEach((user) => {
/*replace-for-dev-end*/
/*replace-for-prod-start
            action.users.forEach((user) => {
replace-for-prod-end*/
                userMap[user.Id] = user;
            });
            return fromJS(userMap);
        default:
            return state;
    }
}

export default users;
