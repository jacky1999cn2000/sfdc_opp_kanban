'use strict';

import {
    combineReducers
} from 'redux';
import appState from './appState';
import oppStages from './oppStages';
import users from './users';
import opps from './opps';

const reducers = combineReducers({
    appState,
    oppStages,
    users,
    opps
});

export default reducers;
