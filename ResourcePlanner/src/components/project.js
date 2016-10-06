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
            timeUnit : this.initDef(props.data.timeUnit, "days"),
            length : this.initDef(props.data.stop - props.data.start, 0) + "px",
            offset : this.initDef(props.data.start, 0) + "px",
        }
    }

    updateSize (start, stop, timeunit) {
        this.setState({
          timeUnit: timeunit, 
          length: stop - start + "px",
          offset: start + "px"
        });
    }

    render () {

        var self = this;

        var style = {
            width : this.state.length,
            marginLeft : this.state.offset
        }

        return <Button style={style} bsSize="large">{self.props.data.name}</Button>
    }
}