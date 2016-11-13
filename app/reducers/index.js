'use strict';

import { combineReducers } from 'redux';
import appState from './appState';
import challenges from './challenges';

const reducers = combineReducers({
    appState,
    challenges
});

export default reducers;
