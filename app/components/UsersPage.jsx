import React from 'react';
import mui from 'material-ui';
import CreateUser from './create/int/CreateUser.jsx';
import BasicCard from './BasicCard.jsx';
import BasicTable from './BasicTable.jsx';
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
            <BasicTable/>
          </Tabs.Tab>
          <Tabs.Tab label="Groups" >
            <section className="grid-one">
              <div className="grid-item"><BasicCard/></div>
              <div className="grid-item"><BasicCard/></div>
            </section>
          </Tabs.Tab>
          <Tabs.Tab label="Roles" >
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
