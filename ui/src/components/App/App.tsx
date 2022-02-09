import React from 'react';
import { CssBaseline, ThemeProvider, Theme } from '@material-ui/core';

type Props = {
    theme: Theme;
}

export function App (props: Props) {
    return (
        <ThemeProvider theme={props.theme}>
            <CssBaseline />
        </ThemeProvider>
    );
}

export default App;
