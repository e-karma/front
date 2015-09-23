import React from 'react';
import Colors from 'material-ui/lib/styles/colors';
import BasicTable from './BasicTable.jsx';
import BasicCard from './BasicCard.jsx';
import Tabs from 'material-ui/lib/tabs/index';


export default React.createClass({

// define how the component will be rendered
  render() {
    return (
      <Tabs.Tabs className="Dash-Snap">
        <Tabs.Tab label="Snapshot">
          <div className="snap-waffle-grid">
            <div className="snap-waffle-item"><p className="dash-snap-number">43</p><span className="center">Something Here</span></div>
            <div className="snap-waffle-item"><p className="dash-snap-number">68</p><span className="center">Data Describe</span></div>
            <div className="snap-waffle-item"><p className="dash-snap-number">33</p><span className="center">Hmmm Numbers</span></div>
            <div className="snap-waffle-item"><p className="dash-snap-number">9</p><span className="center">Something Here</span></div>
            <div className="snap-waffle-item"></div>
            <div className="snap-waffle-item"></div>
            <div className="snap-waffle-item"></div>
            <div className="snap-waffle-item"></div>
          </div>
        </Tabs.Tab>
        <Tabs.Tab label="Graph" />
          <BasicCard/>
        <Tabs.Tab label="Table" >
          <BasicTable/>
        </Tabs.Tab>
      </Tabs.Tabs>
    );
  }

});
