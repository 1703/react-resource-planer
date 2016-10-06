import React, { Component } from 'react';
import {Grid, Col, Row, Button, Nav, NavItem} from 'react-bootstrap'
import './bootstrap/css/bootstrap.min.css'
import './bootstrap/css/bootstrap-theme.min.css'
import logo from './logo.svg';
import './App.css';
import Chart from './components/chart'

import persons from './sample_data/persons.json'
import projects from './sample_data/projects.json'

import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {

    constructor (props) {
        super (props)
    }

  render() {
    return (
        <MuiThemeProvider>
            <Grid>
              <Row>
                  <h2>Resource Planer</h2>
              </Row>
              <Row>
                  <Chart persons={persons} projects={projects} />
              </Row>
            </Grid>
        </MuiThemeProvider>
    );
  }
}

export default App;
