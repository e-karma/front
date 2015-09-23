import alt from '../alt';
import request from 'superagent';

class SessionActions {

  updateCurrentUser(user) {
    let actions = this.actions;
    request
      .post('http://localhost:3000/sessions')
      .send({
        'user': {
          'email': user.email,
          'password': user.password
        }
      })
      .set('Accept', 'application/json')
      .end(function(err, res){
        if(err) {
          console.log('error while logging in');
        } else {
          let user = {
              firstName: res.body.first_name,
              lastName: res.body.last_name,
              email: res.body.email,
              token: res.body.token
          };
          actions.userLoggedIn(user);
        }
      });
  }

  userAuthenticated(user) {
    let that = this;
    request
    .post('http://localhost:3000/sessions/check_auth')
    .send({
      'user': {
        'email': user.email,
        'token': user.token
      }
    })
    .set('Accept', 'application/json')
    .end(function(err, res){
      if(err) {
        console.log('error while authenticating');
      } else {
        let user = {
            firstName: res.body.first_name,
            lastName: res.body.last_name,
            email: res.body.email,
            token: res.body.token
        };
        that.dispatch(user);
      }
    });
  }

  userLoggedIn(user) {
    this.dispatch(user);
  }

  userLoggedOut(user) {
    let that = this;
    request
    .del('http://localhost:3000/sessions')
    .send({
      'user': {
        'token': user.token
      }
    })
    .set('Accept', 'application/json')
    .end(function(err, res){
      if(err) {
        console.log('error while logging out');
      } else {
        that.dispatch();
      }
    });
  }
}

export default alt.createActions(SessionActions);
