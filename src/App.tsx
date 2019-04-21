import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import { Provider } from 'react-redux';
import './App.scss';
import Dashboard from './Dashboard';
import configureStore from './store/configureStore';

/**
 * Color Theme
 */
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#4a148c',
    },
    secondary: {
      main: '#7b1fa2',
    },
  },
  typography: {
    useNextVariants: true,
  },
});

const appStore = configureStore({});

/**
 * Main Entry point of app
 */
class App extends React.Component {

  public render() {
    return (
      <Provider store={appStore}>
        <Switch>
          <MuiThemeProvider theme={theme}>
            <Route exact={true} path="/" component={Dashboard} />
          </MuiThemeProvider>
        </Switch>
      </Provider>
    );
  }
}

export default App;
