import React from 'react';
import TextField from 'material-ui/lib/text-field.js';
import RaisedButton from 'material-ui/lib/raised-button.js';
import IconButton from 'material-ui/lib/icon-button.js';
import ActionGrade from 'material-ui/lib/svg-icons/action/grade.js';
import BasicButton from '../../BasicButton.jsx';

import mui from 'material-ui';
import { History } from 'react-router';

let ThemeManager = new mui.Styles.ThemeManager();

export default React.createClass({
  mixins: [ History ],

  getInitialState() {
    return {
      userEmail: '',
      userPassword: ''
    };
  },

  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  },

  handleEmail(e) {
    this.setState({
      userEmail: e.target.value
    })
  },

  handlePassword(e) {
    this.setState({
      userPassword: e.target.value
    })
  },

  handleLogin() {
    let history = this.history;
    let user = {
      email: this.state.userEmail,
      password: this.state.userPassword
    };
    SessionActions.updateCurrentUser(user);
    history.pushState(null, '/');
  },

  render: function() {
    return (
      <div>
        <h1 style={{width: '150px', margin: '0 auto'}}>Create User</h1>
        <TextField hintText="Jason" floatingLabelText="First" ref="firstName" />
        <TextField hintText="Bourne" ref="lastName" floatingLabelText="Last" />
        <TextField hintText="e.g. name@example.com" floatingLabelText="Email" value={this.state.userEmail} onChange={this.handleEmail} /><br/>
        <TextField hintText="Enter your password" floatingLabelText="Password" type="password" value={this.state.userPassword} onChange={this.handlePassword} /><br/>
        <IconButton tooltip="Star" tooltipPosition="top" touch={true}><ActionGrade/></IconButton>
        <IconButton tooltip="Star" tooltipPosition="top" touch={true}><ActionGrade/></IconButton>

        <div style={{width: '250px', margin: '0 auto'}}>
          <RaisedButton label="Submit" primary={true} style={{margin: '10px'}} onClick={this.handleLogin} />
        </div>
        <BasicButton/>
      </div>
    )
  }
});
