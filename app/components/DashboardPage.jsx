import React from 'react';
import mui from 'material-ui';

import Avatar from 'material-ui/lib/avatar';
import BasicCard from './BasicCard.jsx';
import BasicTable from './BasicTable.jsx';
import Card from 'material-ui/lib/card/card.js';
import CardHeader from 'material-ui/lib/card/card.js';
import CardText from 'material-ui/lib/card/card-text.js';
import CardActions from 'material-ui/lib/card/card-actions.js';
import DashSnap from './DashSnap.jsx';

import FlatButton from 'material-ui/lib/flat-button';
import Tabs from 'material-ui/lib/tabs/index';
import Toggle from 'material-ui/lib/toggle.js';

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
        <div className="dash-container">
          <div className="dash-side">
            <BasicCard/>
          </div>
          <div className="dash-center">
            <DashSnap/>
            <BasicCard/>
            <BasicCard/>
          </div>
          <div className="dash-side">
            <BasicCard/>
          </div>
        </div>
      </div>
    );
  }

});
