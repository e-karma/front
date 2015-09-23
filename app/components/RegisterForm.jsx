import React from 'react';
import TextField from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/raised-button';


export default React.createClass({

  render() {

    return (
      <div className="register-form">

        <TextField hintText="e.g. name@example.com" floatingLabelText="Email" value={this.state.userEmail} onChange={this.handleEmail} /><br/>
        <TextField hintText="Enter your password" floatingLabelText="Password" type="password" value={this.state.userPassword} onChange={this.handlePassword} /><br/>
      </div>
    );
  }

});
