'use strict';

import {
    fromJS,
    List
} from 'immutable';
import mockData from './mock/data.js';

const opps = (state = List(), action) => {
    switch (action.type) {
        case 'LOAD_OPPS':
/*replace-for-dev-start*/
            return fromJS(mockData.opps);
/*replace-for-dev-end*/
/*replace-for-prod-start
            return fromJS(action.opps);
replace-for-prod-end*/
        default:
            return state;
    }
}

export default opps;
