// Google Maps utilities for contact information

/**
 * Generate Google Maps search URL for any location
 * @param {string} location - The location to search for (flexible address)
 * @returns {string} Google Maps search URL
 */
export const createGoogleMapsSearchUrl = (location) => {
  const encodedLocation = encodeURIComponent(location)
  return `https://www.google.com/maps/search/?api=1&query=${encodedLocation}`
}

/**
 * Generate Google Maps URL with specific coordinates
 * @param {number} lat - Latitude
 * @param {number} lng - Longitude
 * @param {number} zoom - Zoom level (default: 15)
 * @returns {string} Google Maps URL with coordinates
 */
export const createGoogleMapsCoordinateUrl = (lat, lng, zoom = 15) => {
  return `https://www.google.com/maps/@${lat},${lng},${zoom}z`
}

/**
 * Main function to create flexible Google Maps URL
 * @param {string} location - Address or location name
 * @param {object} options - Optional coordinates and zoom
 * @returns {string} Google Maps URL
 */
export const createMapsUrl = (location, options = {}) => {
  const { lat, lng, zoom = 15 } = options
  
  if (lat && lng) {
    // Use coordinates if provided for precise location
    return createGoogleMapsCoordinateUrl(lat, lng, zoom)
  } else {
    // Use search for flexible location matching
    return createGoogleMapsSearchUrl(location)
  }
}

/**
 * Predefined locations for common use (easy to modify)
 */
export const locations = {
  // Current location - Easy to change
  current: {
    name: "Ho Chi Minh City, Vietnam",
    // Optional: Add coordinates for precise location
    // lat: 10.8230989,
    // lng: 106.6296638,
    getUrl: function() {
      return createMapsUrl(this.name, { lat: this.lat, lng: this.lng })
    }
  },
  
  // Other Vietnam cities - Ready to use
  hanoi: {
    name: "Hà Nội, Việt Nam",
    lat: 21.0285,
    lng: 105.8542,
    getUrl: function() {
      return createMapsUrl(this.name, { lat: this.lat, lng: this.lng })
    }
  },
  
  danang: {
    name: "Đà Nẵng, Việt Nam", 
    lat: 16.0471,
    lng: 108.2068,
    getUrl: function() {
      return createMapsUrl(this.name, { lat: this.lat, lng: this.lng })
    }
  },
  
  cantho: {
    name: "Cần Thơ, Việt Nam",
    lat: 10.0452,
    lng: 105.7469,
    getUrl: function() {
      return createMapsUrl(this.name, { lat: this.lat, lng: this.lng })
    }
  },
  
  // Easy way to add any custom location
  custom: function(locationName, lat = null, lng = null) {
    return {
      name: locationName,
      lat: lat,
      lng: lng,
      getUrl: function() {
        return createMapsUrl(this.name, { lat: this.lat, lng: this.lng })
      }
    }
  }
}
