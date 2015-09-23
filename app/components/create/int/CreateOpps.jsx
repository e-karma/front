import React from 'react';
import CrudMixin from '../../../mixins/crud/index';
import TextField from 'material-ui/lib/text-field.js';
import RaisedButton from 'material-ui/lib/raised-button.js';
import DatePicker from 'material-ui/lib/date-picker/date-picker.js';
import Slider from 'material-ui/lib/slider.js';

import mui from 'material-ui';

let ThemeManager = new mui.Styles.ThemeManager();

export default React.createClass({
  getInitialState() {
    return {
      userEmail: '',
      userPassword: ''
    };
  },
  render: function() {
    return (
      <div>
        <h1 style={{width: '250px', margin: '0 auto'}}>Create Opps</h1>
        <TextField hintText="The Big Deal!" floatingLabelText="Title" ref="title" />
        <TextField hintText="Huge Budget!" ref="description" floatingLabelText="Description (Need)" />
        <Slider name="slider2" defaultValue={0.5} step={0.10} />
        <DatePicker hintText="Estimated Close Date" />
        <TextField hintText="$1000" ref="estAmt" floatingLabelText="Estimated $ Amt." />

        <div style={{width: '250px', margin: '0 auto'}}>
          <RaisedButton label="Submit" primary={true} style={{margin: '10px'}} onClick={this.handleLogin} />
        </div>
      </div>
    )
  }
});
