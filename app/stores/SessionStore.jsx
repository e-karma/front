import alt from '../alt';
import SessionActions from '../actions/SessionActions.jsx';

class SessionStore {
  constructor() {
    this.currentUser = null;
    this.bindListeners({
      handleUserLoggedIn: SessionActions.USER_LOGGED_IN,
      handleUserAuthenticated: SessionActions.USER_AUTHENTICATED,
      handleUserLoggedOut:SessionActions.USER_LOGGED_OUT
    });
  }

  handleUserLoggedIn(user) {
    this.currentUser = {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      token: user.token
    };
    window.localStorage.setItem('email', user.email);
    window.localStorage.setItem('token', user.token);
    window.localStorage.setItem('firstName', user.firstName);
    window.localStorage.setItem('lastName', user.lastName);
    console.log('current user was handled at sessionstore');

  }

  handleUserLoggedOut() {
    console.log('user logged out');
    this.currentUser = null;
    window.localStorage.removeItem('email');
    window.localStorage.removeItem('token');
    window.localStorage.removeItem('firstName');
    window.localStorage.removeItem('lastName');
  }

  handleUserAuthenticated(user) {
    this.currentUser = {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      token: user.token
    };
  }

}

export default alt.createStore(SessionStore, 'SessionStore');
