import React, {Component} from 'react';
import {SplitButton, MenuItem} from 'react-bootstrap';

export default class TimeUnitPicker extends Component {
    constructor (props) {
      super (props);
    
      this.state = {
        inputValue: "",
        data: props.data || ['Erster', 'Zweiter', 'Dritter']
      }
    
      this.handleUnitSelected = this.handleUnitSelected.bind(this);
    }
  
    render () {

        var self = this;

        return (
          <SplitButton title="Time Unit Picker" pullRight id="time-unit-picker" onSelect={this.handleUnitSelected}>
            <MenuItem eventKey="1">Wochen Ansicht</MenuItem>
            <MenuItem eventKey="2">Monats Ansicht</MenuItem>
          </SplitButton>
        )
    }
}