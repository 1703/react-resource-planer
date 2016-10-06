import React, {Component} from 'react'
import ExtComponent from './ext_component'
import {Button} from 'react-bootstrap'

export default class Project extends ExtComponent {

// ---+id (prop)
// ---+timeUnit (state)
// ---+start (state)
// ---+end (state)
// ---+color (prop)
// ---+status (state)
// ---+name (prop)
// ---+editProject (comp)
// ---+resources[]:Person (prop)

    constructor (props) {
        super(props)
        this.state = {
            timeUnit : this.initDef(props.timeUnit, "days"),
            start : this.initDef(props.start, Date.now()),
            stop : this.initDef(props.stop, Date.now()+(24*60*60*1000))
        }
    }

    updateSize (start, stop, timeunit) {

    }

    render () {

        var self = this;

        var style = {
            width : "500px"
        }

        return <Button style={style} bsSize="large">{self.props.name}</Button>
    }
}