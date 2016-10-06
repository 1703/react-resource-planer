import React, {Component} from 'react'
import ExtComponent from './ext_component'
import PersonLane from './person_lane'

import {Grid, Col, Row, Button, Nav, NavItem} from 'react-bootstrap'

export default class Chart extends Component {

// +currentTimeFrame (state)
// +timeUnit (state)
// +timeLane (comp)
// +personLanes (comp)

    constructor (props) {
        super (props)

    }

    createPersonLanes = () => {
        return this.props.persons.map (x => <PersonLane person={x} projects={this.findProjects(x)}/>)
    }

    findProjects = person => {
        return [
            {name: "test1"},
            {name: "test2"}
        ]
    }

    render () {

        var self = this;

        return <Grid>
            {self.createPersonLanes()}
        </Grid>
    }
}