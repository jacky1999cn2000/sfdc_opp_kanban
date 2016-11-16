'use strict';

import {
    combineReducers
} from 'redux';
import appState from './appState';
import oppStages from './oppStages';
import users from './users';

const reducers = combineReducers({
    appState,
    oppStages,
    users
});

export default reducers;
