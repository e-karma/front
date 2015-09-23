
import React from 'react';

import Colors from 'material-ui/lib/styles/colors';
// import dropdown menu
import Avatar from 'material-ui/lib/avatar';
import FlatButton from 'material-ui/lib/flat-button';
// import toolbars
import Cards from 'material-ui/lib/card/index';
// lets setup react component
export default React.createClass({

// define how the component will be rendered
  render() {
    return (
      <div className="Basic-Card">
        <Cards.Card initiallyExpanded={true}>
          <Cards.CardHeader
            title="User Name"
            subtitle="Tagline"
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
            <FlatButton label="Action1"/>
            <FlatButton label="Action2"/>
          </Cards.CardActions>
        </Cards.Card>
      </div>
    );
  }

});
