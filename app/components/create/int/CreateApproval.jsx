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
    // compose item with this structure for DELETE action
    let item1 = {
      type: {
        // specify model name here in both forms
        singular: 'role',
        plural: 'roles'
      },
      id: 4
    };
    // compose item with this structure for CREATE action
    let item = {
      data: {
        // getting input values from the text fields
        firstName: this.refs.firstName.getValue(),
        lastName: this.refs.lastName.getValue(),
        userEmail: this.refs.userEmail.getValue(),
        userPassword: this.refs.userPassword.getValue()
      },
      type: {
        // specify model name here in both forms
        singular: 'approval',
        plural: 'approvals'
      }
    };
    // call CREATE action on item like this
    this.createItem.createItem(item); // << pass item object to action
    // so calling DELETE action on item will be:
    // this.deleteItem.deleteItem(item) << pass item object to action
  },

  render: function() {
    // setup refs for TextField's using ref="valueNameHereChange"
    // setup action for button click using onClick={this.handleSubmit}
    return (
      <div>
        <h1 style={{width: '150px', margin: '0 auto'}}>Create Approval</h1>
        <TextField hintText="Jason" floatingLabelText="First" ref="firstName" />
        <TextField hintText="Bourne" ref="lastName" floatingLabelText="Last" />
        <TextField hintText="e.g. name@example.com" ref="userEmail" floatingLabelText="Email" /><br/>
        <TextField hintText="Entr your password" ref="userPassword" floatingLabelText="Password" type="password" /><br/>

        <div style={{width: '250px', margin: '0 auto'}}>
          <RaisedButton label="Submit" primary={true} style={{margin: '10px'}} onClick={this.handleSubmit} />
        </div>
        <BasicButton/>
      </div>
    )
  }
});
