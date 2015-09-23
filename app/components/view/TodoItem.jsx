// lets call item view page by convention NameItem like TodoItem, I think it is a good name
import React from 'react';
import CrudMixin from '../../mixins/crud/index';
import CrudStore from '../../stores/CrudStore.jsx';
import Cards from 'material-ui/lib/card/index';
import FlatButton from 'material-ui/lib/flat-button';
import Avatar from 'material-ui/lib/avatar';
import mui from 'material-ui';

let ThemeManager = new mui.Styles.ThemeManager();

export default React.createClass({
  mixins: [ CrudMixin ],

  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  },

  handleDelete(e) {
    e.preventDefault();
    // nested todo structure LETS CHECK
    let item = { //well turns out there shouldnt be 'todo' nested lol
        id: this.props.item.todo.id, //this SHOUDL WORK
        type: {
          singular: 'todo',
          plural: 'todos'
        }
    };
    // it passes item to flux here
    this.deleteItem.deleteItem(item);
    // I think it works like that, just compose object with proper delete structure and pass to flux
  },

  render() {
    // this should work but seems it does not... strange
      if(this.props.item) {
        return (
          <div className="Basic-Card">
            <Cards.Card initiallyExpanded={true}>
              <Cards.CardHeader
                title={this.props.item.todo.name}
                subtitle={this.props.item.todo.description}
                avatar={<Avatar style={{color:'red'}}>A</Avatar>}
                showExpandableButton={true}>
              </Cards.CardHeader>
              <Cards.CardText expandable={true}>
                {this.props.item.todo.name}
              </Cards.CardText>
              <Cards.CardActions expandable={true}>
                <FlatButton label="Edit"/>
                <FlatButton label="Delete" onClick={this.handleDelete}/>
              </Cards.CardActions>
            </Cards.Card>
          </div>
        );
      } else {
        return (
          <div>No data available</div>
        );
      }

  }
});
