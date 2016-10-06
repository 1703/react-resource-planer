import React, {Component} from 'react'
import ExtComponent from './ext_component'
import PersonLane from './person_lane'

import {Grid, Col, Row, Button, Nav, NavItem} from 'react-bootstrap'

export default class Chart extends ExtComponent {

// +currentTimeFrame (state)
// +timeUnit (state)
// +timeLane (comp)
// +personLanes (comp)

    constructor (props) {
        super (props)

        this.state = {
            projects: this.initDef (props.projects, [])
        }
    }

    createPersonLanes = () => {
        return this.props.persons.map (x => {
            var projects = this.findProjects(x);
            // console.log("Person:" + x.id + "projects: " + projects.map (y => y.name));
            return <PersonLane person={x} projects={projects}/>;
        });
    }

    findProjects = person => {
        return this.state.projects.filter (x => {
            return x.participants.includes(person.id);
        })
    }

    render () {

        var self = this;

        return <Grid>
            {self.createPersonLanes()}
        </Grid>
    }
}