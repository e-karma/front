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
      <div>
        <div className="grid-container">
          <div className="grid-column-1">Hello</div>
        </div>
        <div className="grid-container">
          <div className="grid-column-2">Hello</div>
          <div className="grid-column-2">Hello</div>
        </div>

        <div className="grid-container">
          <div className="grid-column-2">
            <div className="grid-column-2">Hello</div>
            <div className="grid-column-2">Hello</div>
          </div>
          <div className="grid-column-2">
            <div className="grid-column-3">Hello</div>
            <div className="grid-column-3">Hello</div>
            <div className="grid-column-3">Hello</div>
          </div>
        </div>

        <div className="grid-container">
          <div className="grid-column-3">Hello</div>
          <div className="grid-column-3">Hello</div>
          <div className="grid-column-3">Hello</div>
        </div>

        <div className="grid-container">
          <div className="grid-column-4">Hello</div>
          <div className="grid-column-4">Hello</div>
          <div className="grid-column-4">Hello</div>
          <div className="grid-column-4">Hello</div>
        </div>
      </div>
      )
    }
});
