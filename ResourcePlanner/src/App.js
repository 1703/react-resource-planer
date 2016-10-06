import React, { Component } from 'react';
import {Grid, Col, Row, Button, Nav, NavItem} from 'react-bootstrap'
import './bootstrap/css/bootstrap.min.css'
import './bootstrap/css/bootstrap-theme.min.css'
import logo from './logo.svg';
import './App.css';
import Project from './components/project'

import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
  render() {
    return (
        <MuiThemeProvider>
            <Grid>
              <Row>
                  <h2>Resource Planer</h2>
              </Row>
              <Row>
                  <Project name={"test project 1"}/>
              </Row>
            </Grid>
        </MuiThemeProvider>
    );
  }
}

export default App;
