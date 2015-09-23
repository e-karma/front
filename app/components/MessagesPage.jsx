import React from 'react';
import Avatar from 'material-ui/lib/avatar';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import ListDivider from 'material-ui/lib/lists/list-divider';
import CardTitle from 'material-ui/lib/card/card-title';
import Colors from 'material-ui/lib/styles/colors';
import TextField from 'material-ui/lib/text-field.js';

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
      <section>
        <aside className="side-nav-left-vertical">
          <List>
              <ListItem
                leftAvatar={<Avatar src="http://lorempixel.com/150/150/cats/1" />}
                primaryText="Brendan Lim"
                secondaryText={
                  <p>
                    <span style={{color: Colors.darkBlack}}>Brunch this weekend?</span><br/>
                    I&apos;ll be in your neighborhood doing errands this weekend. Do you want to grab brunch?
                  </p>
                }
                secondaryTextLines={2} />
              <ListDivider inset={true} />
              <ListItem
                leftAvatar={<Avatar src="http://lorempixel.com/150/150/cats/2" />}
                primaryText="me, Scott, Jennifer"
                secondaryText={
                  <p>
                    <span style={{color: Colors.darkBlack}}>Summer BBQ</span><br/>
                    Wish I could come, but I&apos;m out of town this weekend.
                  </p>
                }
                secondaryTextLines={2} />



            <ListDivider inset={true} />
            <ListItem
              leftAvatar={<Avatar src="http://lorempixel.com/150/150/cats/3" />}
              primaryText="Grace Ng"
              secondaryText={
                <p>
                  <span style={{color: Colors.darkBlack}}>Oui oui</span><br/>
                  Do you have any Paris recs? Have you ever been?
                </p>
              }
              secondaryTextLines={2} />


            <ListDivider inset={true} />
            <ListItem
              leftAvatar={<Avatar src="http://lorempixel.com/150/150/cats/4" />}
              primaryText="Kerem Suer"
              secondaryText={
                <p>
                  <span style={{color: Colors.darkBlack}}>Birthday gift</span><br/>
                  Do you have any ideas what we can get Heidi for her birthday? How about a pony?
                </p>
              }
              secondaryTextLines={2} />

            <ListDivider inset={true} />
            <ListItem
              leftAvatar={<Avatar src="http://lorempixel.com/150/150/cats/5" />}
              primaryText="Raquel Parrado"
              secondaryText={
                <p>
                  <span style={{color: Colors.darkBlack}}>Recipe to try</span><br/>
                  We should eat this: grated squash. Corn and tomatillo tacos.
                </p>
              }
              secondaryTextLines={2} />
          </List>
        </aside>
        <main>
        <TextField
          hintText="Hint Text"
          defaultValue="Insert Message" />
        </main>
      </section>
    );
  }

});
