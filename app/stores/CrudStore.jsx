import alt from '../alt';
import CrudActions from '../actions/CrudActions.jsx';

class CrudStore {
  constructor() {
    this.item = null;
    this.bindListeners({
      handleCreateItem: CrudActions.CREATE_ITEM,
      handleReadItem: CrudActions.READ_ITEM,
      handleUpdateItem: CrudActions.UPDATE_ITEM,
      handleDeleteItem: CrudActions.DELETE_ITEM
    });
  }

  handleCreateItem(item) {
    console.log('crud store received event from crud actions');
    console.log(item);
  }

  handleReadItem(item) {
    console.log('crud store received event from crud actions');
    console.log(item);
    this.item = item;
  }

  handleUpdateItem(item) {
    console.log('crud store received event from crud actions');
    console.log(item);
  }

  handleDeleteItem(item) {
    console.log('crud store deleted item');
    console.log(item);
  }

}

export default alt.createStore(CrudStore, 'CrudStore');
