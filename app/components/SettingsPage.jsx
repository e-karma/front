import React from 'react';
import mui from 'material-ui';
import DatePickers from 'material-ui/lib/date-picker/index';
import AllInputs from './AllInputs.jsx';
import SettingsSubnav from './SettingsSubnav.jsx';
import Toggle from 'material-ui/lib/toggle';

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
        <SettingsSubnav/>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }

});
