import React from 'react';
import CrudMixin from '../../../mixins/crud/index';
import TextField from 'material-ui/lib/text-field.js';
import DropDownMenu from 'material-ui/lib/drop-down-menu.js';
import RaisedButton from 'material-ui/lib/raised-button.js';
import BasicButton from '../../BasicButton.jsx';
import FlatButton from 'material-ui/lib/flat-button.js';
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
      {payload: '1', text: 'Tag1'},
      {payload: '2', text: 'Tag2'},
      {payload: '3', text: 'Tag3'},
      {payload: '4', text: 'Tag4'},
    ];
    return (
      <div>
        <h1 style={{width: '200px', margin: '0 auto'}}>Create Post</h1>
        <TextField hintText="Jason" floatingLabelText="Post Title" ref="postTitle" />
        <TextField hintText="Bourne" ref="subTitle" floatingLabelText="Sub Title" />
        <FlatButton label="Upload Banner"/>
        <DropDownMenu menuItems={menuItems} />
        <div style={{width: '250px', margin: '0 auto'}}>
          <RaisedButton label="Submit" primary={true} style={{margin: '10px'}} onClick={this.handleLogin} />
        </div>
      </div>
    )
  }
});
