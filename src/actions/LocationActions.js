var alt = require('../alt');
var LocationsFetcher = require('../utils/LocationsFetcher');

class LocationActions {
  
	fetchLocations() {
	  // we dispatch an event here so we can have "loading" state.
	  this.dispatch();

	  LocationsFetcher.fetch()
	    .then((locations) => {
	      // we can access other actions within our action through `this.actions`
	      this.actions.updateLocations(locations);
	    })
	    .catch((errorMessage) => {
	      this.actions.locationsFailed(errorMessage);
	    });
	}

  updateLocations(locations) {
  	console.log('locations:', locations)
    this.dispatch(locations);
  }	

	locationsFailed(errorMessage) {
	  this.dispatch(errorMessage);
	}

	favoriteLocation(locationId) {
	  this.dispatch(locationId);
	}

}

module.exports = alt.createActions(LocationActions);