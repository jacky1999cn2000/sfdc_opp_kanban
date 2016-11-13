'use strict';

import {fromJS, List} from 'immutable';
import mockData from './mock/data.js';

const challenges = (state=List(), action) => {
  switch (action.type) {
    case 'LOAD_CHALLENGES':
      return fromJS(mockData.challenges);
    default:
      return state;
  }
}

export default challenges;
