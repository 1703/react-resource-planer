import React, {Component} from 'react'
import ExtComponent from './ext_component'
import Person from './person'
import Project from './project'

import {Grid, Col, Row, Button, Nav, NavItem} from 'react-bootstrap'
export default class PersonLane extends ExtComponent {
//
// -+id (prop)
// -+timeUnit (state)
// -+person:Person (prop)
// -+projects:Projects (state)

    constructor (props) {
        super (props)
        this.state = {
            timeUnit: this.initDef (props.timeUnit, "days"),
            projects: this.initDef (props.projects, [])
        }
    }

    createProjects = () => {
        var output = this.state.projects.map ((x) => {
            return <div><Project data={x}/></div>;
        });

        return output;
    }

    render () {
        var self = this;

        return <Grid>
            <Row>
                <Col xs="1">
                    <Person name={self.props.person.name}/>
                </Col>
                <Col xs="11">
                    {self.createProjects()}
                </Col>
            </Row>
        </Grid>
    }
}