import React from 'react';
import mui from 'material-ui';
import BasicTable from './BasicTable.jsx';
let ThemeManager = new mui.Styles.ThemeManager();

export default React.createClass({

  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  },

  render() {
    return (
      <div>
        <h1>COMPANIES PAGE</h1>
        <BasicTable/>
      </div>
    );
  }
});
