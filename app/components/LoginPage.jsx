import React from 'react';
import TextField from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/raised-button';
import mui from 'material-ui';
import BasicButton from './BasicButton.jsx';
import request from 'superagent';
import { History } from 'react-router';
import SessionActions from '../actions/SessionActions.jsx';

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

  render() {
    return (
      <div style={{width: '300px', margin: '0 auto', padding: '100px 0'}}>
        <h1 style={{width: '100px', margin: '0 auto'}}>Login</h1>
        <TextField hintText="e.g. name@example.com" floatingLabelText="Email" value={this.state.userEmail} onChange={this.handleEmail} /><br/>
        <TextField hintText="Enter your password" floatingLabelText="Password" type="password" value={this.state.userPassword} onChange={this.handlePassword} /><br/>
        <div style={{width: '250px', margin: '0 auto'}}>
          <RaisedButton label="Login" primary={true} style={{margin: '10px'}} onClick={this.handleLogin} />
          <RaisedButton label="Back" style={{margin: '10px'}} />
        </div>
        <BasicButton/>
      </div>
    );
  }

});
