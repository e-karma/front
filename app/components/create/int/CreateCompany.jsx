import React from 'react';
import CrudMixin from '../../../mixins/crud/index';
import TextField from 'material-ui/lib/text-field.js';
import RaisedButton from 'material-ui/lib/raised-button.js';
import IconButton from 'material-ui/lib/icon-button.js';
import ActionGrade from 'material-ui/lib/svg-icons/action/grade.js';
import BasicButton from '../../BasicButton.jsx';
import DropDownMenu from 'material-ui/lib/drop-down-menu.js';
import FlatButton from 'material-ui/lib/flat-button.js';
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
    let menuItems = [
    {payload: '1', text:'Michigan'},
    {payload: '2', text:'Minnesota'},
    {payload: '3', text:'Montana'},
    {payload: '4', text:'Maryland'},
    {payload: '5', text:'Nebraska'},
    ]
    return (
      <div>
        <h1 style={{width: '250px', margin: '0 auto'}}>Create Company</h1>
        <TextField hintText="eWebDesign.co" floatingLabelText="Company Name" ref="companyName" />
        <TextField hintText="info@ewebdesign.co" ref="email" floatingLabelText="Email" />
        <TextField hintText="(456) 789-1234" ref="phone" floatingLabelText="Phone" />
        <TextField hintText="Bourne" ref="lastName" floatingLabelText="Description" />
        <TextField hintText="456 Redwood Lane" floatingLabelText="Address" value={this.state.userEmail} onChange={this.handleEmail} /><br/>
        <TextField hintText="Bourne" ref="lastName" floatingLabelText="City" />
        <DropDownMenu menuItems={menuItems} />

        <FlatButton label="Upload Logo"/>
        <div style={{width: '250px', margin: '0 auto'}}>
          <RaisedButton label="Submit" primary={true} style={{margin: '10px'}} onClick={this.handleLogin} />
        </div>
        <BasicButton/>
      </div>
    )
  }
});
