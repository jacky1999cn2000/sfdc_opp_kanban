'use strict';

import {
    fromJS,
    List
} from 'immutable';
import mockData from './mock/data.js';

const users = (state = List(), action) => {
    switch (action.type) {
        case 'LOAD_USERS':
            // return fromJS(mockData.users);
            return fromJS(action.users);
        default:
            return state;
    }
}

export default users;
