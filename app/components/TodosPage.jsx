import React from 'react';
import mui from 'material-ui';

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
      <div className="grid-one">
        <div className="grid-item">
        </div>
      </div>
    );
  }

});
