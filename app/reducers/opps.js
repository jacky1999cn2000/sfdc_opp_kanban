'use strict';

import {
    fromJS,
    List
} from 'immutable';
import mockData from './mock/data.js';

const opps = (state = List(), action) => {
    switch (action.type) {
        case 'LOAD_OPPS':
            // return fromJS(mockData.opps);
            return fromJS(action.opps);
        default:
            return state;
    }
}

export default opps;
