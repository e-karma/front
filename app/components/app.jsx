import React from 'react';
import mui from 'material-ui';
import TopNavbar from './TopNavbar.jsx';

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
        <TopNavbar/>

        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
});
