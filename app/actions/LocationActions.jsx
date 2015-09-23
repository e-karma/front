import alt from '../alt';
import LocationSource from '../sources/LocationSource.jsx';

class LocationActions {

  updateLocations(locations) {
    this.dispatch(locations);
  }

  fetchLocations() {
    this.dispatch();
    LocationSource.fetch()
      .then((locations) => {
        this.actions.updateLocations(locations);
      })
      .catch((errorMessage) => {
        this.actions.locationsFailed(errorMessage);
      });
  }

  locationsFailed(errorMessage) {
    this.dispatch(errorMessage);
  }

  favoriteLocation(locationId) {
    this.dispatch(locationId);
  }
}

export default alt.createActions(LocationActions);
