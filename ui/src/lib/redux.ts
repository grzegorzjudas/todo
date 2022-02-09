import { createStore, applyMiddleware, Store } from 'redux';
import Thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { State } from 'types/Redux';

import reducers from 'reducers/';

export function createAppStore (): Store<State> {
    const composer = composeWithDevTools({});
    const store = createStore(reducers, {}, composer(applyMiddleware(Thunk)));

    return store;
}
