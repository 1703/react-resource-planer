import React, {Component} from 'react'

export default class ExtComponent extends Component {
    initDef (prop, def) {
        return prop === "undefined" ? def : prop
    }
}