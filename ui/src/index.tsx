import React from 'react';
import { render } from 'react-dom';
import { Button, Card, CardActions, CardContent, CardHeader, createTheme, CssBaseline, makeStyles, ThemeProvider } from '@material-ui/core';
import { teal, red  } from '@material-ui/core/colors';

const theme = createTheme({
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

const useStyles = makeStyles((theme) => ({
    container: {
        width: 800,
        marginLeft: theme.spacing(2),
        [theme.breakpoints.down('xs')]: {
            width: 200
        }
    }
}));

function App () {
    const classes = useStyles();
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Button variant="contained" color="secondary">Click me!</Button>
            <h1>Hello world!</h1>
            <div className={classes.container}>
                <Card>
                    <CardHeader title="My card" subheader="Dodano wczoraj"></CardHeader>
                    <CardContent>
                        aaaa
                    </CardContent>
                    <CardActions>
                        <Button variant="contained" color="primary">aaa</Button>
                    </CardActions>
                </Card>
            </div>
        </ThemeProvider>
    );
}

render(<App />, document.getElementById('app'));
