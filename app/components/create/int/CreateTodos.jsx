import React from 'react';
import CrudMixin from '../../../mixins/crud/index';
import TextField from 'material-ui/lib/text-field.js';
import RaisedButton from 'material-ui/lib/raised-button.js';
import DatePicker from 'material-ui/lib/date-picker/date-picker.js';
import TimePicker from 'material-ui/lib/time-picker/time-picker.js'
import DropDownMenu from 'material-ui/lib/drop-down-menu.js';
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
    let menuItems1 = [
    { payload: '1', text: 'Assign-To User'},
    { payload: '2', text: 'UserA'},
    { payload: '3', text: 'UserB'},
    ];
    let menuItems2 = [
    { payload: '4', text: 'Group1'},
    { payload: '5', text: 'Group2'},
    { payload: '6', text: 'Group3'},
    ];
    let menuItems3 = [
    { payload: '7', text: 'Choose Board'},
    { payload: '8', text: 'BoardA'},
    { payload: '9', text: 'BoardB'},
    ];
    return (
      <div>
        <h1 style={{width: '250px', margin: '0 auto'}}>Create Todo</h1>
        <TextField hintText="The Big Deal!" floatingLabelText="Name" ref="name" />
        <TextField hintText="Huge Budget!" ref="description" floatingLabelText="Description" />
        <DatePicker
          hintText="Date"
          autoOk={this.state.autoOk}
          minDate={this.state.minDate}
          maxDate={this.state.maxDate}
          showYearSelector={this.state.showYearSelector} />
        <DropDownMenu menuItems={menuItems1} />
        <DropDownMenu menuItems={menuItems2} />
        <DropDownMenu menuItems={menuItems3} />

        <div style={{width: '250px', margin: '0 auto'}}>
          <RaisedButton label="Submit" primary={true} style={{margin: '10px'}} onClick={this.handleLogin} />
        </div>
      </div>
    )
  }
});
