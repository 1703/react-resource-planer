import React, {Component} from 'react';
import {SplitButton, MenuItem} from 'react-bootstrap';

export default class TimeUnitPicker extends Component {
    constructor (props) {
      super (props);
    
      this.state = {
        timeUnit: "month",
        title: "Monats Ansicht"
      }
      this.handleUnitSelected = this.handleUnitSelected.bind(this);
    }
  
    handleUnitSelected (eventKey, event) {
      this.setState({timeUnit: eventKey, title: eventKey === "month" ? "Monats Ansicht" : "Wochen Ansicht",});
    }
  
    render () {
        var self = this;

        return (
          <SplitButton title={this.state.title} pullRight id="time-unit-picker" onSelect={this.handleUnitSelected}>
            <MenuItem eventKey="week">Wochen Ansicht</MenuItem>
            <MenuItem eventKey="month">Monats Ansicht</MenuItem>
          </SplitButton>
        )
    }
}