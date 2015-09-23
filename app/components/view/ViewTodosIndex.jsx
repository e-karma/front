import React from 'react';
import mui from 'material-ui';
import BasicCard from './BasicCard.jsx';
import Tabs from 'material-ui/lib/tabs/index';

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
      <div className="settings-subnav">
        <Tabs.Tabs>
          <Tabs.Tab label="All" >
            <section className="grid-one">
              <div className="grid-item"><BasicCard/></div>
              <div className="grid-item"><BasicCard/></div>
              <div className="grid-item"><BasicCard/></div>
            </section>
          </Tabs.Tab>
          <Tabs.Tab label="Admin" >
            <section className="grid-one">
              <div className="grid-item"><BasicCard/></div>
              <div className="grid-item"><BasicCard/></div>
            </section>
          </Tabs.Tab>
          <Tabs.Tab label="Sales" >
            <section className="grid-one">
              <div className="grid-item"><BasicCard/></div>
            </section>
          </Tabs.Tab>
        </Tabs.Tabs>
      </div>
    </div>
    );
  }

});
