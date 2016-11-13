'use strict';

import {
    fromJS,
    Map
} from 'immutable';

const appState = (state = Map({

    status: {},

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
