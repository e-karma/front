import React from 'react';
import CrudMixin from '../../../mixins/crud/index';
import DropDownMenu from 'material-ui/lib/drop-down-menu.js'
import TextField from 'material-ui/lib/text-field.js';
import RaisedButton from 'material-ui/lib/raised-button.js';
import FlatButton from 'material-ui/lib/flat-button.js';
import Toggle from 'material-ui/lib/toggle.js';
import Slider from 'material-ui/lib/slider.js';
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
       { payload: '1', text: 'Product Category1' },
       { payload: '2', text: 'PC2' },
       { payload: '3', text: 'PC3' },
       { payload: '4', text: 'PC4' },
       { payload: '5', text: 'PC5' },
    ];
    return (
      <div>
        <h1 style={{width: '250px', margin: '0 auto'}}>Create Products</h1>
        <TextField hintText="Widget" floatingLabelText="Product Title" ref="firstName" />
        <TextField hintText="The Best Widget Around" ref="lastName" floatingLabelText="Describe The Product" />
        <TextField hintText="$30" ref="price" floatingLabelText="How Much?" />

        <Toggle
          name="toggleName2"
          value="toggleValue2"
          label="In Stock"
          defaultToggled={true}/>
        <Slider name="Quantity" defaultValue={0.5} step={0.10} />
        <FlatButton primary={true} label="Choose an Image">
          <input type="file" id="imageButton"></input>
        </FlatButton>
        <DropDownMenu menuItems={menuItems} />
        <div style={{width: '250px', margin: '0 auto'}}>
          <RaisedButton label="Submit" primary={true} style={{margin: '10px'}} onClick={this.handleLogin} />
        </div>
      </div>
    )
  }
});
