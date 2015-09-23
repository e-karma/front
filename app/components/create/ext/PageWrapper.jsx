// we will be implementing TodoWrapper which will be used along with TodoItem, actually wrapper components are very common in react, we will retrieve data in todo wrapper and then pass it down as a prop to TodoItem for INITIAL RENDER. After initial render, TodoItem will handle data updates itself.

import React from 'react';
import CrudMixin from '../../mixins/crud/index';
import CrudStore from '../../stores/CrudStore.jsx';
import TodoItem from './TodoItem.jsx';

export default React.createClass({
  mixins: [ CrudMixin ],

  getInitialState() {
    return CrudStore.getState();
  },

  componentDidMount() {
    CrudStore.listen(this.onChange);
    let todoId = this.props.params.id;
    let todo = {
      id: todoId,
      type: {
        singular: 'todo',
        plural: 'todos'
      }
    };
    this.readItem.readItem(todo);
  },

  componentWillUnmount() {
    CrudStore.unlisten(this.onChange);
  },

  onChange(state) {
    console.log('new state arrived');
    console.log(state);
    this.setState(state);
  },

  render() {
    return (
      <TodoItem item={this.state.item}/>
    )
  }

});
