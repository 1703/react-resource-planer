import React, {Component} from 'react'

import Avatar from 'material-ui/Avatar';

import {
    blue300,
    indigo900,
    orange200,
    deepOrange300,
    pink400,
    purple500,
    grey400
} from 'material-ui/styles/colors';

export default class Person extends Component {

// --+id (prop)
// --+name (prop)
// --+projects:Projects (prop)
// --+role (prop)


    constructor (props) {
        super (props)

    }

    render () {

        var self = this;

        return <Avatar
            color={blue300}
            backgroundColor={grey400}
            size={50}
        >{ self.props.name.substring(0,1)}</Avatar>
    }
}