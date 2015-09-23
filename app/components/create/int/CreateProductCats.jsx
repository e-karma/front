import React from 'react';
import CrudMixin from '../../../mixins/crud/index';
import TextField from 'material-ui/lib/text-field.js';
import RaisedButton from 'material-ui/lib/raised-button.js';
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
        <h1 style={{width: '350px', margin: '0 auto'}}>Create Product Category</h1>
        <TextField hintText="Services" floatingLabelText="Category Name" ref="catName" />
        <TextField hintText="Best Services Around" ref="lastName" floatingLabelText="Description" />

        <div style={{width: '250px', margin: '0 auto'}}>
          <RaisedButton label="Submit" primary={true} style={{margin: '10px'}} onClick={this.handleLogin} />
        </div>
      </div>
    )
  }
});
