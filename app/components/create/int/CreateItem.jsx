import React from 'react';
import TextField from 'material-ui/lib/text-field.js';
import RaisedButton from 'material-ui/lib/raised-button.js';
import BasicButton from '../../BasicButton.jsx';
// To implement crud on the item
// step 1: import crud mixin
import CrudMixin from '../../../mixins/crud/index';

import mui from 'material-ui';

let ThemeManager = new mui.Styles.ThemeManager();

export default React.createClass({
  // step 2: include crudmixin into react component
  mixins: [CrudMixin],

  getInitialState() {
    return {
      userEmail: '',
      userPassword: ''
    };
  },

  // step 3: create handleSubmit action that will be called upon button click
  handleSubmit(e) {
    e.preventDefault();
    let item = {
      data: {
        name: this.refs.roleName.getValue()
      },
      type: {
        singular: 'role',
        plural: 'roles'
      }
    };
    this.createItem.createItem(item);
  },

  render: function() {
    return (
      <div>
        <h1 style={{width: '150px', margin: '0 auto'}}>Create Role</h1>
        <TextField hintText="Admin" floatingLabelText="Name" ref="roleName" />
        <div style={{width: '250px', margin: '0 auto'}}>
          <RaisedButton label="Submit" primary={true} style={{margin: '10px'}} onClick={this.handleSubmit} />
        </div>
        <BasicButton/>
      </div>
    )
  }
});
