'use strict';

import {
    fromJS,
    List
} from 'immutable';
import mockData from './mock/data.js';

const oppStages = (state = List(), action) => {
    switch (action.type) {
        case 'LOAD_OPPSTAGES':
            // return fromJS(mockData.oppStages);
            return fromJS(action.stages);
        default:
            return state;
    }
}

export default oppStages;
