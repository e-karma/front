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
       { payload: '1', text: 'Landing Page' },
       { payload: '2', text: 'Item Grid' },
       { payload: '3', text: 'Contact' },
       { payload: '4', text: 'Fourth Type' },
       { payload: '5', text: 'Fifth Type' },
    ];
    let menuItems2 = [
       { payload: '1', text: 'Component1' },
       { payload: '2', text: 'Component2' },
       { payload: '3', text: 'Component3' },
       { payload: '4', text: 'Component4' },
       { payload: '5', text: 'Component5' },
    ];
    return (
      <div>
        <h1 style={{width: '150px', margin: '0 auto'}}>Create Page</h1>
        <TextField hintText="Title-Tag; SEO" floatingLabelText="Page Title" ref="PageTitle" />
        <TextField hintText="/events" ref="PageUrl" floatingLabelText="/URL" />
        <DropDownMenu menuItems={menuItems1} />
        <DropDownMenu menuItems={menuItems2} />
        <ItemBox/>
        <FlatButton label="Upload Media"/>

        <div style={{width: '250px', margin: '0 auto'}}>
          <RaisedButton label="Submit" primary={true} style={{margin: '10px'}} onClick={this.handleLogin} />
        </div>
      </div>
    )
  }
});
