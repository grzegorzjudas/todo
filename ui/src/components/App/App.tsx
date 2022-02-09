import React from 'react';
import { Store } from 'redux';
import { Provider } from 'react-redux';
import { CssBaseline, ThemeProvider, Theme } from '@material-ui/core';

import { State } from 'types/Redux';

type Props = {
    theme: Theme;
    store: Store<State>;
}

export function App (props: Props) {
    return (
        <ThemeProvider theme={props.theme}>
            <CssBaseline />
            <Provider store={props.store}>
                <h1>Hello world!</h1>
            </Provider>
        </ThemeProvider>
    );
}

export default App;
