import React from 'react';
import CrudMixin from '../../../mixins/crud/index';
import ItemBox from '../../ItemBox.jsx';
import TextField from 'material-ui/lib/text-field.js';
import ListDivider from 'material-ui/lib/lists/list-divider.js';
import RaisedButton from 'material-ui/lib/raised-button.js';
import BasicButton from '../../BasicButton.jsx';
import FlatButton from 'material-ui/lib/flat-button.js';
import DropDownMenu from 'material-ui/lib/drop-down-menu.js'


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
    let menuItems1 = [
       { payload: '1', text: 'Theme 1' },
       { payload: '2', text: 'Theme 2' },
       { payload: '3', text: 'Theme 3' },
       { payload: '4', text: 'Theme 4' },
       { payload: '5', text: 'Theme 5' },
    ];
    return (
      <div>
        <h1 style={{width: '150px', margin: '0 auto'}}>Create Site</h1>
        <TextField hintText="Title-Tag; SEO" floatingLabelText="Site Name" ref="SiteName" />
        <TextField hintText="eWebDesign.co" ref="alias" floatingLabelText="Alias" />
        <DropDownMenu menuItems={menuItems1} />

        <ItemBox/>
          <FlatButton label="Upload Logo"/>
        <ItemBox/>

        <div style={{width: '250px', margin: '0 auto'}}>
          <RaisedButton label="Submit" primary={true} style={{margin: '10px'}} onClick={this.handleLogin} />
        </div>
      </div>
    )
  }
});
