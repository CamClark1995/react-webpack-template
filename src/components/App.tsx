import * as React from "react";
import { ThemeProvider } from "@material-ui/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { createTheme, responsiveFontSizes, makeStyles } from "@material-ui/core/styles";
import { themeConfig } from "theme.config";

// Define the global typography/palette for our app
const theme = responsiveFontSizes(
    createTheme({
        palette: themeConfig.palette,
        typography: themeConfig.typography,
    })
);

const useStyles = makeStyles(theme => ({
    toolbar: {
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        backgroundColor: theme.palette.primary.main,
    },
}));

const App = () => {

    const classes = useStyles();

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <div className={classes.toolbar}></div>
            <div>Hello There</div>
        </ThemeProvider>
    )
};

export default App;