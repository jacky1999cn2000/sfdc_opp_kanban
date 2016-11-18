'use strict';

import {
    combineReducers
} from 'redux';
import appState from './appState';
import oppStages from './oppStages';
import users from './users';
import opps from './opps';
import stageFilters from './stageFilters';

const reducers = combineReducers({
    appState,
    oppStages,
    users,
    opps,
    /* stageFilters is an app state and can be placed insie appState
      (refer to https://github.com/jacky1999cn2000/react-native-imagenotes/blob/master/app/reducers/notes.js)
    */
    stageFilters
});

export default reducers;
