// We're going to compose one reusable components that depends on other UI components
import React from 'react';
import AllInputs from './AllInputs.jsx';
import BasicCard from './BasicCard.jsx';
import Tabs from 'material-ui/lib/tabs/index';
import Toggle from 'material-ui/lib/toggle';
import mui from 'material-ui';

let ThemeManager = new mui.Styles.ThemeManager();

// import raised button and colors for its customization
import Colors from 'material-ui/lib/styles/colors';
// import toolbars


// lets setup react component
// this is es6 syntax, let's use it everywhere
// previous other components used es5 syntax which is outdated
export default React.createClass({

  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  },

// define how the component will be rendered
  render() {

    return (
      <div className="settings-subnav">
        <Tabs.Tabs className="grid-one">
          <Tabs.Tab label="General">
            <section className="grid-one">
              <div className="grid-item"><BasicCard/></div>
              <div className="grid-item"><BasicCard/></div>
              <div className="grid-item"><Toggle label="Toggle Stuff" defaultToggled={true}/></div>
            </section>
          </Tabs.Tab>
          <Tabs.Tab label="Design" >
          </Tabs.Tab>
          <Tabs.Tab label="Modules" />
          <Tabs.Tab label="Notify" />
          <Tabs.Tab label="Priveleges" />
        </Tabs.Tabs>
      </div>
      // <DropDownMenu menuItems={menuItems} onChange={this.transitionToRoute} />
    );
  }

});
