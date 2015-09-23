import React from 'react';
import TextField from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/raised-button';
import mui from 'material-ui';
import request from 'superagent';

let ThemeManager = new mui.Styles.ThemeManager();

export default React.createClass({

  getInitialState() {
    return {
      userEmail: '',
      userPassword: '',
      userFirstName: '',
      userLastName: ''
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

  handleFirstName(e) {
    this.setState({
      userFirstName: e.target.value
    })
  },

  handleLastName(e) {
    this.setState({
      userLastName: e.target.value
    })
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

  handleSignUp() {
    request
      .post('http://localhost:3000/users')
      .send({
        'user': {
          'first_name': this.state.userFirstName,
          'last_name': this.state.userLastName,
          'email': this.state.userEmail,
          'password': this.state.userPassword
        }
      })
      .set('Accept', 'application/json')
      .end(function(err, res){
        if(err) {
          alert('error while registering!');
        } else {
          
        }
      });

  },

  render() {
    return (
      <div style={{width: '300px', margin: '0 auto', padding: '100px 0'}}>
        <h1 style={{width: '150px', margin: '0 auto'}}>Sign-Up</h1>
        <TextField hintText="e.g. John" floatingLabelText="First name" value={this.state.userFirstName} onChange={this.handleFirstName} /><br/>
        <TextField hintText="e.g. Doe" floatingLabelText="Last name" value={this.state.userLastName} onChange={this.handleLastName} /><br/>
        <TextField hintText="e.g. name@example.com" floatingLabelText="Email" value={this.state.userEmail} onChange={this.handleEmail} /><br/>
        <TextField hintText="Enter your password" floatingLabelText="Password" type="password" value={this.state.userPassword} onChange={this.handlePassword} /><br/>
        <div style={{width: '250px', margin: '0 auto'}}>
          <RaisedButton label="Sign-Up" primary={true} style={{margin: '10px'}} onClick={this.handleSignUp} />
          <RaisedButton label="Back" style={{margin: '10px'}} />
        </div>
      </div>
    );
  }

});
