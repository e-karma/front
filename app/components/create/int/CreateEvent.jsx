import React from 'react';
import CrudMixin from '../../../mixins/crud/index';
import DatePicker from 'material-ui/lib/date-picker/date-picker.js';
import DropDownMenu from 'material-ui/lib/drop-down-menu.js';
import TimePicker from 'material-ui/lib/time-picker/time-picker.js'
import TextField from 'material-ui/lib/text-field.js';
import RaisedButton from 'material-ui/lib/raised-button.js';
import BasicButton from '../../BasicButton.jsx';
import Checkbox from 'material-ui/lib/checkbox.js';
import FlatButton from 'material-ui/lib/flat-button.js';
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
    let menuItems = [
    {payload: '1', text: "Event Type A"},
    {payload: '2', text: "Event Type B"},
    {payload: '3', text: "Event Type C"},
    {payload: '4', text: "Event Type D"},
    ];
    let menuItems2 = [
    {payload: '1', text: "User-Invite-1"},
    {payload: '2', text: "User-Invite-2"},
    {payload: '3', text: "User-Invite-3"},
    {payload: '4', text: "User-Invite-4"},
    ];
    return (
      <div>
        <h1 style={{width: '150px', margin: '0 auto'}}>Create Event</h1>
        <TextField hintText="Jason" floatingLabelText="Event Title" ref="eventTitle" />
        <DatePicker
          hintText="Date"
          autoOk={this.state.autoOk}
          minDate={this.state.minDate}
          maxDate={this.state.maxDate}
          showYearSelector={this.state.showYearSelector} />
        <TimePicker
          format="ampm"
          hintText="12hr Format" />
          <Checkbox
            name="checkboxName1"
            value="checkboxValue1"
            label="30 Minutes"/>
          <Checkbox
            name="checkboxName1"
            value="checkboxValue1"
            label="1 Hour"/>
        <DropDownMenu menuItems={menuItems} />
        <Checkbox
          name="checkboxName1"
          value="checkboxValue1"
          label="Once"/>
        <Checkbox
          name="checkboxName1"
          value="checkboxValue1"
          label="Daily"/>
        <Checkbox
          name="checkboxName1"
          value="checkboxValue1"
          label="Weekly"/>

          <DropDownMenu menuItems={menuItems2} />

        <FlatButton label="Upload Image"/>
        <div style={{width: '250px', margin: '0 auto'}}>
          <RaisedButton label="Submit" primary={true} style={{margin: '10px'}} onClick={this.handleLogin} />
        </div>
      </div>
    )
  }
});
