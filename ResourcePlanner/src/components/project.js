import React, {Component} from 'react'
import {ExtComponent} from 'ext_component'

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
        this.state.timeUnit = initDef(props.timeUnit, "days")
        this.state.start = initDef(props.start, Date.now())
        this.state.stop = initDef(props.stop, Date.now()+(24*60*60*1000))
    }

    render () {

        var self = this;

        return <div>
            HOME :-)
        </div>
    }
}