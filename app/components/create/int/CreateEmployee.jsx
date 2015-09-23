import React from 'react';
import CrudMixin from '../../../mixins/crud/index';
import TextField from 'material-ui/lib/text-field.js';
import RaisedButton from 'material-ui/lib/raised-button.js';
import BasicButton from '../../BasicButton.jsx';
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
    let menuItems = [
       { payload: '1', text: 'Buyer' },
       { payload: '2', text: 'Reccomender' },
       { payload: '3', text: 'Tester' },
    ];

    return (
      <div>
        <h1 style={{width: '250px', margin: '0 auto'}}>Create Employee</h1>
        <TextField hintText="Jason" floatingLabelText="First" ref="firstName" />
        <TextField hintText="Bourne" ref="lastName" floatingLabelText="Last" />
        <TextField hintText="e.g. name@example.com" floatingLabelText="Email" value={this.state.userEmail} onChange={this.handleEmail} /><br/>
        <TextField hintText="Director of Sales" floatingLabelText="Title" value={this.state.userEmail} onChange={this.handleEmail} /><br/>
        <TextField hintText="(123) 456-7890" floatingLabelText="PH #" value={this.state.userEmail} onChange={this.handleEmail} /><br/>
        <DropDownMenu menuItems={menuItems} />
        <div style={{width: '250px', margin: '0 auto'}}>
          <RaisedButton label="Submit" primary={true} style={{margin: '10px'}} onClick={this.handleLogin} />
        </div>
        <BasicButton/>
      </div>
    )
  }
});
