'use strict';

import {
    fromJS,
    Map
} from 'immutable';

const appState = (state = Map({

    status: {},

    //these states were used for displaying "Loading" UI
    requestingToken: false, // no need for "hasToken" since we check cache for it
    requestingUsers: false,
    requestingOpps: false,
    requestingOppStages: false,

    hasUsers: false,
    hasOpps: false,
    hasOppStages: false,

    streaming: false,
    pushTopic: ''

}), action) => {
    switch (action.type) {
        case 'CHANGE_APPSTATE':
            for (let i = 0; i < action.names.length; i++) {
                state = state.set(action.names[i], action.values[i]);
            }
            return state;
        default:
            return state;
    }
}

export default appState;
