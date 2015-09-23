import React from 'react';
import mui from 'material-ui';
import Cards from 'material-ui/lib/cards/index';

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
      <Cards.Card>
        <Cards.CardMedia overlay={<Cards.CardTitle title="Title" subtitle="Subtitle"/>}>
          <img src="http://lorempixel.com/600/337/nature/"/>
        </Cards.CardMedia>
      </Cards.Card>
    )
  }
});
