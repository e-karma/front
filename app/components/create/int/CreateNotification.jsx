import React from 'react';
import CrudMixin from '../../../mixins/crud/index';
import TextField from 'material-ui/lib/text-field.js';
import RaisedButton from 'material-ui/lib/raised-button.js';
import BasicButton from '../../BasicButton.jsx';

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
        <h1 style={{width: '250px', margin: '0 auto'}}>Create Notifications</h1>
        <TextField hintText="Jason" floatingLabelText="First" ref="firstName" />
        <TextField hintText="Bourne" ref="lastName" floatingLabelText="Last" />
        <TextField hintText="e.g. name@example.com" floatingLabelText="Email" value={this.state.userEmail} onChange={this.handleEmail} /><br/>
        <TextField hintText="Enter your password" floatingLabelText="Password" type="password" value={this.state.userPassword} onChange={this.handlePassword} /><br/>

        <div style={{width: '250px', margin: '0 auto'}}>
          <RaisedButton label="Submit" primary={true} style={{margin: '10px'}} onClick={this.handleLogin} />
        </div>
        <BasicButton/>
      </div>
    )
  }
});
