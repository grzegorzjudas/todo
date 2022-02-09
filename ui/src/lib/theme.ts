import { createTheme } from '@material-ui/core';
import { teal, red  } from '@material-ui/core/colors';

export default createTheme({
    palette: {
        primary: {
            dark: teal[800],
            main: teal[500],
            light: teal[300]
        },
        secondary: {
            dark: red[900],
            main: red[400],
            light: red[500]
        }
    }
});
