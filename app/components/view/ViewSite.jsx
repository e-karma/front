import React from 'react';
import LocationStore from '../stores/LocationStore.jsx';
import LocationActions from '../actions/LocationActions.jsx';

export default React.createClass({

  getInitialState() {
    return LocationStore.getState();
  },

  componentDidMount() {
    LocationStore.listen(this.onChange);
    LocationActions.fetchLocations();
  },

  componentWillUnmount() {
    LocationStore.unlisten(this.onChange);
  },

  onChange(state) {
    this.setState(state);
  },

  render() {
    if (this.state.errorMessage) {
      return (
        <div>Something is wrong</div>
      );
    }

    if (!this.state.locations.length) {
      return (
        <div>Loading data...</div>
      );
    }
    
    return (
      <ul>
        {this.state.locations.map((location) => {
          return (
            <li>{location.name}</li>
          );
        })}
      </ul>
    );
  }
});
