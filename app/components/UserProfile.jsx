import React from 'react';
import CardMedia from 'material-ui/lib/card/card-media';
import CardTitle from 'material-ui/lib/card/card-title';
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
      <div className="grid-one">
        <div className="grid-item">
          <CardMedia overlay={<CardTitle title="Title" subtitle="Subtitle"/>}>
            <img src="http://lorempixel.com/600/337/nature/"/>
          </CardMedia>
        </div>
      </div>
    </div>
    );
  }

});
