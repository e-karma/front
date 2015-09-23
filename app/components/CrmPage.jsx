import React from 'react';
import mui from 'material-ui';
import MultiStep from './MultiStep.jsx';
import IconButton from 'material-ui/lib/icon-button.js';
import ActionGrade from 'material-ui/lib/svg-icons/action/grade.js';
import Tabs from 'material-ui/lib/tabs/index';
import Toggle from 'material-ui/lib/toggle';
import BasicCard from './BasicCard.jsx';
import CardHeader from 'material-ui/lib/card/card.js';

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
      <div className="row">
        <div className="flex-container-side-column">
          <div className="flex-item">
            <a href="#/crm/companies"><IconButton tooltip="Link-To Companies" touch={true}><ActionGrade/></IconButton></a>
          </div>
          <div className="flex-item">
            <IconButton tooltip="Link-To Leads" touch={true}><ActionGrade/></IconButton>
          </div>
          <div className="flex-item">
            <IconButton tooltip="Link-To Forecast" touch={true}><ActionGrade/></IconButton>
          </div>
        </div>
        <div className="flex-container-column">
          <Tabs.Tabs>
            <Tabs.Tab label="All">
              <div className="grid-one">
                // <BasicCard initiallyExpanded={false}/>
              </div>
            </Tabs.Tab>
            <Tabs.Tab label="Tasks" >
              <div className="grid-one">
                // <BasicCard initiallyExpanded={false}/>
                <CardHeader
                  title="Demo Url Based Avatar"
                  subtitle="Subtitle"
                  avatar="http://lorempixel.com/100/100/nature/"/>
                // <BasicCard initiallyExpanded={false}/>
              </div>
            </Tabs.Tab>
            <Tabs.Tab label="Opportunities" />
            <Tabs.Tab label="Employees" />
          </Tabs.Tabs>
          {this.props.children}
        </div>
      </div>
    );
  }

});
