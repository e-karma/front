import React from 'react';
import Avatar from 'material-ui/lib/avatar.js';
import FlatButton from 'material-ui/lib/flat-button.js';
import Cards from 'material-ui/lib/card/index';
import mui from 'material-ui';
import Colors from 'material-ui/lib/styles/colors';

let ThemeManager = new mui.Styles.ThemeManager();

export default React.createClass ({
  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  },
  render () {
    return (
      <div>
        <Cards.Card>
          <Cards.CardMedia overlay={<Cards.CardTitle title="Title" subtitle="Subtitle"/>}>
            <img src="http://lorempixel.com/600/337/nature/"/>
          </Cards.CardMedia>
        </Cards.Card>
        <Cards.Card>
          <Cards.CardHeader
            title="Demo Url Based Avatar"
            subtitle="Subtitle"
            avatar="http://lorempixel.com/100/100/nature/"/>
          <Cards.CardActions>
            <FlatButton label="Action1"/>
            <FlatButton label="Action2"/>
          </Cards.CardActions>
          <Cards.CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
            Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
            Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
          </Cards.CardText>
        </Cards.Card>
      </div>
    )
  }
});
