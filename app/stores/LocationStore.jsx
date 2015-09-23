import alt from '../alt';
import LocationActions from '../actions/LocationActions.jsx';
import FavoritesStore from './FavoritesStore.jsx';

class LocationStore {
  constructor() {
    this.locations = [];
    this.errorMessage = null;
    this.bindListeners({
      handleUpdateLocations: LocationActions.UPDATE_LOCATIONS,
      handleFetchLocations: LocationActions.FETCH_LOCATIONS,
      handleLocationsFailed: LocationActions.LOCATIONS_FAILED,
      setFavorites: LocationActions.FAVORITE_LOCATION
    });
  }

  handleUpdateLocations(locations) {
    this.locations = locations;
    this.errorMessage = null;
  }

  handleFetchLocations() {
    this.locations = [];
  }

  handleLocationsFailed(errorMessage) {
    this.errorMessage = errorMessage;
  }

  resetAllFavorites() {
    this.locations = this.locations.map((location) => {
      return {
        id: location.id,
        name: location.name,
        has_favorite: false
      };
    });
  }

  setFavorites(location) {
    this.waitFor(FavoritesStore);

    let favoritedLocations = FavoritesStore.getState().locations;

    this.resetAllFavorites();

    favoritedLocations.forEach((location) => {
      for (var i = 0; i < this.locations.length; i += 1) {

        // set has_favorite to true
        if (this.locations[i].id === location.id) {
          this.locations[i].has_favorite = true;
          break;
        }
      }
    });
  }
  
  getLocation(id) {
    let { locations } = this.getState();

  }
}

export default alt.createStore(LocationStore, 'LocationStore');
