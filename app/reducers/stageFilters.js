'use strict';

import {
    fromJS,
    List
} from 'immutable';
import mockData from './mock/data.js';

const stageFilters = (state = List(), action) => {
    switch (action.type) {
        case 'LOAD_STAGEFILTERS': // when loading, the action.stages are like this: [{ApiName: 'Prospecting', SortOrder: 1}, {ApiName: 'Qualification', SortOrder: 2}, ...]
            let stageList = [];
/*replace-for-dev-start*/
            mockData.oppStages.forEach((stage) => {
/*replace-for-dev-end*/
/*replace-for-prod-start
            action.stages.forEach((stage) => {
/*replace-for-prod-end*/          
                stageList.push(stage.ApiName);
            });
            return fromJS(stageList);
        case 'UPDATE_STAGEFILTERS':
            state = fromJS(action.stages.split(',')); // when updating, action.stages is a comma delimited string : Prospecting,Closed Lost,Qualification,Needs Analysis,...
            return state;
        default:
            return state;
    }
}

export default stageFilters;
