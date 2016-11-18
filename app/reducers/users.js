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
            //action.users.forEach((user) => {
            mockData.users.forEach((user) => {
                userMap[user.Id] = user;
            });
            return fromJS(userMap);
        default:
            return state;
    }
}

export default users;
