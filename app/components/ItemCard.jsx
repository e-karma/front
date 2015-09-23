import React from 'react';
import Cards from 'material-ui/lib/card/index';
import FlatButton from 'material-ui/lib/flat-button';
import Avatar from 'material-ui/lib/avatar';
import mui from 'material-ui';
// FORGET ABOUT THAT FILE: ITEMCARD.JSX
let ThemeManager = new mui.Styles.ThemeManager();

export default React.createClass({
  // here we setup proptypes for the item object we expect to be passed to the itemcard to display further
  propTypes: {
    item: React.PropTypes.object
  },

  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  },

  render() {
    // okay we have basic card in place, lets now make it pulling info to display
    // well actually we have a problem
    // because we can't display item without knowing what fields will it have
    // so you will need to create a card FOR EACH MODEL and setup diff placeholder names for diff fields, but let me show you how to do this with todo item here and you will just replicate for all other models
    return (
      <div className="Basic-Card">
        <Cards.Card initiallyExpanded={true}>
          <Cards.CardHeader
            title={this.props.item.name}
            subtitle={this.props.item.description}
            avatar={<Avatar style={{color:'red'}}>A</Avatar>}
            showExpandableButton={true}>
          </Cards.CardHeader>
          <Cards.CardText expandable={true}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
            Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
            Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
          </Cards.CardText>
          <Cards.CardActions expandable={true}>
            <FlatButton label="Edit"/>
            <FlatButton label="Delete"/>
          </Cards.CardActions>
        </Cards.Card>
      </div>
    )
  }

});
