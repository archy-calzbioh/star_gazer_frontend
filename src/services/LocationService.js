import axios from "axios";

const LOCATION_API_BASE_URL = "http://localhost:8000/experiences";

class LocationService {
  getLocations() {
    return axios.get(LOCATION_API_BASE_URL);
  }

  createLocation(location) {
    return axios.post(LOCATION_API_BASE_URL, location);
  }

  getLocationByLocation(location) {
    // Check if location is null or undefined
    if (location === null || location === undefined) {
      // Return a rejected promise with an error message
      return Promise.reject(new Error("Invalid location"));
    }
    // Encode the location value to safely include it in the URL
    const encodedLocation = encodeURIComponent(location);
    return axios.get(LOCATION_API_BASE_URL + "/" + encodedLocation);
  }

  updateLocation(location, updatedLocationData) {
    // Check if location is null or undefined
    if (location === null || location === undefined) {
      // Return a rejected promise with an error message
      return Promise.reject(new Error("Invalid location"));
    }
    // Encode the location value to safely include it in the URL
    const encodedLocation = encodeURIComponent(location);
    return axios.put(
      LOCATION_API_BASE_URL + "/" + encodedLocation,
      updatedLocationData
    );
  }

  deleteLocation(location) {
    // Check if location is null or undefined
    if (location === null || location === undefined) {
      // Return a rejected promise with an error message
      return Promise.reject(new Error("Invalid location"));
    }
    // Encode the location value to safely include it in the URL
    const encodedLocation = encodeURIComponent(location);
    return axios.delete(LOCATION_API_BASE_URL + "/" + encodedLocation);
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new LocationService();
