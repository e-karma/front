// We're going to compose one reusable components that depends on other UI components
// here's how you import React.js
import React from 'react';
import { History } from 'react-router';
import { Link } from 'react-router';
// and you import material components like that
// import AppBar from 'material-ui/lib/app-bar';
// import raised button and colors for its customization
import Avatar from 'material-ui/lib/avatar';
import RaisedButton from 'material-ui/lib/raised-button';
import Colors from 'material-ui/lib/styles/colors';

import IconButton from 'material-ui/lib/icon-button';
import NavigationMenu from 'material-ui/lib/svg-icons/navigation/menu';

import DropDownMenu from 'material-ui/lib/drop-down-menu';
// import toolbars
import Toolbars from 'material-ui/lib/toolbar/index';

import SessionStore from '../stores/SessionStore.jsx';
import SessionActions from '../actions/SessionActions.jsx';

// lets setup react component
// this is es6 syntax, let's use it everywhere
// previous other components used es5 syntax which is outdated
export default React.createClass({
  mixins: [ History ],

  getInitialState() {
    return SessionStore.getState();
  },

  transitionToRoute(e, selectedIndex, menuItem) {
    this.history.pushState(null, menuItem.route);
  },

  componentDidMount() {
    console.log('topnavbar is listening');
    SessionStore.listen(this.onChange);
    let userEmail = window.localStorage.getItem('email');
    let userToken = window.localStorage.getItem('token');
    if(userEmail && userToken) {
      let user = {
        email: userEmail,
        token: userToken
      };
      SessionActions.userAuthenticated(user);
    }
  },

  componentWillUnmount() {
    SessionStore.unlisten(this.onChange);
  },

  onChange(state) {
    this.setState(state);
  },

  logOutUser() {
    SessionActions.userLoggedOut(this.state.currentUser);
  },

// define how the component will be rendered
  render() {

    let menuItems = [
      { payload: '1', text: 'CRM', route: '/crm' },
      { payload: '2', text: 'Dashboard', route: '/' },
      { payload: '3', text: 'Locations', route: '/locations' },
      { payload: '4', text: 'Login', route: '/login' },
      { payload: '5', text: 'Messages', route: '/messages' },
      { payload: '6', text: 'Pages', route: '/pages' },
      { payload: '7', text: 'Posts', route: '/posts' },
      { payload: '8', text: 'Preview', route: '/preview' },
      { payload: '9', text: 'Settings', route: '/settings' },
      { payload: '10', text: 'Signup', route: '/signup' },
      { payload: '11', text: 'Sites', route: '/sites' },
      { payload: '12', text: 'Store', route: '/store' },
      { payload: '13', text: 'Todos', route: '/todos' },
      { payload: '14', text: 'Users', route: '/users' },
    ];

    return (
      <div className="top-navbar">
        <Toolbars.Toolbar>
          <Toolbars.ToolbarGroup key={0}  float="left">
            <DropDownMenu menuItems={menuItems} onChange={this.transitionToRoute} />
          </Toolbars.ToolbarGroup>
          {(() => {
            if(this.state.currentUser) {
              return
                    <div>
                      <Toolbars.ToolbarGroup style={{paddingTop: 6 }} float="right" key={1}><Avatar src="images/random-user.jpg" style={{float:"left"}}/>
                        <div style={{float:"left", padding:"12px"}}>
                        {this.state.currentUser.firstName} {this.state.currentUser.lastName}
                        <a href="#" onClick={this.logOutUser}>
                        Log out
                        </a>
                        </div>
                      </Toolbars.ToolbarGroup>
                    </div>;}})(

          )}
        </Toolbars.Toolbar>
      </div>
    );
  }

});
