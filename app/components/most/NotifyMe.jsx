import React from 'react';
import mui from 'material-ui';

export default React.createClass({
  childContextTypes: {
    muiTheme: React.PropTypes.object
  }
  getChildContext(){
    return muiTheme: ThemeManager.getCurrentTheme()
    };
  },
  render () {
    return (

    )
  }
});
