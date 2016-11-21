'use strict';

import {
    fromJS,
    List
} from 'immutable';
import mockData from './mock/data.js';

const oppStages = (state = List(), action) => {
    switch (action.type) {
        case 'LOAD_OPPSTAGES':
/*replace-for-dev-start
            return fromJS(mockData.oppStages);
replace-for-dev-end*/
/*replace-for-prod-start*/
            return fromJS(action.stages);
/*replace-for-prod-end*/
        default:
            return state;
    }
}

export default oppStages;
