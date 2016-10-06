import React, { Component } from 'react';
import {Grid, Col, Row, Button, Nav, NavItem} from 'react-bootstrap'
import './bootstrap/css/bootstrap.min.css'
import './bootstrap/css/bootstrap-theme.min.css'
import logo from './logo.svg';
import './App.css';
import Project from './components/project'

class App extends Component {
  render() {
    return (
        <Grid>
          <Row>
              <h2>Resource Planer</h2>
          </Row>
          <Row>
              <Project />
          </Row>
        </Grid>
    );
  }
}

export default App;
