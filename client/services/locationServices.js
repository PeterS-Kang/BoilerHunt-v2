import axios from 'axios'
const apiUrl = "http://localhost:8080/api/Locations"

export function getLocations() {
    return axios.get(apiUrl)
}

export function addLocation(location) {
    return axios.post(apiUrl, location)
}

export function updateLocations(id, location) {
    return axios.put(apiUrl + "/" + id,location)
}

export function deleteLocation(id) {
    return axios.delete(apiUrl + "/" + id)
}

