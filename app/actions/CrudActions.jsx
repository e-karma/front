import alt from '../alt';
import request from 'superagent';

class CrudActions {

  createItem(item) {
    let that = this;
    request
      .post('http://localhost:3000/' + item.type.plural)
      .send({
        [item.type.singular]: item.data
      })
      .set('Accept', 'application/json')
      .end(function(err, res){
        if(err) {
          console.log('error while pursuing create on item');
        } else {
          console.log(res.body);
          that.dispatch(res.body);
        }
      });
  }

  readItem(item) {
    let that = this;
    request
      .get('http://localhost:3000/' + item.type.plural + '/' + item.id)
      .set('Accept', 'application/json')
      .end(function(err, res){
        if(err) {
          console.log('error while pursuing read on item');
        } else {
          console.log(res.body);
          that.dispatch(res.body);
        }
      });
  }

  updateItem(item) {

  }

  deleteItem(item) {
    let that = this;
    request
      .del('http://localhost:3000/' + item.type.plural + '/' + item.id)
      .set('Accept', 'application/json')
      .end(function(err, res){
        if(err) {
          console.log('error while pursuing delete on item');
        } else {
          console.log(res.body);
          that.dispatch(res.body);
        }
      });
  }

}

export default alt.createActions(CrudActions);
