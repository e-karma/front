import React from 'react';


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
      <div className="grid-one">
        <div className="grid-item-select">a</div>
        <div className="grid-item-select">b</div>
        <div className="grid-item-select">c</div>
        <div className="grid-item-select">d</div>
        <div className="grid-item-select">e</div>
        <div className="grid-item-select">f</div>
      </div>
    )
  }
});
